"use strict";

function generarProporcionAurea(length) {
  // Definimos la constante phi (proporción áurea)
  var phi = 1.618; // Creamos un array inicial con el valor 1

  var array = [1]; // Utilizamos un bucle for para generar los siguientes elementos del array

  for (var i = 1; i < length; i++) {
    // Calculamos el siguiente número multiplicando el último número del array por la proporción áurea
    var siguienteNumero = array[array.length - 1] * phi; // Redondeamos el siguiente número para que tenga máximo 3 decimales después de la coma

    var siguienteNumeroRedondeado = parseFloat(siguienteNumero.toFixed(3)); // Agregamos el número redondeado al array

    array.push(siguienteNumeroRedondeado);
  } // Devolvemos el array con los números que siguen la proporción áurea


  return array;
} // Llamamos a la función para generar el array con 12 elementos


var arrayProporcionAurea = generarProporcionAurea(12); // Imprimimos el array resultante

console.log(arrayProporcionAurea);
var resultado = document.querySelector("#resultado");
resultado.innerHTML += "\n<section class=\"flex-col justify-center  rounded bg-blue-100\">\n    <p class=\"text-center p-1\" > ".concat(arrayProporcionAurea.join(',  '), "</p>\n</section>\n");
//# sourceMappingURL=proporcion_aurea.dev.js.map
