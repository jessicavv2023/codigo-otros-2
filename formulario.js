var formulario = document.querySelector(".formulario");
// se agrega la varialbe alerta
var alerta = document.querySelector(".alerta");
// se cambia form por formulario
formulario.onsubmit = function (e) {
  // el metodo correcto es preventDefault no prevent
  e.preventDefault();

  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);
  // se cambio el === por <
  if (nombre.length < 3 || edad < 18 || edad > 120) {
    var mensaje = document.createElement("ul"); // Creamos una lista
    mensaje.classList.add("error");

    if (nombre.length < 3) {
      var itemNombre = document.createElement("li");
      itemNombre.textContent =
        "* Escriba un nombre con más o igual a tres caracteres para que sea valido.";
      mensaje.appendChild(itemNombre);
    }

    if (edad < 18 || edad > 120) {
      var itemEdad = document.createElement("li");
      itemEdad.textContent =
        "* La edad debe ser mayor a 18 pero menor a 120 años.";
      mensaje.appendChild(itemEdad);
    }

    alerta.appendChild(mensaje); // Agregamos la lista al div con la clase "alerta"
    setTimeout(function () {
      mensaje.style.display = "none";
    }, 3000); // Hacemos que el mensaje desaparezca después de 3 segundos
  } else {
    agregarInvitado(nombre, edad, nacionalidad);
  }
  // se quita el botón de eliminar invitado que se encuentra al final de la  página
  // var botonBorrar = document.createElement("button");
  // botonBorrar.textContent = "Eliminar invitado";
  // botonBorrar.id = "boton-borrar";
  // var corteLinea = document.createElement("br");
  // document.body.appendChild(corteLinea);
  // document.body.appendChild(botonBorrar);

  function agregarInvitado(nombre, edad, nacionalidad) {
    if (nacionalidad === "ar") {
      nacionalidad = "Argentina";
    } else if (nacionalidad === "mx") {
      nacionalidad = "Mexicana";
    } else if (nacionalidad === "vnzl") {
      nacionalidad = "Venezolana";
    } else if (nacionalidad === "per") {
      nacionalidad = "Peruana";
    }

    var lista = document.getElementById("lista-de-invitados");

    var elementoLista = document.createElement("div");
    elementoLista.classList.add("elemento-lista");
    // en la funcion de agregarInvitado no es added es add
    lista.appendChild(elementoLista);

    // se comentó este bloque de texto para evitar que se replique el nombre en la lsita de invitados
    // var spanNombre = document.createElement("span");
    // var inputNombre = document.createElement("input");
    // var espacio = document.createElement("br");
    // spanNombre.textContent = "Nombre: ";
    // inputNombre.value = nombre;
    // elementoLista.appendChild(spanNombre);
    // elementoLista.appendChild(inputNombre);
    // elementoLista.appendChild(espacio);

    function crearElemento(descripcion, valor) {
      var spanNombre = document.createElement("span");
      var inputNombre = document.createElement("input");
      var espacio = document.createElement("br");
      spanNombre.textContent = descripcion + ": ";
      inputNombre.value = valor;
      inputNombre.disabled = true; // deshabilitar el campo para poder cambiar los datos cuando se encuentran en la lista de invitados
      elementoLista.appendChild(spanNombre);
      elementoLista.appendChild(inputNombre);
      elementoLista.appendChild(espacio);
    }

    crearElemento("Nombre", nombre);
    crearElemento("Edad", edad);
    crearElemento("Nacionalidad", nacionalidad);

    var botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar invitado";
    botonBorrar.id = "boton-borrar";
    var corteLinea = document.createElement("br");
    elementoLista.appendChild(corteLinea);
    elementoLista.appendChild(botonBorrar);

    botonBorrar.onclick = function () {
      // this.parentNode.style.display = 'none';
      botonBorrar.parentNode.remove();
    };
  }
};
