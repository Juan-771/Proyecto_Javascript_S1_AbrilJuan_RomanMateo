async function llamadaAPI (){
    let response = await fetch("https://682c6e77d29df7a95be708c2.mockapi.io/api/f1/cars")
    let data = await response.json()
    console.log(data)
    mostrarPilotos(data)
}

function mostrarPilotos(data){
    const template = document.getElementById("template");
    const container = document.getElementById("containerVehiculos");
    container.innerHTML = ""; // limpia antes de insertar

    data.forEach(vehiculo => {
        const clone = template.cloneNode(true);
        clone.style.display = "flex"
        clone.querySelector("#imgVehiculo").src = vehiculo.imagen;
        clone.querySelector("#modelo").textContent = vehiculo.modelo;

        clone.setAttribute("data-id", vehiculo.id);
        clone.onclick = () => abrirDatos(vehiculo.id);

        container.appendChild(clone);
    });
}

llamadaAPI()

async function abrirDatos(idVehiculo) {
    console.log(idVehiculo)
    //await infoDetallada(idPiloto) esta va a ser para modificar los datos de la tarjeta
    document.getElementById("tarjetaDetallada").classList.add("mostrar");    
}

function cerrarDatos() {
    document.getElementById("tarjetaDetallada").classList.remove("mostrar");
    }

// async function infoDetallada(idPiloto) {
//     let response = await fetch("https://682c6e77d29df7a95be708c2.mockapi.io/api/f1/pilotos")
//     let data = await response.json()
    

//     data.forEach(element  => {
//     if (idPiloto == element.id){
//         document.getElementById("numberPiloto").textContent = element.numero
//         document.getElementById("imgBandera").src = element.bandera
//         document.getElementById("namePilotoDetailed").textContent = element.nombre
//         document.getElementById("datePiloto").textContent = element.fechaNacimiento
//         document.getElementById("descriptionTextPiloto").textContent = element.descripcion
//         document.getElementById("imagePilotoID").src = element.foto
//         console.log(element.rol)
//     }
//     })};