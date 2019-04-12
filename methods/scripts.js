function onload() {
    const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

    // 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
    // Using a for loop:
    // Using the forEach method:
    // Using the map method:

    // 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
    // Answer:

    // 3. Display the product of all numbers using reduce
    // Answer:


    // 1:

    let forLoop = []
    for (let i = 0; i < numbers.length; i++) {
        forLoop.push(String.fromCharCode(numbers[i]));
    }

    let forEach = [];
    numbers.forEach(e => {
        forEach.push(String.fromCharCode(e));
    });


    var number = numbers.map(number => String.fromCharCode(number));

    var filtered = [];
    numbers.filter(checkInclusive).forEach(number => {
        filtered.push(number);
    });

    function getSum(total, num) {
        return total * num;
    }
    const reducer = (accumulator, currentValue) => accumulator * currentValue;

    var reduced = numbers.reduce(reducer);

    function checkInclusive(number) {
        return (number >= 72 && number <= 88);
    }

    function displayOnPage() {
        document.getElementById("for-loop").innerText = forLoop;
        document.getElementById("for-each").innerText = forEach;
        document.getElementById("map").innerText = number;
        document.getElementById("filter").innerText = filtered;
        document.getElementById("reduce").innerHTML = reduced;
    }
    checkInclusive(number);
    displayOnPage();
}
