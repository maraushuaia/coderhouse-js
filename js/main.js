/*

OBJETIVOS DEL CÓDIGO:
- Tengo que mostrar causas a la persona
- Tengo que darle la opción de seleccionar una para pagar
- Le consulto cuando fue notificada dicha causa para determinar si puede acceder a un descuento del 50%
- Si se le venció el plazo de 10 dias para acceder al beneficio del descuento
  deberá pagar el monto definido como MULTA, caso contrario indicarle monto con descuento del 50%
- Finalmente, también lo que efectúo es el calculo de cuando vencen los dias días para acceder al descuento, sea esto en el pasado o en el futuro


IMPORTANTE: 
- Abrir la consola pues muestro datos en ella
*/

// Definino las variables para guardar información de las multas
let nroCausa1 = "T-1111-0/2022";
let importeMulta1 = 1000;

let nroCausa2 = "T-2222-0/2022";
let importeMulta2 = 2000;

let nroCausa3 = "T-3333-0/2022";
let importeMulta3 = 3000;

let nroCausa4 = "T-4444-0/2022";
let importeMulta4 = 4000;

let nroCausa5 = "T-5555-0/2022";
let importeMulta5 = 5000;

// Inicializo variables
let causasSeleccionadas = 0;
let maximoCausas = 5;
let pagar = true;
let causaApagar = "";
let multa = 0;


// Otras Variables
let excluir1 = false;
let excluir2 = false;
let excluir3 = false;
let excluir4 = false;
let excluir5 = false;

let subTotal = 0;


// Declaro FUNCIONES

// IMPRIMO LAS CAUSAS EN CONSOLA
function mostrarCausas() {
    console.log("1 - CAUSAS EN CURSO");
    console.log("Causa 1: "+ nroCausa1 + " - Por un importe de: $"+importeMulta1);
    console.log("Causa 2: "+ nroCausa2 + " - Por un importe de: $"+importeMulta2);
    console.log("Causa 3: "+ nroCausa3 + " - Por un importe de: $"+importeMulta3);
    console.log("Causa 4: "+ nroCausa4 + " - Por un importe de: $"+importeMulta4);
    console.log("Causa 5: "+ nroCausa5 + " - Por un importe de: $"+importeMulta5);
}


// PREGUNTO QUÉ CAUSA DESEA PAGAR Y LA INACTIVO A ESA PARA FUTUROS PAGOS
function seleccionarCausa(causaApagar) {
    let seleccionada = prompt("¿Qué causa desea pagar: (1/2/3/4/5)?");
    switch(seleccionada) {
        case "1":
            causaApagar = nroCausa1;
            multa = importeMulta1;
            causasSeleccionadas = causasSeleccionadas + 1
            break;
        case "2":
            causaApagar = nroCausa2;
            multa = importeMulta2;
            causasSeleccionadas = causasSeleccionadas + 1
            break;            
        case "3":
            causaApagar = nroCausa3;
            multa = importeMulta3;
            causasSeleccionadas = causasSeleccionadas + 1
            break;
        case "4":
            causaApagar = nroCausa4;
            multa = importeMulta4;
            causasSeleccionadas = causasSeleccionadas + 1
            break;
        case "5":
            causaApagar = nroCausa5;
            multa = importeMulta5;
            causasSeleccionadas = causasSeleccionadas + 1
            break;
    }
}

// CON ESTA FUNCION DETERMINO CUANDO VENCE LA OPCION DE PAGO BONIFICADO Y CUANTO DEBE PAGAR
function calculoSiVencio(fechaNotificacion){
    // Obtengo la fecha del día de hoy
    let hoy = new Date();

    // Calculo cuando venció o vencerá su opción de pago bonificado
    let diezDias = 1000 * 60 * 60 * 24 * 10;
    let vence = fechaNotificacion + diezDias;
    let vencePagoBonificado = new Date(vence);
    console.log("El pago bonificado VENCE el: " + vencePagoBonificado);
    
    // Entra si la fecha de vencimiento pago bonificado es anterior a hoy
    if (vencePagoBonificado <= hoy){
        console.log("Deberá pagar el total de la multa, establecida en : "+causaApagar+" por un monto de:$ "+multa);
        subTotal = subTotal + multa;
        console.log("SubTotal Acumulado: "+ subTotal);
        console.log("Pues el pago Bonificado VENCIO EL: "+vencePagoBonificado);
        alert("No puede acceder al descuento"+"\n"+"Venció el día: "+vencePagoBonificado+"\n"+"Deberá pagar el total de la multa:  $"+multa);
    }
    // Entra si aún está dentro de los 10 dias de notificado. Accede al descuento del 50%
    else{
        let vence = fechaNotificacion + diezDias;
        let vencePagoBonificado = new Date(vence);
        console.log("Su opción a pagar con descuento vence el: "+vencePagoBonificado);
        console.log("Hasta esa fecha podrá pagar: "+causaApagar+" por un monto de:$ "+multa/2);
        subTotal = subTotal + multa/2;
        console.log("SubTotal Acumulado: "+ subTotal);
        alert("Usted accedió a un descuento del 50% de su multa"+"\n"+"Deberá pagar: $"+multa/2+"\n"+"Podrá pagar hasta el día: "+vencePagoBonificado);
    }
}

// CON ESTA FUNCION DETERMINO SI DESEA SEGUIR COMPRANDO
function agregarCausa(){
    let pregunta = prompt("¿Desea agregar otra causa para pagar? (s/n)").toLowerCase();
    if (pregunta == "s"){
        console.log("Seguirá pagando");
        return true;
    }
    if (pregunta == "n"){
        console.log("No seguirá pagando");
        return false;
    }
}


// INICIO EL PROGRAMA
mostrarCausas();
do {
    seleccionarCausa();
    // Le pregunto al usuario cuando fue notificada la causa que seleccionó, de esta forma determino los 10 dias que tiene de beneficio de pago bonificado
    let muestraFechaNotificacion = prompt("Ingrese la fecha en que le notificaron dicha causa:"+ "\n"+ "Use el siguiente formato: yyyy/mm/dd");
    let fechaNotificacion = Date.parse(muestraFechaNotificacion)
    calculoSiVencio(fechaNotificacion);
    multa = 0;
}
while (agregarCausa())

console.log("El monto total acumulado que deberá pagar es de de: $"+ subTotal);
alert("El monto total acumulado que deberá pagar es de de: $"+ subTotal);
