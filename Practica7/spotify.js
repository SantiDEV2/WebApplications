export function showArtist()
{
    $albums = document.querySelector("#albums");
    let spotifyAPI = "https://api.spotify.com/v1/albums";

    async function loadAlbums(url)
    {
        try {
            $pokemons.innerHTML = `<span class="loader"></span>`;
      
            let res = await fetch(url);
      
            if (!res.ok) throw "Error al acceder a la API de Pokemons";
      
            let json = await res.json(),
              $template = "",
              $prevLink,
              $nextLink;
      
            console.log(json);
      
            for (let i = 0; i < json.results.length; i++) {
              //console.log(json.results[i]);
              try {
                let res = await fetch(json.results[i].url);
      
                if (!res.ok)
                  throw `Error al cargar la información del pokemon ${json.results[i].name}`;
      
                let pokemon = await res.json();
                //console.log(res, pokemon);
      
                $template += `
                  <figure>
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                    <figcaption>${pokemon.name}</figcaption>
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
            }
    }
}