async function llamadaAPI(){
    let response = await fetch("https://682c6e77d29df7a95be708c2.mockapi.io/api/f1/pilotos")
    let data = await response.json()
    console.log(data)
    mostrarPilotos(data)

}

function mostrarPilotos(data){
    const template = document.getElementById("template");
    const container = document.getElementById("containerPilotos");
    container.innerHTML = ""; // limpia antes de insertar

    data.forEach(piloto => {
        const clone = template.cloneNode(true);
        clone.style.display = "flex"
        clone.querySelector("#imagePiloto").src = piloto["foto"] || "default.jpg";
        clone.querySelector("#driverNumber").textContent = piloto["numero"];
        clone.querySelector("#driverName").textContent = piloto["nombre"]
        clone.querySelector("#driverTeam").textContent = piloto["equipo"]
        clone.querySelector("#driverRol").textContent = piloto["rol"];

        clone.setAttribute("data-id", piloto["id"]);
        clone.onclick = () => abrirDatos(piloto.id);

        container.appendChild(clone);
    });
}

llamadaAPI()

async function abrirDatos(idPiloto) {
    console.log(idPiloto)
    await infoDetallada(idPiloto)
    document.getElementById("tarjetaDetallada").classList.add("mostrar");    
}

function cerrarDatos() {
    document.getElementById("tarjetaDetallada").classList.remove("mostrar");
    }

async function infoDetallada(idPiloto) {
    let response = await fetch("https://682c6e77d29df7a95be708c2.mockapi.io/api/f1/pilotos")
    let data = await response.json()
    

    data.forEach(element  => {
    if (idPiloto == element.id){
        document.getElementById("numberPiloto").textContent = element.numero
        document.getElementById("imgBandera").src = element.bandera
        document.getElementById("namePilotoDetailed").textContent = element.nombre
        document.getElementById("datePiloto").textContent = element.fechaNacimiento
        document.getElementById("descriptionTextPiloto").textContent = element.descripcion
        document.getElementById("imagePilotoID").src = element.foto
        console.log(element.rol)
    }
    })};

const usuario = localStorage.getItem("usuario");
document.getElementById("textID").textContent = ("Bienvenido " + usuario);