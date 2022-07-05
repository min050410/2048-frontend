const CryptoJS = require("crypto-js");

// 암호화 메서드
const cipher = (score, key) => {
	const ciphertext = CryptoJS.DES.encrypt(JSON.stringify(score), key).toString();
	return ciphertext;
}
 
export { cipher };