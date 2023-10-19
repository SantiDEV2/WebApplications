import { myTheme } from "./themes.js";
import { myDate } from "./date.js";

let $btnActivate = document.querySelector("#btnActivate");
let myInterval;
$btnActivate.addEventListener("click",(e)=>{
   myInterval = setInterval(function() {
        myDate();
    },1000)  
    e.target.disabled = true;
})

let $btnDeactivate = document.querySelector("#btnDeactivate");

$btnDeactivate.addEventListener("click",(e)=>{
    clearInterval(myInterval);
    $btnActivate.disabled = false;
})

myTheme();