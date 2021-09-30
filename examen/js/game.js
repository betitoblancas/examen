//coordenadas del tesoro
const WIDTH = 400; //altura de la imagen donde se ubicara el tesoro
const HEIGH = 400; //ancho donde se ubicara el teosoro
let target = { //variable que nos dara un punto en el eje x, y
    x: getRandomNumber(WIDTH), //numero aleatorio con base en la altura
    y: getRandomNumber(HEIGH) //numero aleatorio con base en el ancho
};
//manipulador del click
let $map = document.querySelector('#map'); //variable que tomara de refencia de la imagen a travez de su id
let $distance = document.querySelector('#distance'); //
let clicks = 0; //variable que nos ayudara a contar los clikcs dados por el usuario (intentos)
$map.addEventListener('click', function(e) { //un escuhcador al evento clik del usuari0
    clicks++; //cada que el usuario de clik aumentara el contador
    let distance = getDistance(e, target); //se pasa la distancia del punto del usuario
    let distanceHint = getDistanceHint(distance); //se le pasa la distancia del mapa
    $distance.innerHTML = `<h1>${distanceHint}</h1>`; //ya con los valores que se le paso a la funcion nos retornara un mensaje que nos dira que tan cerca estamos
    if (distance < 20) { //si esta sobre el punto con un radio de 20 px
        alert(`Lo encontraste en ${clicks} clicks!`); //si es verdadero habra ganado y mandara un mensaje de alerta que le dira en cuantos cliks lo logro
        resultado = confirm('Desear volver a jugar'); //variable que nos dira por medio de una confirmacion si quiere volver a jugaro no
        if (resultado == false) { //en caso de ser negativa la respuesta
            window.close(); //cerrara la ventana
        } else { //en caso contario
            location.reload(); //recargara la pagina para que el usuario juegue nuevamente
        }
    }
});