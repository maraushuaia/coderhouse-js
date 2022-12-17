// DECLARACION DE VARIABLES
let causa = "";
let seguir = false;
let cantidadCausasTotal = 5;
let causasSelccionadas = "";

// Clase del objeto Causas
class Causas {
    constructor(causa_numero, fecha_infraccion, importe_multa) {
        this.numerocausa = causa_numero;
        this.fechainfraccion = fecha_infraccion;
        this.importemulta = importe_multa;
    }

    mostrar () {
        console.log("Causa:" + this.numerocausa + " fecha infraccion:" + this.fechainfraccion + " Importe Multa: $" +this.importemulta);
    }

    vencePagoBonificado () {
        // Obtengo la fecha del día de hoy
        let hoy = new Date();

        // Le pregunto al usuario cuando fue notificada la causa que seleccionó, de esta forma determino los 10 dias que tiene de beneficio de pago bonificado
        let muestraFechaNotificacion = prompt("Ingrese la fecha en que le notificaron dicha causa:"+ "\n"+ "Use el siguiente formato: yyyy/mm/dd");
        let fechaNotificacion = Date.parse(muestraFechaNotificacion)
        console.log("Fecha notificacion: " + muestraFechaNotificacion);

        // Calculo cuando venció o vencerá su opción de pago bonificado de 10 DIAS
        let diezDias = 1000 * 60 * 60 * 24 * 10;
        let vence = fechaNotificacion + diezDias;
        let vencePagoBonificado = new Date(vence);
        console.log("El pago bonificado VENCE el: " + vencePagoBonificado);

        if (vencePagoBonificado <= hoy){
            return false;
        }
        else return true;
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

// PREGUNTO QUÉ CAUSA DESEA PAGAR Y LA INACTIVO A ESA PARA FUTUROS PAGOS
function seleccionarCausa() {
        let seleccionada = prompt("¿Qué causa desea pagar: (1/2/3/4/5)?");
        if ((seleccionada >= 1) && (seleccionada <=5)) {
            return seleccionada
        }
        else
            console.log("Presione una opcion válida.!");
    }

// Establezco los datos de los objetos que usaré
const causa1 = new Causas("T-123456-0/2022", "15/01/2022", 10000);
const causa2 = new Causas("T-234567-0/2022", "15/02/2022", 20000);
const causa3 = new Causas("T-345678-0/2022", "15/03/2022", 30000);
const causa4 = new Causas("T-456789-0/2022", "15/04/2022", 40000);
const causa5 = new Causas("T-567890-0/2022", "15/05/2022", 50000);

// Muestro en consola las causas para que luego seleccionen
causa1.mostrar();
causa2.mostrar();
causa3.mostrar();
causa4.mostrar();
causa5.mostrar();


let seleccion = seleccionarCausa();
console.log("Contenido seleccion: "+seleccion)

