let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 15;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Adivinaste el numero! ${intentos} ${(intentos ===1)? 'A la primera' : 'intentos despues!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'Intenta con un numero menor!');
        } else {
            asignarTextoElemento('p', 'Intenta con un numero mas alto!');
        }
        intentos++;
        limpiarJuego();
    }
    return;
}

function limpiarJuego() {
   document.querySelector('#valorUsuario').value = '';
}    

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya adivinaste todos los numeros posibles!');
    } else {
        //Si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicioneaIniciales() {
    asignarTextoElemento('h1', 'Elige el numero correcto!');
    asignarTextoElemento('p', `Elige un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarJuego();
    condicioneaIniciales();
    //Deshabilitar el boton de juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'thue');
}

condicioneaIniciales ();

