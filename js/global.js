/*
    Obtengo el CUIL almacenado en Session Storage que usaré para buscar antecedentes posteriormente
*/
const usuario = () =>{
    return JSON.parse(sessionStorage.getItem("cuil"));
};

/*
    Guardo en SESSION STORAGE el ID de la Causa Seleccionada
    Esa info la utilizo para luego indexar los descargos de cada causa
*/
const guardarCausaSeleccionadaSS = (idCausa) => {
    sessionStorage.setItem("cauSelect", JSON.stringify(idCausa));
};

/*
    Busco el ID de la causa previamente almacenada el Session Storage
*/
const buscarCausaSeleccionadaSL = () => {
    return JSON.parse(sessionStorage.getItem("cauSelect"));
}

