//funcion generadora de numeros aleatorios
let getRandomNumber = size => { //tenmos nuestra funcion llamada getRandom que recibira el tamño como parametro
    return Math.floor(Math.random() * size); //nos retornare un numero aleatorio generado en alguna posicion en el mapa
}
//funcion que medira la distancia entre los dos puntos
let getDistance = (e, target) => { //funcion que nos ayudara a medir la distancia entre el tesoro y el clik del usuario
    let diffX = e.offsetX - target.x; //nos ubica en la posision x
    let diffY = e.offsetY - target.y; //nos ubica en la posision y
    return Math.sqrt((diffX * diffX) + (diffY * diffY)); //se calcula la distancia por medio del teorema de pitagoras
}
//funcion que nos mostrara un mensaje sobre el estado del juego
let getDistanceHint = distance => { //funcion que comparara la distancia y el clik
    if (distance < 30) { //si es menor a 30 px de distancia
        return "Estras quemandote!"; //mensaje que mostrara en pantalla
    } else if (distance < 40) { //si es menor a 40 px de distancia
        return "Estas hirviendo"; //mensaje que mostrara en pantalla
    } else if (distance < 60) { //si es menor a 60 px de distancia
        return "Caliente"; //mensaje que mostrara en pantalla
    } else if (distance < 100) { //si es menor a 100 px de distancia
        return "Tibio"; //mensaje que mostrara en pantalla
    } else if (distance < 180) { //si es menor a 180 px de distancia
        return "Frio"; //mensaje que mostrara en pantalla
    } else if (distance < 360) { //si es menor a 360 px de distancia
        return "Muy frio"; //mensaje que mostrara en pantalla
    } else { //todo caso en que este mas lejos
        return "Congelado!"; //mensaje que mostrara en pantalla
    }
}