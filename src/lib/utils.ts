import crypto from "crypto"
import { SALT } from '@/config';

export  async function hashPassword (password:string){
    const hash = crypto.pbkdf2Sync(password, SALT,
        1000, 64, `sha512`).toString(`hex`)
    return hash
}

export  async function validateURL (url:string){
    try {
        const _ = new URL(url);
    } catch (_) {
        return false;  
    }
    return true
}

export async function validateEmail (email: string) {   
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };


export  async function randomString (len: number = 8) {   
    const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    let result = '';
    for (let i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }  
    return result   
}

export async function createSessionId(userId:string){
    const sessionId = encrypt(userId)
    return sessionId
}


const ENC = SALT;
const IV = "5183666c72eec9e4";
const ALGO = "aes-256-cbc";


const encrypt = (text:string) => {
    let cipher = crypto.createCipheriv(ALGO, ENC, IV);
    let encrypted = cipher.update(text, "utf8", "base64");
    encrypted += cipher.final("base64");
    return encrypted;
};
  
const decrypt = (text:string) => {
    let decipher = crypto.createDecipheriv(ALGO, ENC, IV);
    let decrypted = decipher.update(text, "base64", "utf8");
    return decrypted + decipher.final("utf8");
};
  
 