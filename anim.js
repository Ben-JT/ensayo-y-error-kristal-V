// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I'll drown my beliefs", time: 24 },
  { text: "to have your babies", time: 36 },
  { text: "i'll dress like your nice", time: 48 },
  { text: "and wash your swollen feet", time: 60 },
  { text: "just", time: 69 },
  { text: "don't leave", time: 74 },
  { text: "don't leave", time: 80 },
  { text: "i'm not living", time: 95 },
  { text: "i'm just killing time", time: 107 },
  { text: "your tiny hands", time: 119 },
  { text: "your crazy kitten smile", time: 130 },
  { text: "just", time: 139 },
  { text: "don't leave", time:144  },
  { text: "don't leave", time: 150 },
  { text: "and true love waits", time: 188 },
  { text: "in haunted attics", time: 202 },
  { text: "and true love lives", time: 212 },
  { text: "on lollipops and crisps", time: 225 },
  { text: "just", time: 233 },
  { text: "don't leave", time: 238 },
  { text: "don't leave", time: 242 },
  { text: "don't leave", time: 262 },
  { text: "don't leave", time: 287 },

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