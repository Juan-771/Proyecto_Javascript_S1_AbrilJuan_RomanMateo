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
        clone.querySelector("#imgVehiculoAfuera").src = vehiculo.imagen;
        clone.querySelector("#modelo").textContent = vehiculo.modelo;

        clone.setAttribute("data-id", vehiculo.id);
        clone.onclick = () => abrirDatos(vehiculo.id);

        container.appendChild(clone);
    });
}

llamadaAPI()

async function abrirDatos(idVehiculo) {
    console.log(idVehiculo)
    await infoDetallada(idVehiculo) 
    document.getElementById("tarjetaDetallada").classList.add("mostrar");    
}

function cerrarDatos() {
    document.getElementById("tarjetaDetallada").classList.remove("mostrar");
    }

async function infoDetallada(idPiloto) {
    let response = await fetch("https://682c6e77d29df7a95be708c2.mockapi.io/api/f1/cars")
    let data = await response.json()
    

    data.forEach(element  => {
    if (idPiloto == element.id){
        document.getElementById("nombreExacto").textContent = element.nombre
        document.getElementById("AceleracionID").textContent = element.aceleracion
        document.getElementById("motorTextoID").textContent = element.motor
        document.getElementById("velocidadID").textContent = element.velocidad_max
        document.getElementById("potenciaID").textContent = element.potencia_max
        document.getElementById("imgVehiculo").src = element.imagen
        document.getElementById("logoEquipo").src = element.logoEscuderia
        console.log(element.imagen)
    }
    })};