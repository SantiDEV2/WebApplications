document.addEventListener("click", (e) => {
    if (e.target.matches("button[id = lighttheme]")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.remove("ocean-mode");   
        document.body.classList.remove("space-mode");
        alert(`Has cambiado al Tema ${e.target.dataset.name}`);
    }
    if (e.target.matches("button[id = darktheme]")) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("ocean-mode");
        document.body.classList.remove("space-mode");
        alert(`Has cambiado al Tema ${e.target.dataset.name}`);
    }
    if (e.target.matches("button[id = galaxytheme]")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.remove("ocean-mode");
        document.body.classList.add("space-mode");
        alert(`Has cambiado al Tema ${e.target.dataset.name}`);
    }
    if (e.target.matches("button[id = oceantheme]")) {
        document.body.classList.add("ocean-mode");
        document.body.classList.remove("dark-mode");
        document.body.classList.remove("space-mode");
        alert(`Has cambiado al Tema ${e.target.dataset.name}`);
    }
})

document.addEventListener("dblclick", (e) =>
{
    if(e.target.matches("img[id = myImg]"))
    {
        e.target.style.width = "auto"
    }
})