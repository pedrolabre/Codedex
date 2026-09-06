function isPalindrome(word) {
  let lowerWord = word.toLowerCase();

  let reversedWord = "";

  for (let i = lowerWord.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + lowerWord[i];
  }

  return lowerWord === reversedWord;
}

console.log("racecar: " + isPalindrome("racecar"));
console.log("madam: " + isPalindrome("madam"));
console.log("moonlight: " + isPalindrome("moonlight"));
console.log("aviary: " + isPalindrome("aviary"));