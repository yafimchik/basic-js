class VigenereCipheringMachine {
    
    constructor(direct = true){
        if (direct === false) this.isReverse = true;
        else this.isReverse = false;       
    }

    encrypt(message, key) {
        let alf = "abcdefghijklmnopqrstuvwxyz";
        alf = alf.toUpperCase();
        let indexFLetter = alf[0].charCodeAt();
        if (typeof(message)===undefined) throw error;
        if (typeof(key)===undefined) throw error;
        let result = "";
        message = message.toUpperCase();
        key = key.toUpperCase();
      
        let j = 0;
        for (let i = 0; i < message.length; i++){
            if (alf.indexOf(message[i]) == -1){
                result += message[i];
                continue;
            }
            let indexM = alf.indexOf(message[i]) + indexFLetter;
            let indexK = alf.indexOf(key[j]) + indexFLetter;
            result += alf[(indexK + indexM) % alf.length];
            j++;
            if (j == key.length) j = 0;
        }
        
        if (this.isReverse) {
            let tmp = result;
            result = "";
            for (let i = 0; i < tmp.length; i++){
                result = tmp[i] + result;
            }
        }
        return result;
    }

    decrypt(message, key)  {
        let alf = "abcdefghijklmnopqrstuvwxyz";
        alf = alf.toUpperCase();
        let indexFLetter = alf[0].charCodeAt();
        if (typeof(message)===undefined) throw error;
        if (typeof(key)===undefined) throw error;
        let result = "";
        message = message.toUpperCase();
        key = key.toUpperCase();
        let j = 0;
        for (let i = 0; i < message.length; i++){
            if (alf.indexOf(message[i]) == -1){
                result += message[i];
                continue;
            }
            let indexM = alf.indexOf(message[i]) + indexFLetter;
            let indexK = alf.indexOf(key[j]) + indexFLetter;
            result += alf[(alf.length - indexK + indexM) % alf.length];
            j++;
            if (j == key.length) j = 0;
        }
        if (this.isReverse) {
            let tmp = result;
            result = "";
            for (let i = 0; i < tmp.length; i++){
                result = tmp[i] + result;
            }
        }
        return result;
    }
}

module.exports = VigenereCipheringMachine;
