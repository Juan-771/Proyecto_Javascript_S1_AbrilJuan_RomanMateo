/////////////////////////////////////////////////////////////////////////////////////////////
/////         CRUD Escuderias                                                            ////
/////////////////////////////////////////////////////////////////////////////////////////////

async function llamadaAPI(){
    let response = await fetch("https://681bcdc86ae7c794cf6fd691.mockapi.io/api/v1/teams")
    let data = await response.json()
    console.log(data)

    mostrarEscuderias(data)

}

function mostrarEscuderias(data){
    const template = document.getElementById("templateEscuderia");
    const container = document.getElementById("containerEscuderia");
    container.innerHTML = ""; // limpia antes de insertar

    data.forEach(escuderia => {
        const clone = template.cloneNode(true);
        clone.style.display = "flex"
        clone.querySelector("#logoEscuderia").src = escuderia.logoImage;
        clone.querySelector("#nombreEscuderia").textContent = escuderia.team;
        clone.querySelector("#carEscuderia").src = escuderia.monoplaza

        clone.querySelector("#eliminar").setAttribute("data-id", escuderia["id"]);
        clone.querySelector("#eliminar").addEventListener("click", eliminarEscuderia);


        clone.querySelector("#actualizar").setAttribute("data-id", escuderia["id"]);
        clone.querySelector("#actualizar").addEventListener("click", actualizarEscuderia);

        container.appendChild(clone);
    });
}

llamadaAPI()


async function actualizarEscuderia(evento) {
    let team = prompt("Cual sera el nuevo nombre del equipo")
    let description = prompt("Cual sera la nueva descripción")
    let logoImage = prompt("Enlace del logo del equipo")
    let car = prompt("Enlace del monoplaza del equipo")

    let id =  evento.currentTarget.getAttribute("data-id");

    await fetch(`https://681bcdc86ae7c794cf6fd691.mockapi.io/api/v1/teams/${id}`, {
    method: "PUT",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    team,
    description,
    logoImage,
    car
    })
});
}

async function agregarEscuderia() {
document.getElementById("agregarEscuderiaDiv").classList.add("mostrar");

document.getElementById("agregarEscuderia").addEventListener("click", async () => {
    // Obtener valores de los inputs
    const team = document.getElementById("inputNombreEscuderia").value;
    const logoImage = document.getElementById("inputLogoEscuderia").value;
    const description = document.getElementById("inputDescripcionEscuderia").value;
    const car = document.getElementById("inputCarroEscuderia").value;

    // Enviar datos a la API con POST
    await fetch("https://681bcdc86ae7c794cf6fd691.mockapi.io/api/v1/teams", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        team,
        logoImage,
        description,
        car
    })
    });

    cerrarDatos();
});
}

function cerrarDatos() {
    document.getElementById("agregarEscuderiaDiv").classList.remove("mostrar");
    }


async function eliminarEscuderia(evento){
    let id = evento.currentTarget.getAttribute("data-id");
    console.log(id);
    await fetch(`https://681bcdc86ae7c794cf6fd691.mockapi.io/api/v1/teams/${id}`, {
        method: "DELETE",
    });
    llamadaAPI();
}

/////////////////////////////////////////////////////////////////////////////////////////////
/////         CRUD Pilotos                                                               ////
/////////////////////////////////////////////////////////////////////////////////////////////

async function llamadaAPIPilotos(){
    let response = await fetch("https://682c6e77d29df7a95be708c2.mockapi.io/api/f1/pilotos")
    let data = await response.json()
    console.log(data.id)

    mostrarPilotos(data)

}

function mostrarPilotos(data){
    const template = document.getElementById("templatePiloto");
    const container = document.getElementById("containerPilotos");
    container.innerHTML = ""; // limpia antes de insertar

    data.forEach(piloto => {
        const clone = template.cloneNode(true);
        clone.style.display = "flex"
        clone.querySelector("#banderaPiloto").src = piloto.bandera;
        clone.querySelector("#numeroPiloto").textContent = piloto.numero;
        clone.querySelector("#nombrePiloto").textContent = piloto.nombre
        clone.querySelector("#picturePiloto").src = piloto.foto
        clone.querySelector("#rolPiloto").textContent = piloto.rol

        clone.querySelector("#eliminarPiloto").setAttribute("data-id", piloto["id"]);
        clone.querySelector("#eliminarPiloto").addEventListener("click", eliminarPiloto);


        clone.querySelector("#actualizarPiloto").setAttribute("data-id", piloto["id"]);
        clone.querySelector("#actualizarPiloto").addEventListener("click", actualizarPiloto);

        container.appendChild(clone);
    });
}

llamadaAPIPilotos()


async function eliminarPiloto(evento){
    let id = evento.currentTarget.getAttribute("data-id");
    console.log(id);

    await fetch(`https://682c6e77d29df7a95be708c2.mockapi.io/api/f1/pilotos/${id}`, {
        method: "DELETE",
    });
    llamadaAPIPilotos();
}

async function agregarPiloto() {
document.getElementById("agregarPilotoDiv").classList.add("mostrar");

document.getElementById("agregarPiloto").addEventListener("click", async () => {
    // Obtener valores de los inputs
    const nombre = document.getElementById("inputNombrePiloto").value;
    const equipo = document.getElementById("inputEscuderiaPiloto").value;
    const rol = document.getElementById("inputRolPiloto").value;
    const numero = document.getElementById("inputNumeroPiloto").value;
    const foto = document.getElementById("inputFotoPiloto").value;
    const fechaNacimiento = document.getElementById("inputFechaNacimiento").value;
    const descripcion = document.getElementById("inputDescripcionPiloto").value;
    const bandera = document.getElementById("inputImagenBandera").value;

    await fetch("https://682c6e77d29df7a95be708c2.mockapi.io/api/f1/pilotos", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nombre,
        equipo,
        rol,
        numero,
        foto,
        fechaNacimiento,
        descripcion,
        bandera
    })
});

cerrarDatosPiloto();
llamadaAPIPilotos();
});
}

function cerrarDatosPiloto() {
    document.getElementById("agregarPilotoDiv").classList.remove("mostrar");
}

async function actualizarPiloto(evento) {

    alert("Vamos a actualizar el nombre del piloto");
    const nombre = prompt("¿Cuál será el nuevo nombre del piloto?");

    alert("Ahora actualizaremos la escudería del piloto");
    const equipo = prompt("¿A qué escudería pertenece el piloto?");

    alert("Es momento de actualizar el rol del piloto (Ej: principal, reserva)");
    const rol = prompt("¿Cuál es el nuevo rol del piloto?");

    alert("Proporciona el nuevo número del piloto");
    const numero = prompt("¿Qué número lleva el piloto?");

    alert("Proporciona el nuevo enlace de la foto del piloto");
    const foto = prompt("Enlace de la nueva foto del piloto");

    alert("Proporciona la nueva fecha de nacimiento del piloto (Formato: AAAA-MM-DD)");
    const fechaNacimiento = prompt("¿Cuál es la nueva fecha de nacimiento?");

    alert("Describe brevemente al piloto");
    const descripcion = prompt("Nueva descripción del piloto");

    alert("Proporciona el nuevo enlace de la imagen de la bandera");
    const bandera = prompt("Enlace de la nueva imagen de la bandera del piloto");

  const id = evento.currentTarget.getAttribute("data-id");

  await fetch(`https://682c6e77d29df7a95be708c2.mockapi.io/api/f1/pilotos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nombre,
        equipo,
        rol,
        numero,
        foto,
        fechaNacimiento,
        descripcion,
        bandera
    })
  });

  alert("✅ Piloto actualizado exitosamente.");
  llamadaAPIPilotos();
}

/////////////////////////////////////////////////////////////////////////////////////////////
/////         CRUD Monoplaza                                                             ////
/////////////////////////////////////////////////////////////////////////////////////////////

async function llamadaAPIMonoplazas(){
    let response = await fetch("https://682c6e77d29df7a95be708c2.mockapi.io/api/f1/cars/")
    let data = await response.json()

    mostrarMonoplazas(data)

}

function mostrarMonoplazas(data){
    const template = document.getElementById("templateMonoplaza");
    const container = document.getElementById("containerMonoplazas");
    container.innerHTML = ""; // limpia antes de insertar

    data.forEach(monoplaza => {
        const clone = template.cloneNode(true);
        clone.style.display = "flex"
        clone.querySelector("#monoplazaImagen").src = monoplaza.imagen
        clone.querySelector("#modeloMonoplaza").textContent = monoplaza.nombre
        clone.querySelector("#monoplazaMotor").textContent = monoplaza.motor

        clone.querySelector("#eliminarMonoplaza").setAttribute("data-id", monoplaza["id"]);
        clone.querySelector("#eliminarMonoplaza").addEventListener("click", eliminarMonoplaza);


        clone.querySelector("#actualizarMonoplaza").setAttribute("data-id", monoplaza["id"]);
        clone.querySelector("#actualizarMonoplaza").addEventListener("click", actualizarMonoplaza);

        container.appendChild(clone);
    });
}

llamadaAPIMonoplazas()

async function agregarMonoplaza() {
document.getElementById("agregarMonoplazaDiv").classList.add("mostrar");

document.getElementById("agregarMonoplaza").addEventListener("click", async () => {
    const modelo = document.getElementById("inputModeloMonoplaza").value;
    const imagen = document.getElementById("inputImagenMonoplaza").value;
    const nombre = document.getElementById("inputNombreMonoplaza").value;
    const motor = document.getElementById("inputMotorMonoplaza").value;
    const velocidad_max = document.getElementById("inputVelocidadMonoplaza").value;
    const aceleracion = document.getElementById("inputAceleracionMonoplaza").value;
    const potencia_max = document.getElementById("inputPotenciaMonoplaza").value;
    const logoEscuderia = document.getElementById("inputLogoMonoplaza").value;

    await fetch("https://682c6e77d29df7a95be708c2.mockapi.io/api/f1/cars", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        modelo,
        imagen,
        nombre,
        motor,
        velocidad_max,
        aceleracion,
        potencia_max,
        logoEscuderia
        })
    });

    cerrarDatosMonoplaza();
    llamadaAPIMonoplazas();
});
}

async function actualizarMonoplaza(evento) {
    alert("Vamos a actualizar los datos del monoplaza");

    const modelo = prompt("¿Cuál es el nuevo modelo del monoplaza?");
    const imagen = prompt("Enlace de la nueva imagen del monoplaza:");
    const nombre = prompt("Nuevo nombre del monoplaza:");
    const motor = prompt("Tipo de motor:");
    const velocidad_max = prompt("Velocidad máxima (ej: 350 km/h):");
    const aceleracion = prompt("Aceleración (ej: 0-100 km/h en segundos):");
    const potencia_max = prompt("Potencia máxima (ej: 1000 HP):");
    const logoEscuderia = prompt("Enlace del logo de la escudería:");

    const id = evento.currentTarget.getAttribute("data-id");

    await fetch(`https://682c6e77d29df7a95be708c2.mockapi.io/api/f1/cars/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        modelo,
        imagen,
        nombre,
        motor,
        velocidad_max,
        aceleracion,
        potencia_max,
        logoEscuderia
        })
    });

    alert("✅ Monoplaza actualizado exitosamente.");
    llamadaAPIMonoplazas(); // Asegúrate de que esta función recargue los monoplazas
}

function cerrarDatosMonoplaza() {
    document.getElementById("agregarMonoplazaDiv").classList.remove("mostrar");
}

async function eliminarMonoplaza(evento){
    let id = evento.currentTarget.getAttribute("data-id");
    console.log(id);

    await fetch(`https://682c6e77d29df7a95be708c2.mockapi.io/api/f1/cars/${id}`, {
        method: "DELETE",
    });
    llamadaAPIMonoplazas();
}

/////////////////////////////////////////////////////////////////////////////////////////////
/////         CRUD Circuitos                                                            ////
/////////////////////////////////////////////////////////////////////////////////////////////

async function llamadaAPICircuitos(){
    let response = await fetch("https://68179af726a599ae7c3ae473.mockapi.io/circuitos")
    let data = await response.json()

    mostrarCircuitos(data)

}

function mostrarCircuitos(data){
    const template = document.getElementById("templateCircuito");
    const container = document.getElementById("container_circuitos");
    container.innerHTML = ""; // limpia antes de insertar

    data.forEach(circuito => {
        const clone = template.cloneNode(true);
        clone.style.display = "flex"
        clone.querySelector("#imagenCircuito").src = circuito.imagen
        clone.querySelector("#nombreCircuito").textContent = circuito.nombre
        clone.querySelector("#paisCircuito").textContent = circuito.pais

        clone.querySelector("#eliminarCircuito").setAttribute("data-id", circuito["id"]);
        clone.querySelector("#eliminarCircuito").addEventListener("click", eliminarCircuito);


        clone.querySelector("#actualizarCircuito").setAttribute("data-id", circuito["id"]);
        clone.querySelector("#actualizarCircuito").addEventListener("click", actualizarCircuito);

        container.appendChild(clone);
    });
}

llamadaAPICircuitos()

async function eliminarCircuito(evento){
    let id = evento.currentTarget.getAttribute("data-id");
    console.log(id);

    await fetch(`https://68179af726a599ae7c3ae473.mockapi.io/circuitos/${id}`, {
        method: "DELETE",
    });
    llamadaAPICircuitos();
}

async function agregarCircuito() {
document.getElementById("agregarCircuitoDiv").classList.add("mostrar");

    document.getElementById("agregarCircuito").addEventListener("click", async () => {
    const nombre = document.getElementById("inputNombreCircuito").value;
    const pais = document.getElementById("inputPaisCircuito").value;
    const longitud = document.getElementById("inputLongitudCircuito").value;
    const curvas = document.getElementById("inputCurvasCircuito").value;
    const record = document.getElementById("inputRecordCircuito").value;
    const imagenReal = document.getElementById("inputImagenCircuito").value;
    const imagen = imagenReal
    const descripcion = document.getElementById("inputDescripcionCircuito").value;
    const bandera = document.getElementById("inputBanderaCircuito").value;

    await fetch("https://68179af726a599ae7c3ae473.mockapi.io/circuitos", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        nombre,
        pais,
        longitud,
        curvas,
        record,
        imagenReal,
        imagen,
        descripcion,
        bandera
        })
    });

    cerrarDatosCircuito();  
    llamadaAPICircuitos();  
    });
}

async function actualizarCircuito(evento) {
    alert("Vamos a actualizar el nombre del circuito");
    const nombre = prompt("¿Cuál será el nuevo nombre del circuito?");

    alert("¿En qué país se encuentra el circuito?");
    const pais = prompt("Nombre del país:");

    alert("Actualicemos la longitud del circuito (en km o metros)");
    const longitud = prompt("¿Cuál es la longitud del circuito?");

    alert("Ahora las curvas del circuito");
    const curvas = prompt("¿Cuántas curvas tiene el circuito?");

    alert("¿Cuál es el récord actual del circuito?");
    const record = prompt("Tiempo del récord (ej: 1:15.123)");

    alert("Proporciona el nuevo enlace de la imagen del circuito");
    const imagenReal = prompt("Enlace de la imagen del circuito");
    const imagen = imagenReal
    alert("Describe brevemente el circuito");
    const descripcion = prompt("Nueva descripción del circuito");

    alert("Proporciona el nuevo enlace de la bandera del país del circuito");
    const bandera = prompt("Enlace de la imagen de la bandera");

    const id = evento.currentTarget.getAttribute("data-id");

    await fetch(`https://68179af726a599ae7c3ae473.mockapi.io/circuitos/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        nombre,
        pais,
        longitud,
        curvas,
        record,
        imagenReal,
        imagen,
        descripcion,
        bandera
        })
    });

    alert("✅ Circuito actualizado exitosamente.");
  llamadaAPICircuitos(); // Asegúrate de tener esta función definida
}

function cerrarDatosCircuito() {
    document.getElementById("agregarCircuitoDiv").classList.remove("mostrar");
}
