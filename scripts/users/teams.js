async function abrirDatos(team) {
    llamadaAPI(team)
    document.getElementById("datosTeam").classList.add("mostrar");    
}

  function cerrarDatos() {
    document.getElementById("datosTeam").classList.remove("mostrar");
    }

  async function llamadaAPI(team) {
    let response = await fetch("https://681bcdc86ae7c794cf6fd691.mockapi.io/api/v1/teams")
    let data = await response.json()
    

   data.forEach(element  => {
      if (team === element.team){
        document.getElementById("logoImg").src = element.logoImage
        document.getElementById("textID").textContent = element.description
        document.getElementById("driverImageSource").src = element["firstDriver"][0]["image"]
        document.getElementById("driverNumber").textContent = element["firstDriver"][0]["id"]
        document.getElementById("driverName").textContent = element["firstDriver"][0]["nombre"]
        document.getElementById("driverTeam").textContent = element["firstDriver"][0]["equipo"]
        document.getElementById("driverRol").textContent = element["firstDriver"][0]["rol"]

        document.getElementById("driverImageSource2").src = element["secondDriver"][0]["image"]
        document.getElementById("driverNumber2").textContent = element["secondDriver"][0]["id"]
        document.getElementById("driverName2").textContent = element["secondDriver"][0]["nombre"]
        document.getElementById("driverTeam2").textContent = element["secondDriver"][0]["equipo"]
        document.getElementById("driverRol2").textContent = element["secondDriver"][0]["rol"]
      }
    })};
