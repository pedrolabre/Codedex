const apodContainer = document.getElementById("apod-container");

async function fetchAPOD(date) {
  try {

    const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`);

    if (response.ok === false) {
      throw new Error("Failed to fetch data from NASA");
    }

    const data = await response.json();

    apodContainer.innerHTML = `
       <img id="apod-image" src="${data.url}" alt="${data.title}" width="600">
       <div id="apod-info">
         <h2 id="apod-title">${data.title}</h2>
         <p>${data.explanation}</p>
       </div>
    `;
  } catch (error) {
    console.error("Error:", error);
    apodContainer.innerHTML = `<p>Ocorreu um erro ao buscar a imagem. Tente outra data!</p>`;
  }
}

document.getElementById("fetchBtn").addEventListener("click", function () {
  const birthday = document.getElementById("birthday").value;
  const errorMessage = document.getElementById("error-message");

  const minDate = new Date("1995-06-16");

  if (new Date(birthday) < minDate) {
    errorMessage.textContent = "Invalid entry: Please enter a date on or after June 16, 1995.";
    apodContainer.innerHTML = "";
  } else {
    errorMessage.textContent = "";
    fetchAPOD(birthday);
  }
});