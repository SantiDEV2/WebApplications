let $Name = document.querySelector("#Name");
$Name.style.color = "white";
$Name.style.textAlign = "center";
$Name.innerHTML = "Santiago Mondragon Ramirez"; 

let $Photo = document.querySelectorAll("img");
$Photo[0].src = "/Practica1/Me.jpeg";
$Photo[0].style.width = "250px";

let $Bio = document.querySelector("p");
$Bio.innerHTML = "Soy un estudiante de Amerike estudiando la carrera de creacion de videojuegos, me apasiona mucho la creacion de todas las locuras de mi mente entonces estoy aprendiendo para poder hacerlas realidad."; 
$Bio.style.color = "white";
$Bio.style.textAlign = "center";

let $List = document.querySelectorAll("li");
$List[0].style.color = "white";
$List[0].innerHTML = "Tocar Guitarra";
$List[1].style.color = "white";
$List[1].innerHTML = "Tomar Fotografias";
$List[2].style.color = "white";
$List[2].innerHTML = "Nadar";
$List[3].style.color = "white";
$List[3].innerHTML = "Editar fotos";
$List[4].style.color = "white";
$List[4].innerHTML = "Jugar videojuegos";

$Photo[1].src = "/Practica1/Facebook.png";
$Photo[1].style.width = "100px";

$Photo[2].src = "/Practica1/Instagram.png";
$Photo[2].style.width = "100px";

$Photo[3].src = "/Practica1/Github.png";
$Photo[3].style.width = "100px";

$Photo[4].src = "/Practica1/Youtube.png";
$Photo[4].style.width = "100px";

let $a = document.querySelectorAll("a");
$a[0].href = "https://www.facebook.com/santiago.mondragon.792/";
$a[0].target = "_blank"

$a[1].href = "https://www.instagram.com/santy.m.r/";
$a[1].target = "_blank";

$a[2].href = "https://github.com/SantiDEV2";
$a[2].target = "_blank";

$a[3].href = "https://www.youtube.com/channel/UC9cjzCKef5weX0FnbuK1wfA";
$a[3].target = "_blank";

