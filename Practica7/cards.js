/* export function showCards() {
    const d = document,
        $cards = d.querySelector("#cards"),
        $links = d.querySelector(".links");

    let pokeAPI = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

    async function loadCards(url) {
        try {
            $cards.innerHTML = `<span class="loader"></span>`;

            let res = await fetch(url);

            if (!res.ok) throw "Error al acceder a la API";

            let json = await res.json(),
                $template = "",
                $prevLink,
                $nextLink;

            for (let i = 0; i < json.results.length; i++) {
                try {
                    let res = await fetch(json.results[i].url);

                    if (!res.ok)
                        throw `Error al cargar la información del pokemon ${json.results[i].name}`;

                    let YuGiOh = await res.json();;

                    $template += `
              <figure>
                <img src="${YuGiOh.image_url_small}" alt="${YuGiOh.name}">
                <figcaption>${YuGiOh.name}</figcaption>
              </figure>
            `;
                } catch (error) {
                    //console.warn(error);
                    $template += `
              <figure>
                <figcaption><b>${error}</b></figcaption>
              </figure>
            `;
                }
            } //for

            $cards.innerHTML = $template;
            $prevLink = json.previous ? `<a href="${json.previous}">⏪</a>` : "";
            $nextLink = json.next ? `<a href="${json.next}">⏩</a>` : "";
            $links.innerHTML = $prevLink + " " + $nextLink;
        } catch (error) {
            //console.warn(error);
            $cards.innerHTML = `<p><b>${error}</b></p>`;
        }
    }

    d.addEventListener("DOMContentLoaded", (e) => loadCards(pokeAPI));

    d.addEventListener("click", (e) => {
        if (!e.target.matches(".links a")) return false;
        e.preventDefault();
        loadCards(e.target.getAttribute("href"));
    });
} */