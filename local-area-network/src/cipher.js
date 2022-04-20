function isAlpha(c) {
  if (c.match(/^[a-zA-Z]/)) return true;
  return false;
}

function encrypt(text, s) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (!isAlpha(char)) {
      result += char;
      continue;
    } else {
      if (char.toUpperCase() === text[i]) {
        let ch = String.fromCharCode(((char.charCodeAt(0) + s - 65) % 26) + 65);
        result += ch;
      } else {
        let ch = String.fromCharCode(((char.charCodeAt(0) + s - 97) % 26) + 97);
        result += ch;
      }
    }
  }
  return result;
}

function decrypt(text, s) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (!isAlpha(char)) {
      result += char;
      continue;
    } else {
      if (char.toUpperCase() === text[i]) {
        let ch = String.fromCharCode(
          ((char.charCodeAt(0) - s - 65 + 26) % 26) + 65
        );
        result += ch;
      } else {
        let ch = String.fromCharCode(
          ((char.charCodeAt(0) - s - 97 + 26) % 26) + 97
        );
        result += ch;
      }
    }
  }
  return result;
}

module.exports = {encrypt, decrypt}