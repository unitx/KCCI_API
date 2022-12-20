const CryptoJS = require('crypto-js');
let keySize = 256;
let iterations = 100;

exports.decrypt = (transitmessage, pass)=> {
    let salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
    let iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32));
    let encrypted = transitmessage.substring(64);
    let key = CryptoJS.PBKDF2(pass, salt, {
        keySize: keySize / 32,
        iterations: iterations
    });
    let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

// class encryptDecrypt {
//     decrypt = (transitmessage, pass)=> {
//         let salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
//         let iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32));
//         let encrypted = transitmessage.substring(64);
//         let key = CryptoJS.PBKDF2(pass, salt, {
//             keySize: keySize / 32,
//             iterations: iterations
//         });
//         let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
//             iv: iv,
//             padding: CryptoJS.pad.Pkcs7,
//             mode: CryptoJS.mode.CBC
//         });
//         return decrypted.toString(CryptoJS.enc.Utf8);
//     }
//     encrypt= (msg, pass)=> {
//         let salt = CryptoJS.lib.WordArray.random(128/8);
//         let key = CryptoJS.PBKDF2(pass, salt, {
//             keySize: keySize/32,
//             iterations: iterations
//             });
//         let iv = CryptoJS.lib.WordArray.random(128/8);
//         let encrypted = CryptoJS.AES.encrypt(msg, key, { 
//             iv: iv, 
//             padding: CryptoJS.pad.Pkcs7,
//             mode: CryptoJS.mode.CBC
//         });
//         let transitmessage = salt.toString()+ iv.toString() + encrypted.toString();
//         return transitmessage;
//     }
// }
// export default (encryptDecrypt);