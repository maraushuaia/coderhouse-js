const baseDocumentos = [];
const documentosEnUnaCausa = [];
const indiceDocumentos = [];

class documento {
    constructor(idDocumento, idCausa, cuil, email, domicilioReal, mensaje, tipoDocumento, archivo, fechaEnvio) {
        this.idDocumento = idDocumento;
        this.idCausa = idCausa;
        this.cuil = cuil;
        this.email = email;
        this.domicilioReal = domicilioReal;
        this.mensaje = mensaje;
        this.tipoDocumento = tipoDocumento;
        this.archivo = archivo;
        this.fechaEnvio = fechaEnvio;
    };

    guardarDescargo(documento) {
        baseDocumentos.push(documento);
    }
}

const buscarDescargosCausa = (idCausa, cuil) => {
    let baseDB = restaurarDocumentosLS();
    if (baseDB !== null){
        for (let documento of baseDB) {
            if ((documento.idCausa === idCausa) &&(documento.cuil === cuil)) {
                documentosEnUnaCausa.push(documento)
            }
        }
    }
    else{
        return false;
    }
}

const eliminarDescargo = (idDocumento, idCausa) => {
    console.log("Entró al proceso de eliminar Documento.");
    
    let dbDocumentos = restaurarDocumentosLS();

    let posicion = dbDocumentos.findIndex(eliminar =>
        ((eliminar.idDocumento === idDocumento) && (eliminar.idCausa === idCausa)))
    
    if (posicion >= 0) {
        console.log("Está buscando la posición dentro del []:", posicion);
        dbDocumentos.splice(posicion,1);
        console.log("Documentos en Causa Actualizado => ",dbDocumentos);
        localStorage.setItem("documentos", JSON.stringify(dbDocumentos));
        console.log("Documentos de DB => ", baseDocumentos);
    }
}

const creaIndiceDocumento = () =>{
    let indiceActual = JSON.parse(localStorage.getItem("indice"));
    console.log("Indice actual en LS => ", indiceActual);
    let siguienteIndice = indiceActual + 1;
    console.log("Nuevo Indice => ", siguienteIndice);
    localStorage.setItem("indice", JSON.stringify(siguienteIndice));
    console.log("Indice almacenado en SL =>", siguienteIndice);
    return siguienteIndice;
}

const causaSeleccionada = () =>{
    return JSON.parse(sessionStorage.getItem("cauSelect"));
};

const enviarDescargo = () => {
    const formulario = document.getElementById("enviaDescargo");
    formulario.onsubmit = (event) => {
        event.preventDefault();
        let email = document.getElementById("formEmail").value;
        let domicilioReal = document.getElementById("formDomicilioReal").value;
        let mensaje = document.getElementById("formMensaje").value;
        let tipoDocumento = document.getElementById("tipoContacto").value;
        let archivo = document.getElementById("formArchivo").value;
        let fechaEnvio = new Date();
        enviarFormulario(email, domicilioReal, mensaje, tipoDocumento, archivo, fechaEnvio);
    }
    console.log("Opero con el usuario CUIL: "+usuario());
    console.log("Incorporaré un documento en la causa ID NRO.: ", causaSeleccionada());
};

const enviarFormulario = (email, domicilioReal, mensaje, tipoDocumento, archivo, fechaEnvio) => {
    let almacenar = new documento(creaIndiceDocumento(),causaSeleccionada(),usuario(),email, domicilioReal, mensaje, tipoDocumento, archivo, fechaEnvio);
    almacenar.guardarDescargo(almacenar);
    console.log("Capturo Mensaje y almaceno como Objeto: =>",almacenar);
    guardarDBDocumentosLS(baseDocumentos, almacenar);
};

const recuperarDBLocalS = (idPersona) => {
    return JSON.parse(localStorage.getItem(idPersona));
}

const restaurarDocumentosLS = () =>{
    return JSON.parse(localStorage.getItem("documentos"));
}

const guardarDocumentosLS = (info) =>{
    localStorage.setItem("documentos", JSON.stringify(info));
}

const guardarDBDocumentosLS = (baseDocumentos, ultimoDocumento) =>{
    baseActual = restaurarDocumentosLS();
    if (baseActual === null) {
        //console.log("Base Actual en LS =>", baseActual);
        guardarDocumentosLS(baseDocumentos);
    }
    else{
        console.log("Encontré información guardada en Local Storage");
        console.log("Local Storage Previo Actualizacionr => ", baseActual);
        console.log("Se incorporará este Ultimo documento => ", ultimoDocumento);
        let actualizar = baseActual;
        actualizar.push(ultimoDocumento);
        guardarDocumentosLS(actualizar);
        console.log("Local Storage Actualizado => ", actualizar);
    }
};

enviarDescargo();