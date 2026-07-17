const fecha = new Date("July 26, 2026 16:00:00").getTime();

const contador = document.getElementById("contador");

setInterval(() => {

const ahora = new Date().getTime();

const diferencia = fecha - ahora;

const dias = Math.floor(diferencia / (1000*60*60*24));

const horas = Math.floor((diferencia % (1000*60*60*24))/(1000*60*60));

const minutos = Math.floor((diferencia % (1000*60*60))/(1000*60));

const segundos = Math.floor((diferencia % (1000*60))/1000);

contador.innerHTML =
"⏳ Faltan<br><br>" +
dias + " días " +
horas + " horas<br>" +
minutos + " min " +
segundos + " seg";

},1000);
