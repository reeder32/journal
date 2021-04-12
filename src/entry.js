export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.getNumberOfWords = function () {
  const wordArray = this.body.split(' ');
  return wordArray.length;
};

Entry.prototype.getVowels = function () {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  this.body.split('').forEach(function (letter) {
    if (vowels.includes(letter)) {
      count++;
    }
  });
  return count;
};

Entry.prototype.getTeaser = function () {
  // const enders = /[.?!]// WIP
  const sentences = this.body.split(".");
  if (sentences[0].length <= 8) {
    return sentences[0];
  } else {
    let words = sentences[0].split(" ");
    let word = "";
    for (let i = 0; i <= words.length; i++) {
      if (i < 8) {
        word = word + " " + words[i];
      }
    }
    return word;
  }
};