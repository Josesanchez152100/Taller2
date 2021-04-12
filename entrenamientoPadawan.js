function matricularPadawan(nombre,planeta,edad,estatura,clasificar){
    let padawan={
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura
    }
    clasificar(padawan);
}

matricularPadawan('Qui-Gon Jinn', 'desconocido', 16, 193, function(aprendiz){
    if(aprendiz.edad<15){
        console.log(`${aprendiz.nombre} del planeta ${aprendiz.planeta}, como tienes ${aprendiz.edad} años has sido asignado al entrenamiento del manejo de la fuerza`)
    }else{
        console.log(`${aprendiz.nombre} del planeta ${aprendiz.planeta}, como tienes ${aprendiz.edad} años has sido asignado al entrenamiento del sable de luz`)
    }
})