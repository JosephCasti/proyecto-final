function guardar_datos() {

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("estatura").value;
    let masa = document.getElementById("masa").value;
    let edad = document.getElementById("edad").value;
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;

    datosNuevos(peso, estatura, masa, edad, nombre, email, telefono);

    if (peso == "" || altura == "" || masa == "" || edad == "" || nombre == "" || email == "" || telefono == "") {
        alert('Porfavor ingrese datos validos');
        location.href = 'Datos.html';
    } else {
        alert('Datos actualizados.');
        location.href = 'Datos.html';
    }
}

var Datos = [];

function datosNuevos(pPeso, pEstatura, pMasa, pEdad, pNombre, pEmail, pTelefono) {

    var nuevosDatos = {
        peso: pPeso,
        altura: pEstatura,
        masa: pMasa,
        edad: pEdad,
        nombre: pNombre,
        email: pEmail,
        telefono: pTelefono
        
    };
    console.log(nuevosDatos);
    Datos.push(nuevosDatos);

}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    guardar_datos();
});