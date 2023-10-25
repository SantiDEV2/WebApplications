let $form = document.querySelector("#contact-form"),
    $inputs = document.querySelectorAll("#contact-form [required]");


$inputs.forEach((el) => {
    let $small = document.createElement("small");
    $small.id = `${el.name}-error`;
    $small.innerText = `Inserta un ${el.name} valido`;
    $small.classList.add(
        "textRed",
        "my-1",
        "d-block",
        "d-none"
    );
    el.insertAdjacentElement("afterend", $small);
});

document.addEventListener("input", (e) => {
    console.log(e.target.name)
    if (!e.target.matches("#contact-form [required]")) {
        return false;
    }

    let $smallError = document.querySelector(`#${e.target.name}-error`);
    let condition;

    if (e.target.pattern) {
        let regex = new RegExp(e.target.pattern);
        condition = !regex.exec(e.target.value);
        if (condition === true) {
            e.target.classList.add(
                "error"
            );
            e.target.classList.remove(
                "form-control"
            );
        }
        else {
            e.target.classList.remove(
                "error"
            );
            e.target.classList.add(
                "form-control"
            );
        }
    } else {
        condition = e.target.value === "";
    }

    console.log($smallError);
    console.log(condition);
    return condition
        ? $smallError.classList.remove("d-none")
        : $smallError.classList.add("d-none");
});

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Enviando Formulario");

    let $loader = document.querySelector("#loader"),
        $message = document.querySelector("#form-message");

    $loader.classList.remove("d-none");
    setTimeout(() => {
        $loader.classList.add("d-none");
        $message.classList.remove("d-none");
        setTimeout(() => $message.classList.add("d-none"), 3000);
    }, 3000);
});
