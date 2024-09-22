// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 16 },
  { text: "ella lo estaba soñando con la luz en su pupila", time: 23 },
  { text: "y el amarillo del Sol iluminaba la esquina", time: 30 },
  { text: "lo sentía tan cercano", time: 37 },
  { text: "lo sentía desde niña", time: 39 },
  { text: "ella sabía que él sabia que algún día pasaría", time: 45 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 50 },
  { text: "no te apures, no detengas", time: 55 },
  { text: "el instante del encuentro", time: 57 },
  { text: "está dicho que es un hecho", time: 59 },
  { text: "no la pierdas, no hay derecho", time: 61 },
  { text: "no te olvides que la vida casi nunca está dormida", time: 66 },
  { text: "Perdón si se desincroniza la letra :v", time:72  },
  { text: "en ese bar tan desierto nos esperaba el encuentro", time: 92 },
  { text: "ella llegó en limusina", time: 99 },
  { text: "amarrilla, por su puesto", time: 101 },
  { text: "él se acercó de repente, la miró tan de frente", time: 108 },
  { text: "toda un vida soñada y no pudo decir nada", time: 116 },
  { text: "ella sabía que él sabía que algún día pasaría", time: 122 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 127 },
  { text: "no te apures, no detengas", time: 132 },
  { text: "el instante del encuentro", time: 133 },
  { text: "está dicho que es un hecho", time: 136 },
  { text: "no la pierdas, no hay derecho", time: 138 },
  { text: "no te olides que la vida", time: 141 },
  { text: "casi nunca está dormida", time: 143 },
  { text: "Listo sufiente cringe, GRACIAS POR TU TIEMPO :V", time: 148 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);