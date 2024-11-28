const crypto = require("crypto");

const randomValue = crypto.randomBytes(8).toString("hex");

console.log(randomValue);

const hashValue1 = crypto
  .createHash("sha256")
  .update("thapa.technical")
  .digest("hex");
console.log(hashValue1);

const hashValue2 = crypto
  .createHash("sha256")
  .update("thapa.technical")
  .digest("hex");
console.log(hashValue2);
