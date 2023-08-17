function datos(){
    let nombred = document.getElementById('nombres').value;
    let correod = document.getElementById('email').value;
    let asuntod = document.getElementById('asuntoo').value;
    let mensajed = document.getElementById('mensajee').value;
    let boton = document.getElementById('boton11');
    
    if(nombred == ""){
        alert("Ingresar nombre");
        document.getElementById('nombres').focus();
    }if(correod == ""){
        alert("Ingresar E-MAIL");
        document.getElementById('email');
    }
    if(asuntod == ""){
        alert("Ingresar asunto");
        document.getElementById('asuntoo').focus();
    }
    if(mensajed == ""){
        alert("Ingresar mensaje");
        document.getElementById('mensajee').focus();
    }
    else{
        console.log("Nombre ingresado: " + nombred);
        console.log("E-MAIL: " + correod);
        console.log("Asunto: " + asuntod);
        console.log("Mensaje: " + mensajed);
        boton.value = "enviado";
    }
}

// function boton111() {
//     let boton = document.getElementById('boton11').value;
//     if (boton.value == "enviar"){
//         boton.value = "enviado"; 
//     }
//     else{
//         boton.value = 'enviar'; }
//     }