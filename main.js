

function saludo(){

    let inicio = confirm("Bienvenido!!, actualmente estamos mejorando nuestra tienda online. Te gustaria recibir una notificacion cuando este disponible?? ")
    
    let contactos = []
    if(inicio == true){    
        let nombre = prompt("Ingresa tu nombre, apellido y seguido tu correo electronico.")
        if(nombre != ""){
            contactos.push(nombre)
        }else{
            alert("Por favor ingrese su nombre. ")
        }
        alert("Muchas gracias por elegirnos, te enviaremos un correo cuando nuestra tienda este disponible. ") 
    
    }else{
        alert("Gracias por visitarnos, te esperamos pronto.")      
    }
    console.table(contactos)
}

saludo()


