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




function saludo(){

    // let inicio = confirm("Bienvenido!!, actualmente estamos mejorando nuestra tienda online. Te gustaria recibir una notificacion cuando este disponible?? ")
    
    class Contactos{
        constructor(nombre, apellido, correo){
            this.nombre = nombre
            this.apellido = apellido
            this.correo = correo
        }
    }

    if(inicio == true){    
        alert(contactos = new contactos(prompt("Nombre"), prompt("Apellido"), prompt("Correo"))) 
        alert("Muchas gracias por elegirnos  " + contactos.nombre +  " ,te enviaremos un correo cuando nuestra tienda este disponible. ")    
    }else{
        alert("Gracias por visitarnos, te esperamos pronto.")      
    }
    console.table(contactos)
}

saludo()