let $Name = document.querySelector("#Name");
$Name.style.textAlign = "center";
$Name.innerHTML = "Santiago Mondragon Ramirez"; 

let $Photo = document.querySelectorAll("img");
$Photo[0].src = "/Practica2/Logo.png";
$Photo[0].style.width = "80px"; 
$Photo[1].src = "./Me.jpeg";
$Photo[1].style.width = "250px"; 

let $Bio = document.querySelector("p");
$Bio.innerHTML = "Soy un estudiante de Amerike estudiando la carrera de creacion <br> de videojuegos, me apasiona mucho la creacion de todas las <br> locuras de mi mente entonces estoy aprendiendo para poder hacerlas realidad."; 
$Bio.style.textAlign = "center";

let $List = document.querySelectorAll("li");
$List[0].innerHTML = "Tocar Guitarra";
$List[1].innerHTML = "Tomar Fotografias";
$List[2].innerHTML = "Nadar";
$List[3].innerHTML = "Editar fotos";
$List[4].innerHTML = "Jugar videojuegos";

$Photo[2].src = "./Facebook.png";

$Photo[3].src = "./Instagram.png";

$Photo[4].src = "./Github.png";

$Photo[5].src = "./Youtube.png";

let $a = document.querySelectorAll("a");
$a[5].href = "https://www.facebook.com/santiago.mondragon.792/";
$a[5].target = "_blank"

$a[6].href = "https://www.instagram.com/santy.m.r/";
$a[6].target = "_blank";

$a[7].href = "https://github.com/SantiDEV2";
$a[7].target = "_blank";

$a[8].href = "https://www.youtube.com/channel/UC9cjzCKef5weX0FnbuK1wfA";
$a[8].target = "_blank";

