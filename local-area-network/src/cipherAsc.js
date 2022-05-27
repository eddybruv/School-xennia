const allPrimes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
  239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
  331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
  421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
  509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
  613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
  709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
  821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
  919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
];

//write a function to select two random numbers from the list of primes
function getRandomPrimes() {
  var primes = [];
  for (var i = 0; i < 2; i++) {
    var index = Math.floor(Math.random() * allPrimes.length);
    primes.push(allPrimes[index]);
  }
  return primes;
}
function gcd(a, b) {
  var r;
  while (b > 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function rel_prime(p) {
  var rel = 5;
  var phi = Number(p);
  while (gcd(phi, rel) !== 1) rel++;
  return rel;
}

function power(aT, b) {
  var a = Number(aT);
  var temp = 1,
    i;
  for (i = 1; i <= b; i++) temp *= a;
  return temp;
}

function calculate_d(phiT, eT) {
  var phi = Number(phiT);
  var e = Number(eT);
  var x, y, x1, x2, y1, y2, temp, r, orig_phi;
  orig_phi = phi;
  x2 = 1;
  x1 = 0;
  y2 = 0;
  y1 = 1;
  while (e > 0) {
    temp = parseInt(phi / e);
    r = phi - temp * e;
    x = x2 - temp * x1;
    y = y2 - temp * y1;
    phi = e;
    e = r;
    x2 = x1;
    x1 = x;
    y2 = y1;
    y1 = y;
    if (phi === 1) {
      y2 += orig_phi;
      break;
    }
  }
  return y2;
}

function generateKeys() {
  var primes = getRandomPrimes();
  var p = primes[0];
  var q = primes[1];
  var n = p * q;
  var phi = (p - 1) * (q - 1);
  //getting encryption exponent
  var e = rel_prime(phi);
  //getting decryption exponent
  var d = calculate_d(phi, e);

  let publicKey = {
    n: n,
    e: e,
  };
  let privateKey = {
    n: n,
    d: d,
  };

  return {
    publicKey: publicKey,
    privateKey: privateKey,
  };
}

function encrypt(Nt, et, Msg) {
  let M = Msg;
  let N = Nt;
  let e = et;
  var r,
    i = 0,
    prod = 1,
    rem_mod = 0;
  while (e > 0) {
    r = e % 2;
    if (i++ === 0) rem_mod = M % N;
    else rem_mod = power(rem_mod, 2) % N;
    if (r === 1n) {
      prod *= rem_mod;
      prod = prod % N;
    }
    e = parseInt(e / 2);
  }
  return prod;
}

function decrypt(ct, dt, Nt) {
  let d = dt;
  let N = Nt;
  let c = ct;
  var r,
    i = 0,
    prod = 1,
    rem_mod = 0;
  while (d > 0) {
    r = d % 2;
    if (i++ === 0) rem_mod = c % N;
    else rem_mod = power(rem_mod, 2) % N;
    if (r === 1) {
      prod *= rem_mod;
      prod = prod % N;
    }
    d = parseInt(d / 2);
  }
  return prod;
}

function encryptAll(msg, publicKey) {
  let encryptedMsg = [];
  for (let i = 0; i < msg.length; i++) {
    encryptedMsg.push(encrypt(publicKey.n, publicKey.e, msg.charCodeAt(i)));
  }
  return encryptedMsg.join("-");
}

function decryptAll(cipherText, privateKey) {
  let cipherTextArray = cipherText.split("-");
  let decryptedMsg = "";
  for (let i = 0; i < cipherTextArray.length; i++) {
    decryptedMsg += String.fromCharCode(
      Number(decrypt(cipherTextArray[i], privateKey.d, privateKey.n))
    );
  }
  return decryptedMsg;
}

module.exports = { generateKeys, encryptAll, decryptAll };
