function registrar() {

    let usua = document.getElementById("usua").value;
    let pass = document.getElementById("pass").value;
    let confirmpass = document.getElementById("confirmpass").value;

    agregar_usuario(usua, pass, confirmpass); 


    if (pass !== confirmpass) {
        alert('Error al verificar contraseña, vuelva a intentar su registro');
        location.href = 'registro.html';
    } else {
        alert('Registro exitoso');
        location.href = 'index.html';
    }

}

var Usuario = [];

function agregar_usuario(pusua,ppass,pconfirmpass) {

    var nuevo = {
        usua: pusua,
        pass: ppass,
        confirmpass: pconfirmpass

    };
    console.log(nuevo);
    Usuario.push(nuevo);

}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    registrar();
});