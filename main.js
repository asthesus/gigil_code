const tocipher_div = document.getElementById("tocipher");
const ciphered_div = document.getElementById("ciphered");
const decipher_box = document.getElementById("decipher");
const is_letter = (char) => {
    if(char === "a" || char === "A" || char === "b" || char === "B" || char === "c" || char === "C" || char === "d" || char === "D" || char === "e" || char === "E" || char === "f" || char === "F" || char === "g" || char === "G" || char === "h" || char === "H" || char === "i" || char === "I" || char === "j" || char === "J" || char === "k" || char === "K" || char === "l" || char === "L" || char === "m" || char === "M" || char === "n" || char === "N" || char === "o" || char === "O" || char === "p" || char === "P" || char === "q" || char === "Q" || char === "r" || char === "R" || char === "s" || char === "S" || char === "t" || char === "T" || char === "u" || char === "U" || char === "v" || char === "V" || char === "w" || char === "W" || char === "x" || char === "X" || char === "y" || char === "Y" || char === "z" || char === "Z") {return true};
    return false;
}
const cipher = () => {
    let tocipher = tocipher_div.textContent;
    if(tocipher.length) {
        let ciphered = "";
        for(n1 = 0; n1 <= tocipher.length - 1; n1++) {
            const char = tocipher.charAt(n1);
            let did_cipher = true;
                 if(char === "a" || char === "A") {ciphered = ciphered.concat("1_1")}
            else if(char === "b" || char === "B") {ciphered = ciphered.concat("_13")}
            else if(char === "c" || char === "C") {ciphered = ciphered.concat("_11_11")}
            else if(char === "d" || char === "D") {ciphered = ciphered.concat("_12")}
            else if(char === "e" || char === "E") {ciphered = ciphered.concat("1")}
            else if(char === "f" || char === "F") {ciphered = ciphered.concat("2_11")}
            else if(char === "g" || char === "G") {ciphered = ciphered.concat("_21")}
            else if(char === "h" || char === "H") {ciphered = ciphered.concat("4")}
            else if(char === "i" || char === "I") {ciphered = ciphered.concat("2")}
            else if(char === "j" || char === "J") {ciphered = ciphered.concat("1_3")}
            else if(char === "k" || char === "K") {ciphered = ciphered.concat("_11_1")}
            else if(char === "l" || char === "L") {ciphered = ciphered.concat("1_12")}
            else if(char === "m" || char === "M") {ciphered = ciphered.concat("_2")}
            else if(char === "n" || char === "N") {ciphered = ciphered.concat("_11")}
            else if(char === "o" || char === "O") {ciphered = ciphered.concat("_3")}
            else if(char === "p" || char === "P") {ciphered = ciphered.concat("1_21")}
            else if(char === "q" || char === "Q") {ciphered = ciphered.concat("_21_1")}
            else if(char === "r" || char === "R") {ciphered = ciphered.concat("1_11")}
            else if(char === "s" || char === "S") {ciphered = ciphered.concat("3")}
            else if(char === "t" || char === "T") {ciphered = ciphered.concat("_1")}
            else if(char === "u" || char === "U") {ciphered = ciphered.concat("2_1")}
            else if(char === "v" || char === "V") {ciphered = ciphered.concat("3_1")}
            else if(char === "w" || char === "W") {ciphered = ciphered.concat("1_2")}
            else if(char === "x" || char === "X") {ciphered = ciphered.concat("_12_1")}
            else if(char === "y" || char === "Y") {ciphered = ciphered.concat("_11_2")}
            else if(char === "z" || char === "Z") {ciphered = ciphered.concat("_22")}
            else {did_cipher = false; ciphered = ciphered.concat(char)};
            if(did_cipher && is_letter(tocipher.charAt(n1 + 1)) && n1 !== tocipher.length - 1) ciphered = ciphered.concat("/");
        }
        ciphered_div.textContent = ciphered;
    } else {ciphered_div.textContent = tocipher_div.textContent};
}
tocipher_div.addEventListener("input", () => {cipher()});
cipher();