//Les due variables son diferents 
let nom = "Ana";
let Nom = "Dani";

//Les costants son variables que no canvien

const G = 9.8;
const PI = 3.14

nom = "Pepe";

function saluda(nom){
    let valor = document.getElementById("campNom").value;
    document.getElementById("resultat").innerHTML ="Hola," + valor; 
}
saluda(nom);


function comprovalogin() {
    let usuari = document.getElementById("usuari").value; 
    let password = document.getElementById("password").value;

    if(usuari == "admin" && password == "1234"){
        alert("sessio iniciada")
    }
    else {
        alert("Usuari o Contrasenya incorrecta");
        
    }
}

function calcularPrecio() {
    const precio = document.getElementById("precio").value;
    const radioSI = document.getElementById("residenteSi").checked;
    const radioNO = document.getElementById("residenteNo").checked;

    if (radioSI == true) {
    let precioFinal = precio *0.25;
    alert(precioFinal);
    }
    else if (radioNO == true){
        let precioFinal = precio;
        alert(precioFinal);
    }
    else {
        alert("Tienes que marcar algo");
    }



}

function calcularPrecio() {
    const precio = document.getElementById("precio").value;
    const familiasi = document.getElementById("familianumerosaSI").checked;
    const familiano = document.getElementById("familianumerosaNO").checked;

    if (familiasi == true) {
    let precioFinal = precio *0.15;
    alert(precioFinal);
    }
    else if (familiano == true){
        let precioFinal = precio;
        alert(precioFinal);
    }
    else {
        alert("Tienes que marcar algo");
    }
}

function calcularPrecio() {
    const precio = document.getElementById("precio").value;
    const especialsi = document.getElementById("especialSI").checked;
    const especialno = document.getElementById("especialNO").checked;

    if (especialsi == true) {
    let precioFinal = precio *0.60;
    alert(precioFinal);
    }
    else if (especialno == true){
        let precioFinal = precio;
        alert(precioFinal);
    }
    else {
        alert("Tienes que marcar algo");
    }
}
/*
 Aquesta variable no esta definida
*/



