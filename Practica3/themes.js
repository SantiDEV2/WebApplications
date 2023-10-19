export function myTheme() {
    document.addEventListener("click", (e) => {
        if (e.target.matches("button[id = lighttheme]")) {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("Theme", "0");
            alert(`Has cambiado al Tema ${e.target.dataset.name}`);
        }
        if (e.target.matches("button[id = darktheme]")) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("Theme", "1");
            alert(`Has cambiado al Tema ${e.target.dataset.name}`);
        }
    })

}

document.addEventListener('DOMContentLoaded', () => {
    console.log(localStorage.getItem("Theme"));
    if (!localStorage.getItem("Theme")) return;

    if (localStorage.getItem("Theme") === "1") {
        console.log(localStorage.getItem("Theme"));
        document.body.classList.add("dark-mode");
    } else {
        console.log(localStorage.getItem("Theme"));
        document.body.classList.remove("dark-mode");
    }
}) 