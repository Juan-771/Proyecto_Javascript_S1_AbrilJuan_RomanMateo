async function llamadaAPI (){
    let response = await fetch("https://68179af726a599ae7c3ae473.mockapi.io/circuitos")
    let data = await response.json()
    console.log(data)
    mostrarCircuitos(data)
}

function mostrarCircuitos(data){
    const template = document.getElementById("template");
    const container = document.getElementById("containerCircuitos");
    container.innerHTML = ""; // limpia antes de insertar

    data.forEach(circuito => {
        const clone = template.cloneNode(true);
        clone.style.display = "flex"
        clone.querySelector("#imagenCircuito").src = circuito.imagenReal;
        clone.querySelector("#nombreCircuito").textContent = circuito.nombre;
        clone.querySelector("#paisCircuito").textContent = circuito.pais;
        clone.querySelector("#longitudCircuito").textContent = circuito.longitud;

        clone.setAttribute("data-id", circuito.id);
        clone.onclick = () => abrirDatos(circuito.id);

        container.appendChild(clone);
    });
}

llamadaAPI()

async function abrirDatos(idCircuito) {
    console.log(idCircuito)
    await infoDetallada(idCircuito)
    document.getElementById("tarjetaDetallada").classList.add("mostrar");    
}

function cerrarDatos() {
    document.getElementById("tarjetaDetallada").classList.remove("mostrar");
    }

async function infoDetallada(idCircuito) {
    let response = await fetch("https://68179af726a599ae7c3ae473.mockapi.io/circuitos")
    let data = await response.json()
    

    data.forEach(element  => {
    if (idCircuito == element.id){
        document.getElementById("nombreCircuitoDetailed").textContent = element.nombre
        document.getElementById("banderaDetailed").src = element.bandera
        document.getElementById("paisDetailed").textContent = element.pais
        document.getElementById("descripcion").textContent = element.descripcion
        document.getElementById("imagenDetailedCircuito").src = element.imagen
        document.getElementById("curvas").textContent = ("Curvas: " + element.curvas)
        document.getElementById("record").textContent = ("Record: " + element.record)
        document.getElementById("longitud").textContent = ("Longitud: " + element.longitud)
        console.log(element.rol)
    }
    })};