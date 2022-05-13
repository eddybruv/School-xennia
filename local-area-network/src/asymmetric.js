function textToNumber(text) {
  const asciiStr = encodeURIComponent(text);
  const chars = asciiStr.split("");

  const hexChars = chars.map((ch) =>
    ch.codePointAt(0).toString(16).padStart(2, "0")
  );

  const hexNumber = hexChars.join("");
  const m = BigInt(`0x${hexNumber}`);

  console.log(m);
  return m;
}

// Function to decrypt
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

// console.log(textToNumber("hello"));
// console.log(numberToText(448378203247n));
// console.log(textToNumber(numberToText("hello")));

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

function generateEncryptionExponent(phi) {
  let e = 47n;

  while (gcd(e, phi) !== 1n) {
    e += 2n;
  }

  return e;
}

function computeDecryptionExponent(e, phi) {
  let d = extendedGcd(e, phi).s;

  while (d < 1n) {
    d += phi;
  }

  return d;
}

function encrypt(m, publicKey) {
  const { e, n } = publicKey;

  if (m < 0n || m >= n) {
    throw new Error(`Condition 0 <= m < n not met. m = ${m}`);
  }

  if (gcd(m, n) !== 1n) {
    throw new Error("Condition gcd(m, n) = 1 not met.");
  }

  const c = m ** e % n;

  return c;
}

function decrypt(c, secretKey) {
  const { d, n } = secretKey;

  const m = c ** d % n;

  return m;
}

function rsaExample() {
  console.log("ran");
  const p = 191n;
  const q = 223n;

  const n = p * q;
  const phi = (p - 1n) * (q - 1n);
  console.log("ran");
  const e = generateEncryptionExponent(phi);
  console.log("here e");
  const d = computeDecryptionExponent(e, phi);
  console.log("here d");

  const publicKey = { e, n };
  const secretKey = { d, n };

  const m = textToNumber("Hi");
  const c = encrypt(m, publicKey);
  const m2 = decrypt(c, secretKey);

  console.log(numberToText(m2));
  // Hi
}

class LinearCombination {
  constructor(value, s, t) {
    this.value = value;
    this.s = s;
    this.t = t;
  }
}

function extendedGCDRec(x, y) {
  if (y.value === 0) {
    return x;
  }

  const q = x.value / y.value;
  const s = x.s - q * y.s;
  let t = x.t - q * y.t;

  let r = new LinearCombination(x.value - q * y.value, s, t);
  return extendedGCDRec(y, r);
}

function extendedGcd(a, b) {
  if (a === 0 && b === 0) {
    return new LinearCombination(-1, 0, 0);
  }

  if (a === 0) {
    return new LinearCombination(b, 0, 1);
  }

  let x = new LinearCombination(a, 1, 0);
  let y = new LinearCombination(b, 0, 1);

  return extendedGCD(x, y);
}

rsaExample();
