//FUNCIONES CONEXION
async function connect() {
    try {
        const port = await navigator.serial.requestPort();
        await port.open({ baudrate: 9600 }); // Ajusta la velocidad de baudios según la configuración de tu micro:bit

        // Escuchar eventos de recepción de datos
        const reader = port.readable.getReader();
        console.log("Conectado!")
        return reader;
    } catch (error) {
        console.error("Error de conexión:", error);
        return null;
    }
}

//FUNCIONES CONTROL
function controlVentilador() {
    let temperaturaActual = document.getElementById("simuladorTemperatura").value;
    let temperaturaMaxima = document.getElementById("temperaturaMaxima").value;
    console.log({temperaturaActual,temperaturaMaxima});
    const textoVentilador = document.getElementById("ventilador");
    const iconoVentilador = document.getElementById("textoVentilador");

    if(temperaturaActual>temperaturaMaxima)
    {
        textoVentilador.textContent="Encendido";
        iconoVentilador.style.color="green";
    }
    else
    {
        textoVentilador.textContent="Apagado";
        iconoVentilador.style.color="red";
    }

}

//Ejecutar pagina
let deslizador = document.getElementById("simuladorTemperatura");
let textoTemperatura = document.getElementById("temperatura");
deslizador.addEventListener("input", (event) => {
    textoTemperatura.textContent = event.target.value
});

//document.onclick = async () => {
//    lector = await connect();
//}
    setInterval(controlVentilador,1000);