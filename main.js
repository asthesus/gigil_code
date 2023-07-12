const deciphered_div = document.getElementById("deciphered");
const ciphered_div = document.getElementById("ciphered");
const decipher_box = document.getElementById("decipher");
const is_letter = (char) => {
    if(char === "a" || char === "A" || char === "b" || char === "B" || char === "c" || char === "C" || char === "d" || char === "D" || char === "e" || char === "E" || char === "f" || char === "F" || char === "g" || char === "G" || char === "h" || char === "H" || char === "i" || char === "I" || char === "j" || char === "J" || char === "k" || char === "K" || char === "l" || char === "L" || char === "m" || char === "M" || char === "n" || char === "N" || char === "o" || char === "O" || char === "p" || char === "P" || char === "q" || char === "Q" || char === "r" || char === "R" || char === "s" || char === "S" || char === "t" || char === "T" || char === "u" || char === "U" || char === "v" || char === "V" || char === "w" || char === "W" || char === "x" || char === "X" || char === "y" || char === "Y" || char === "z" || char === "Z") {return true};
    return false;
}
const is_sequence = (char) => {
    if(char === "1" || char === "2" || char === "3" || char === "4" || char === "_") return true;
    return false;
}
const cipher = () => {
    let deciphered = deciphered_div.textContent;
    let ciphered = "";
    let gap = "/";
    if(gap_char !== 0) gap = gap_char;
    for(place = 0; place <= deciphered.length - 1; place++) {
        const char = deciphered.charAt(place);
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
        
        if(did_cipher && is_letter(deciphered.charAt(place + 1)) && place !== deciphered.length - 1) ciphered = ciphered.concat(gap);
    }
    ciphered_div.textContent = ciphered;
}
const decipher = () => {
    let ciphered = ciphered_div.textContent;
    let sequence = "";
    let true_string = "";
    let deciphered = "";
    for(place = 0; place <= ciphered.length - 1; place++) {
        const char = ciphered.charAt(place);
        true_string = true_string.concat(char);
        let did_add_sequence = true;
        if(is_sequence(char) && place !== ciphered.length - 1) {
            sequence = sequence.concat(char);
        } else {
            if(is_sequence(char) && place === ciphered.length - 1) {sequence = sequence.concat(char)}
            if(sequence === "1_1") {deciphered = deciphered.concat("a")}
            else if(sequence === "_13") {deciphered = deciphered.concat("b")}
            else if(sequence === "_11_11") {deciphered = deciphered.concat("c")}
            else if(sequence === "_12") {deciphered = deciphered.concat("d")}
            else if(sequence === "1") {deciphered = deciphered.concat("e")}
            else if(sequence === "2_11") {deciphered = deciphered.concat("f")}
            else if(sequence === "_21") {deciphered = deciphered.concat("g")}
            else if(sequence === "4") {deciphered = deciphered.concat("h")}
            else if(sequence === "2") {deciphered = deciphered.concat("i")}
            else if(sequence === "1_3") {deciphered = deciphered.concat("j")}
            else if(sequence === "_11_1") {deciphered = deciphered.concat("k")}
            else if(sequence === "1_12") {deciphered = deciphered.concat("l")}
            else if(sequence === "_2") {deciphered = deciphered.concat("m")}
            else if(sequence === "_11") {deciphered = deciphered.concat("n")}
            else if(sequence === "_3") {deciphered = deciphered.concat("o")}
            else if(sequence === "1_21") {deciphered = deciphered.concat("p")}
            else if(sequence === "_21_1") {deciphered = deciphered.concat("q")}
            else if(sequence === "1_11") {deciphered = deciphered.concat("r")}
            else if(sequence === "3") {deciphered = deciphered.concat("s")}
            else if(sequence === "_1") {deciphered = deciphered.concat("t")}
            else if(sequence === "2_1") {deciphered = deciphered.concat("u")}
            else if(sequence === "3_1") {deciphered = deciphered.concat("v")}
            else if(sequence === "1_2") {deciphered = deciphered.concat("w")}
            else if(sequence === "_12_1") {deciphered = deciphered.concat("x")}
            else if(sequence === "_11_2") {deciphered = deciphered.concat("y")}
            else if(sequence === "_22") {deciphered = deciphered.concat("z")}
            else {did_add_sequence = false};
            sequence = "";
            if(did_add_sequence) {
                if(gap_char === 0 && !is_sequence(char)) gap_char = char;
                if(char !== gap_char && !is_sequence(char)) deciphered = deciphered.concat(char);
                true_string = "";
            }
        }
        if(!did_add_sequence) {
            deciphered = deciphered.concat(true_string);
            true_string = "";
        }
    }
    deciphered_div.textContent = deciphered;
}
deciphered_div.addEventListener("input", () => {cipher()});
ciphered_div.addEventListener("input", () => {decipher()});
let gap_char = 0;