
deslizador = document.getElementById("simuladorTemperatura");
textoTemperatura = document.getElementById("temperatura");
deslizador.addEventListener("input", (event)=>{
    textoTemperatura.textContent = event.target.value 
});