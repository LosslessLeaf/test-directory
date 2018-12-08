function translatePigLatin(str) {
    var vowelChecker = ["a", "e", "i", "o", "u"];
    var splitStr = str.split("");

    for (let i = 0; i < str.length; i++) {
        var firstBit = [];
        var newStr = [];
        for (let j = 0; j < vowelChecker.length; j++) {
            if (splitStr[i] === vowelChecker[j]){
                console.log(newStr.join("") + firstBit.join(""));
                return newStr.join("") + firstBit.join("");
            }
            firstBit.push(splitStr[i]);
            newStr = splitStr.slice(i, 1);
        }
    }
}

translatePigLatin("consonant");
