let jokeEl = document.getElementById("jokes");
let btn = document.getElementById("jokeBtn");
btn.addEventListener("click", generateJoke);

generateJoke(); //function calling

async function generateJoke() {
  //!fetching data from the api
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  //!fetching data from the api using fetch method
  //   fetch("https://icanhazdadjoke.com", config)
  //     .then((res) => res.json())
  //     .then((data) => (jokeEl.innerHTML = data.joke));
  //!fetching data from the api using sync await
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}
