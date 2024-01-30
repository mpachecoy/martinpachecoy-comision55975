/* Primera Pre Entrega */

// function saludo(){

//     let inicio = confirm("Bienvenido!!, actualmente estamos mejorando nuestra tienda online. Te gustaria recibir una notificacion cuando este disponible?? ")
    
//     let contactos = ["Martin Pachecoy, mp@gmial.com", "Juan Perez, jp@hotmail.com",]
//     if(inicio == true){    
//         let nombre = prompt("Ingresa tu nombre, apellido y seguido tu correo electronico.")
//         if(nombre != ""){
//             contactos.push(nombre)
//         }else{
//             alert("Por favor ingrese su nombre. ")
//         }
//         alert("Muchas gracias por elegirnos, te enviaremos un correo cuando nuestra tienda este disponible. ") 
    
//     }else{
//         alert("Gracias por visitarnos, te esperamos pronto.")      
//     }
//     console.table(contactos)
// }

// saludo()




// function saludo(){

//     // let inicio = confirm("Bienvenido!!, actualmente estamos mejorando nuestra tienda online. Te gustaria recibir una notificacion cuando este disponible?? ")
    
//     class Contactos{
//         constructor(nombre, apellido, correo){
//             this.nombre = nombre
//             this.apellido = apellido
//             this.correo = correo
//         }
//     }

//     if(inicio == true){    
//         alert(contactos = new contactos(prompt("Nombre"), prompt("Apellido"), prompt("Correo"))) 
//         alert("Muchas gracias por elegirnos  " + contactos.nombre +  " ,te enviaremos un correo cuando nuestra tienda este disponible. ")    
//     }else{
//         alert("Gracias por visitarnos, te esperamos pronto.")      
//     }
//     console.table(contactos)
// }

// saludo()

// Segunda pre entrega

// Array para almacenar las personas que seran nuestra base de datos para avisar cuando este en funcionamiento la pagina
let personas = [];
//Mostras en la consola las personas que se van agregando a nuestra base de datos
console.table(personas)

// Función para guardar los datos del formulario en el array

function guardarDatos() {
    // Obtener valores del formulario
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;

    // Validar que se hayan ingresado datos
    if (nombre !== "" && apellido !== "") {
        // Crear un objeto con los datos y agregarlo al array
        let persona = {
            nombre: nombre,
            apellido: apellido,
            correo: correo
            };
                
        personas.push(persona);
        alert("Muchas gracias!");   
        // Limpiar el formulario
        document.getElementById("formulario").reset();

    } else {
        alert("Por favor, ingrese nombre, apellido y correo electronico.");
    }
}


