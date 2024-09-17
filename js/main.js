let puntaje1 = 0;
let puntaje2 = 0;


while(true){
    reinicio()
    let ini = Number(prompt("1) Jugar contra maquina \n2) Jugar contra otro jugador \n3) Salir de juego"))
    if(ini == 1){
        alert("juego con maquina")
        jvj(ini)
    }
    else if(ini == 2){
        alert("juego contra otro jugador")
        jvj(ini)
    }
    else if(ini == 3){
        break
    }
    else{
        alert("opcion incorrecta")
    }
}
//funcion para elegir cartas segun si es jugador o maquina
function jvj(opcion) {
    while(true){
    let jugador1 = Number(prompt("Jugador 1 elige\n1) piedra \n2) papel \n3) tijeras"))

    if (!(jugador1 == 1 || jugador1 == 2 || jugador1 == 3)) {
        alert("Elección no válida. Inténtalo de nuevo.");
        return jvj(opcion);
    }
    let jugador2
    if(opcion == 2){
        jugador2 = Number(prompt("Jugador 2 elige\n1) piedra \n2) papel \n3) tijeras"))
        if (!(jugador2 == 1 || jugador2 == 2 || jugador2 == 3)) {
            alert("Elección no válida. Inténtalo de nuevo.");
            return jvj(opcion);
        }
    }
    if(opcion == 1){
        jugador2 = Math.floor(Math.random()* (3) )+1
        if(jugador2 == 1){
            alert("Piedra")
        }
        else if(jugador2 == 2){
            alert("Papel")
        }
        else{
            alert("Tijera")
        }
    }
    
    let res= resultado(jugador1, jugador2)
    alert(res +"\n puntacion \njugador 1: "+ puntaje1 +"\njugador2: "+ puntaje2 )
    if(!confirm("desean seguir jugando?")){
        if(puntaje1>puntaje2){
            alert("ganador jugador1 \njugador1: "+ puntaje1 +"\njugador2: "+ puntaje2)
        }
        else if(puntaje1<puntaje2){
            alert("ganador jugador2 \njugador1: "+ puntaje1 +"\njugador2: "+ puntaje2)
        }
        else
           alert("empate") 
        break
    }
    }
}

//reincia la puntacion
function reinicio(){
    puntaje1 =0
    puntaje2 =0
}

//verifica los resultados y le da puntuacion
function resultado(j1, j2) {
    if (j1 == j2) return ('Empate')

    if (
        (j1 == 1 && j2 == 3) ||
        (j1 == 2 && j2 == 1) ||
        (j1 == 3 && j2 == 2)
    ) {
        puntaje1++
        return ('Gano jugador1')
        
    }
    else{
        puntaje2++
        return ('gano jugador2')
    }
    
}
