const crypto = require("crypto");

const time = Date.now();

// expensive operation to test performance. #ab -c [num] -n [num] [url]
crypto.pbkdf2("salt this secret", "SaltTxt", 100000, 512, "sha512", (err, derivedKey) => {
  if(err){
    console.log("err", err, "1:: done in " + Date.now() - time);
    return;
  } 
  console.log(derivedKey.toString('hex'), "1:: done in ", Date.now() - time);

});

crypto.pbkdf2("salt this secret", "SaltTxt", 100000, 512, "sha512", (err, derivedKey) => {
  if(err){
    console.log("err", err, "1:: done in " + Date.now() - time);
    return;
  } 
  console.log(derivedKey.toString('hex'), "1:: done in ", Date.now() - time);

});
