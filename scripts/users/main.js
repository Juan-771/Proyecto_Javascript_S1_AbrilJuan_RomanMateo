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
        clone.querySelector("#driverNumber").textContent = piloto["id"];
        clone.querySelector("#driverName").textContent = piloto["nombre"]
        clone.querySelector("#driverTeam").textContent = piloto["equipo"]
        clone.querySelector("#driverRol").textContent = piloto["rol"];

        container.appendChild(clone);
    });
}

llamadaAPI()