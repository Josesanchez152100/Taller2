function robarPlanos(idPlano,despegar){

    if(idPlano>0 && idPlano<=10){
        let mensaje="El plano que se consiguio fue el "+idPlano;
        despegar(null,mensaje);
        
    }else{
        let error="No te has robado el plano real"
        despegar(error,null);
    }

}

robarPlanos(11,function(error,mensajeOk){

    if(error){
        console.log(error);
        console.log("seguimos trabajando");
    }else{
        console.log(mensajeOk);
        console.log("estamos despegando");
    }

});
