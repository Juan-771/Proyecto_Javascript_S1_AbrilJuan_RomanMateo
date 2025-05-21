async function llamadaAPI(){
    let response = await fetch("https://681bcdc86ae7c794cf6fd691.mockapi.io/api/v1/teams")
    let data = await response.json()
    console.log(data)

    mostrarPilotos(data)

}

function mostrarPilotos(data){
    const template = document.getElementById("templateEscuderia");
    const container = document.getElementById("containerEscuderia");
    container.innerHTML = ""; // limpia antes de insertar

    data.forEach(escuderia => {
        const clone = template.cloneNode(true);
        clone.style.display = "flex"
        clone.querySelector("#logoEscuderia").src = escuderia.logoImage;
        clone.querySelector("#nombreEscuderia").textContent = escuderia.team;
        // clone.querySelector("#carEscuderia").src = escuderia.carro

        clone.querySelector("#eliminar").setAttribute("data-id", escuderia["id"]);
        clone.querySelector("#eliminar").addEventListener("click", eliminar);

        container.appendChild(clone);
    });
}

llamadaAPI()

async function eliminar(evento){
    let id = evento.currentTarget.getAttribute("data-id");
    console.log(id);
    await fetch(`https://681bcdc86ae7c794cf6fd691.mockapi.io/api/v1/teams/${id}`, {
        method: "DELETE",
    });
    llamadaAPI();
}