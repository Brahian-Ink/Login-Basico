// Seleccionamos el formulario de login por su ID
const form = document.getElementById("loginForm");

// Seleccionamos el elemento <p> donde mostraremos mensajes de éxito o error
const message = document.getElementById("message");

// Definimos un usuario y contraseña "demo" (esto sería como una base de datos simulada)
const USER = "admin"; 
const PASS = "1234";

// Agregamos un evento al formulario para que cuando se intente enviar (submit) ejecute esta función
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que el formulario recargue la página al enviar

  // Obtenemos los valores que el usuario escribió en los inputs
  const username = document.getElementById("username").value; 
  const password = document.getElementById("password").value;

  // Validamos si el usuario y la contraseña coinciden con los datos definidos
  if (username === USER && password === PASS) {
    // Si son correctos, mostramos un mensaje en verde indicando éxito
    message.style.color = "green";  
    message.textContent = "¡Login exitoso!";
  } else {
    // Si son incorrectos, mostramos un mensaje en rojo indicando error
    message.style.color = "red";
    message.textContent = "Usuario o contraseña incorrectos.";
  }
});
