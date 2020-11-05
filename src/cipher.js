const cipher = {
  encode: function (offset, string) {
    let newWord = "";
    let wordUppercase = string.toUpperCase();
    for (let count = 0; count < wordUppercase.length; count++) {
      let newLetter = wordUppercase[count]
      if (newLetter !== " ") {
        let charCodeCurrentLetter = newLetter.charCodeAt();
        let newCharCode = ((charCodeCurrentLetter - 65 + parseInt(offset)) % 26) + 65;
        newLetter = String.fromCharCode(newCharCode);
      }
      newWord = newWord + newLetter
    }
    return newWord
  }

  , decode: function (offset, string) {
    let newWord = ""
    let wordUppercase = string.toUpperCase();
    for (let count = 0; count < wordUppercase.length; count++) {
      let newLetter = wordUppercase[count]
      if (newLetter !== " ") {
        let charCodeCurrentLetter = wordUppercase[count].charCodeAt();
        let newCharCode = ((charCodeCurrentLetter + 65 - parseInt(offset)) % 26) + 65;
        newLetter = String.fromCharCode(newCharCode);
      }
      newWord = newWord + newLetter
    }
    return newWord
  }, sorteio: function() {
    return document.getElementById("resultado").innerHTML = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  }
};

export default cipher;
