const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
  "My face when the React Native build fails for the 10th time.",
  "Trying to choose between VS Code, Zed, and Trae today.",
  "Listening to Seventeen instrumentals while pretending to understand the codebase.",
  "When yt-dlp finally downloads the 4K fancam without errors.",
  "Deploying to Supabase and praying nothing breaks."
];

let randomMeme = document.getElementById("random-meme");
let randomCaption = document.getElementById("random-caption");
let generatorButton = document.getElementById("generator-button");

generatorButton.addEventListener("click", function() {

  let randomMemeIndex = Math.floor(Math.random() * memeArray.length);
  let randomCaptionIndex = Math.floor(Math.random() * captionsArray.length);

  randomMeme.src = memeArray[randomMemeIndex];
  randomCaption.innerText = captionsArray[randomCaptionIndex];
});