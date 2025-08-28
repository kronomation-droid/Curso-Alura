let numeroSecreto = 0;
let intentos=1;
let listaNumerosSorteados = [];
let numeroMaximo=10;

function asignarTextoElemento(elemento , texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos==1)?"intento":"intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }   else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero secreto es menor");
        }   else{
                asignarTextoElemento("p","El numero secreto es mayor");
            }
        intentos ++;
        limpiarCaja();
    }
        
    return;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute('disabled','true');
    return;
}

function condicionesIniciales() {
    asignarTextoElemento("h1","juego del numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value="";
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        if (listaNumerosSorteados.length == numeroMaximo) {
            alert("Jugaste todos los numeros posibles.");
            numeroMaximo = listaNumerosSorteados.length *2;            
            asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
            return generarNumeroSecreto();
        }else{            
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            }else{
                listaNumerosSorteados.push(numeroGenerado);
                console.log(listaNumerosSorteados);
                return numeroGenerado;
            }
        }    
    
}

condicionesIniciales();