cargar();

form.addEventListener('submit', function (event) {
    event.preventDefault();
    cargar();
    confirmar();
});


function cargar() {
    let admin = "admin"
    let contra = "admin123"

    localStorage.setItem("admin", admin);
    localStorage.setItem("contra", contra);
}


function confirmar() {


    let local = localStorage.getItem("admin");
    let localcontra = localStorage.getItem("contra");



    const usuario = document.getElementById("usua").value;
    const contrausua = document.getElementById("pass").value;


    if (localcontra !== contrausua || local !== usuario) {
        alert('Error al cargar los datos');
        console.log(localStorage.getItem("admin"));
        console.log(usuario);

        console.log(localStorage.getItem("admin123"));
        console.log(contrausua);

    } else {
        alert('Datos cargados correctamente');
        location.href = 'Menu.html';
        console.log(localStorage.getItem("admin"));
        console.log(usuario);

        console.log(localStorage.getItem("admin123"));
        console.log(contrausua);
    }
}