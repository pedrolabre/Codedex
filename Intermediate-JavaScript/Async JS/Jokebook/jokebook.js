const jokeContainer = document.getElementById("jokeContainer");
const getJokeBtn = document.getElementById("getJokeBtn");

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      jokeContainer.innerHTML = `
        <p>${data.setup}</p>
        <p>${data.punchline}</p>
      `;
    })
    .catch((error) => console.error("Error fetching joke:", error));
}

getJokeBtn.addEventListener("click", fetchJoke);