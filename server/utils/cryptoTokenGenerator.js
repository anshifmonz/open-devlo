import crypto from "crypto-js";

function cryptoTokenGenerator(num) {
  try {
    return crypto.lib.WordArray.random(num).toString();
  } catch (err) {
    return 'error'
  }
}

export default cryptoTokenGenerator;
