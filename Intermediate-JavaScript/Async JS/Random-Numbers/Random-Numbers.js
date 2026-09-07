const randomNumberPromise = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber < 5) {
      resolve();
    } else {
      reject("Error: The random number is 5 or greater.");
    }
  });
};

const generateBtn = document.getElementById("generateButton");

generateBtn.addEventListener("click", randomNumberPromise);