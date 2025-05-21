document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById("user").value
    const password = document.getElementById("password").value

    localStorage.setItem("usuario", user);

    if (user === "Admin" && password === "admin123" ){
        window.location.href = "./html/adminPages/adminPrincipalPage.html";
    } 
    else {
        window.location.href = "./html/userPages/principalPage.html";
    }
})