// crypto module
import crypt from "crypto";

const algorithm = "aes-256-cbc"; 

// generate 16 bytes of random data
const initVector = crypt.randomBytes(16);


// secret key generate 32 bytes of random data
const Securitykey = crypt.randomBytes(32);

function decrypt(message:string){
console.log(message)
const deciph = crypt.createDecipheriv(algorithm, Securitykey, initVector);

let decryptedData = deciph.update(message, "hex", "utf-8");
console.log({decryptedData})
decryptedData += deciph.final("hex");

return decryptedData

}






function encrypt(message:string){

    // the cipher function
    const cipher = crypt.createCipheriv(algorithm, Securitykey, initVector);

    let encryptedData = cipher.update(message, "utf-8", "hex");

    encryptedData += cipher.final("hex");

    return encryptedData

}





export default {decrypt, encrypt}