export function showArtist(search, selector) {
  const d = document,
    $albums = d.querySelector(selector),
    $search = d.querySelector(search);

  $search.addEventListener("keyup", async (e) => {
    if (e.key === "Enter") {
      try {
        $albums.innerHTML = `<span class="loader"></span>`;

        let query = e.target.value.toLowerCase(),
          res = await fetch(`https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3A${$search}&type=`);
          console.log(res);

        if (!res.ok) throw "Error al acceder a la API de TV Maze";

        let json = await res.json(),
          $template = "";

        console.log(query, json);
        console.log($search)

        json.forEach((el) => {

        });

        $albums.innerHTML = $template;
      } catch (error) {
        $albums.innerHTML = `<p><b>${error}</b></p>`;
      }
    }
  });

  $search.addEventListener("search", (e) => {
    console.log(e);
    $albums.innerHTML = "";
  });
}