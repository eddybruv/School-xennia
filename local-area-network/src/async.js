/* Converting string to number */
function textToNumber(text) {
  const asciiStr = encodeURIComponent(text);
  const chars = asciiStr.split("");

  const hexChars = chars.map((ch) =>
    ch.codePointAt(0).toString(16).padStart(2, "0")
  );

  const hexNumber = hexChars.join("");
  const m = BigInt(`0x${hexNumber}`);

  return m;
}

/* Converting number tp number */
function numberToText(m) {
  let hexNumber = m.toString(16);

  if (hexNumber.length % 2 === 1) {
    hexNumber = "0" + hexNumber;
  }

  const hexChars = hexNumber.match(/\w{2}/g);
  const chars = hexChars.map((hex) => String.fromCodePoint(parseInt(hex, 16)));
  const asciiStr = chars.join("");
  const text = decodeURIComponent(asciiStr);

  return text;
}

/* Getting the gcd of two numbers, x and y */
function gcd(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);

  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

/* Encrypting the text using the rsa algorithm */
function encrypt(text, puKey) {
  let enc = textToNumber(text);
  let cipher = enc ** BigInt(puKey.e);
  cipher = cipher % BigInt(puKey.n);
  return cipher;
}

/* Decrypting the text using the rsa algorithm */
function decrypt(text, prKey) {
  let plain = text ** BigInt(prKey.d);
  plain = plain % BigInt(prKey.n);
  let dec = numberToText(plain);
  return dec;
}

/* Generating public and private keys */
function generateKeys() {
  // public
  let p = 7n;
  let q = 3n;

  let n = p * q;
  let e = 3n;

  let phi = (p - 1n) * (q - 1n);
  while (e < phi) {
    if (gcd(e, phi) == 1) {
      break;
    } else e++;
  }

  //  private
  let k = 2n;
  let d = (1n + k * phi) / e;

  let pr = { d, n }; // private key
  let pu = { e, n }; // public key

  return { pr, pu };
}

let { prKey, puKey } = generateKeys();

let text = "hello";

let encryptedText = encrypt(text, pu);
let decryptedText = decrypt(me, pr);
