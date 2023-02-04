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
        console.log("Se encontró el documento en la posición: ", posicion);
        dbDocumentos.splice(posicion,1);
        console.log("Todos los Documentos de la DB Actual => ",dbDocumentos);
        let baseTemporal = dbDocumentos;
        console.log("Datos de DB Temporal => ", baseTemporal);
        localStorage.setItem("documentos", JSON.stringify(dbDocumentos));
    }
}

/*
    Creo un indice incremental para identificar los documentos enviados por Formulario de esta forma
    me es más facil determinar qué documento se debe eliminar cuando la persona lo desea
*/

const creaIndiceDocumento = () =>{
    let indiceActual = JSON.parse(localStorage.getItem("indice"));
    console.log("Indice actual en LS => ", indiceActual);
    let siguienteIndice = indiceActual + 1;
    console.log("Nuevo Indice => ", siguienteIndice);
    localStorage.setItem("indice", JSON.stringify(siguienteIndice));
    console.log("Indice almacenado en SL =>", siguienteIndice);
    return siguienteIndice;
}

/*
    Capturo datos del formulario de envio de "Documentos" y procedo a guardar en Local Storage
*/
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
        let almacenar = new documento(creaIndiceDocumento(),buscarCausaSeleccionadaSL(),usuario(),email, domicilioReal, mensaje, tipoDocumento, archivo, fechaEnvio);
        almacenar.guardarDescargo(almacenar);
        console.log("Capturo Mensaje y almaceno como Objeto: =>",almacenar);
        guardarDBDocumentosLS(baseDocumentos, almacenar);
        location.href="./causa-detalles.html";
    }
    console.log("Opero con el usuario CUIL: "+usuario());
    console.log("Incorporaré un documento en la causa ID NRO.: ", buscarCausaSeleccionadaSL());
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