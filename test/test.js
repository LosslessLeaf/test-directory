function fearNotLetter(str) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var splitStr = str.split("");
    var startingChar = splitStr[0];
    console.log(startingChar);

    for (let i = 0; i < alphabet.length; i++) {
        console.log(startingChar, alphabet[i]);
        if (splitStr[0] === alphabet[i]) {
            for (let j = 0; j < str.length; j++) {
                if(splitStr[i] === alphabet[j]) {
                    console.log(splitStr[i], alphabet[j]);
                    
                }
            }
        }
    }





    console.log("=======");

    return str;
}

fearNotLetter("abce");
fearNotLetter("cdefg");
