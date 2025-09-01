const miTitulo = document.querySelector("h1");
miTitulo.textContent = "¡Hola Mundo!";
let multiplicacion2x2 = 2*2;

// Datos de una variable
// String es una secuencia de texto conocida como cadena para indicar esto se debe de escribri entre comillas
// Ejemplo: let miVariable = "Bob";
//Number: Es un número, no se asigna comillas a los numeros
// Ejemplo: let miVariable = 10;
// Boulean: Tiene valor verdadero/falso (true/false) no necesitan comillas
// Ejemplo: let miVariable = true;
// Array: Es una estructura que te permite almacenar varios valores en una sola referencia
// Ejemplo: let miVariable = [1;"Bob","Steve",10];
// Objet: Basicamente cualquier cosa.
// Ejemplo: let miVariable = document.querySelector ("h1");

let helado = "chocolate";
if (helado === "chocolate") {
    alert("¡Sí, amo el helado de chocolate!");
} else {
    alert("Awwww, pero mi favorito es el de chocolate...");
}


let miImage = document.querySelector("img");
miImage.onclick = function () {
    let miSrc = miImage.getAtributte("src");
    if (miSrc === "images/Imagen_Startup.jfif") {
        miImage.setAttribute("src", "images/Pato.jfif");
    }   else {
        miImage.setAttribute("src", "images/Imagen_Startup.jfif");
    }
}  

let miBoton = document.querySelector("button")
let miTitulo = document.querySelector("h1")


function establecimientoNombreUsuario () {
    let miNombre = prompt("Por favor, ingresa tu nombre");
    localStorage.setItem("Nombre",miNombre);
    miTitulo.textContent = "Mozilla es genial", + miNombre
}