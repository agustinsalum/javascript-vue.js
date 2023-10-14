function exer1() {
    alert("Hello World");
}

function exer2() {
    document.write("Hello World")
}

function exer3() {
    document.write(3 + 5)
}

function exer4() {
    let name = prompt("Please enter your name: ");
    console.log("Hello ", name);
}

function exer5() {
    let num1 = prompt("Please enter num1: ");
    let num2 = prompt("Please enter num2: ");
    // number in base 10
    num1 = parseInt(num1, 10)
    num2 = parseInt(num2, 10)
    console.log(num1 + num2);
}

function exer6() {
    let num1 = prompt("Please enter num1: ");
    let num2 = prompt("Please enter num2: ");
    // number in base 10
    num1 = parseInt(num1, 10)
    num2 = parseInt(num2, 10)
    if (num1 > num2) {
        document.write(num1, " is greater than ", num2);
    } else { document.write(num2, " is greater than ", num1) }

}


function exer7() {
    let num1 = parseFloat(prompt(("Please enter num1: ")));
    let num2 = parseFloat(prompt(("Please enter num2: ")));
    let num3 = parseFloat(prompt(("Please enter num3: ")));
    //
    if (num1 > num2 && num1 > num3) { max = num1; }
    else {
        if (num2 > num1 && num2 > num3) { max = num2 }
        else { max = num3 }
    }
    document.write(max)
}

function exer8() {
    let num = parseFloat(prompt(("Please enter num: ")));
    if (num % 2 === 0) { console.log(num, "is divisible by 2") }
    else { console.log(num, "is not divisible by 2") }
}

function exer9() {
    let phrase = prompt("write a sentence");
    // Convert the sentence to lowercase
    phrase = phrase.toLowerCase();
    let count = 0
    //
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === 'a') { count++ }
    }
    console.log(count);
}

function exer11() {
    let array = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
    let phrase = prompt("write a sentence");
    // Convert the sentence to lowercase
    phrase = phrase.toLowerCase();
    let count = 0;
    //
    for (let i = 0; i < phrase.length; i++) {
        if (array.includes(phrase[i])) { count++ }
    }
    console.log(count);

}

function exer12() {
    let vowels = "aeiouáéíóú"
    let dic = {}
    // Initialize
    for (let vocal of vowels) {
        dic[vocal] = 0;
    }
    let phrase = prompt("write a sentence");
    // Convert the sentence to lowercase
    phrase = phrase.toLowerCase();
    //
    for (let letter of phrase) {
        if (vowels.includes(letter)) { dic[letter]++; }
    }
    console.log(dic);

}

function exer13() {
    let num = parseFloat(prompt("Please enter num: "));
    if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
        console.log("Is divisible")
    }
    else { console.log("Not is divisible") }
}


function exer14() {
    let num = parseFloat(prompt("Please enter num: "));
    dividers = "";
    //
    if (num % 2 === 0) {
        dividers += "2 ";
    }
    if (num % 3 === 0) {
        dividers += "3 ";
    }
    if (num % 5 === 0) {
        dividers += "5 ";
    }
    if (num % 7 === 0) {
        dividers += "7 ";
    }
    if (dividers != '') { console.log(console.log(`Es divisible por: ${dividers} `)) }
    else { console.log("No es divisible por ninguno") }
}

function exer15() {
    let num = parseFloat(prompt("Please enter num: "));
    let dividers = "The dividers of " + num + " is: ";

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) { dividers += i + " "; }
    }
    document.write(dividers);
}

function exer16() {
    let num1 = parseFloat(prompt("Please enter num1: "));
    let num2 = parseFloat(prompt("Please enter num2: "));
    let dividers_num1 = [];
    let dividers_num2 = [];
    //
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0) { dividers_num1.push(i) }
    }
    for (let i = 1; i <= num2; i++) {
        if (num2 % i === 0) { dividers_num2.push(i) }
    }
    // Element is just a variable name that represents the current element being evaluated in each iteration of filter() 
    let intersection = dividers_num1.filter(element => dividers_num2.includes(element));
    document.write("The common divisors of " + num1 + " and " + num2 + " is: " + intersection);
}

function exer17() {
    let num = parseFloat(prompt("Please enter num: "));
    let isPrime = true
    if (num > 1) {
        // Math.sqrt(num) returns the square root of a given number
        // If num has no divisors less than or equal to its square root, then it will have no greater divisors either.
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            console.log("Is prime")
        } else {
            console.log("Not is prime")
        }
    } else {
        console.log("Not is prime")
    }
}

function exer18() {
    let age = parseFloat(prompt(" Please enter your age: "));
    if (age >= 18) {
        console.log("You can drive");
    } else {
        console.log("You can't drive");
    }
}

function exer19() {
    let note = parseFloat(prompt("Please enter your note: "));
    //
    switch (true) {
        case (note >= 0 && note <= 3):
            console.log("Very poor");
            break;
        case (note > 3 && note <= 5):
            console.log("Insufficient");
            break;
        case (note > 5 && note <= 6):
            console.log("Enough");
            break;
        case (note > 6 && note <= 7):
            console.log("Good");
            break;
        case (note > 7 && note <= 9):
            console.log("Remarkable");
            break;
        case (note > 9 && note <= 10):
            console.log("Outstanding");
            break;
        default:
            console.log("Invalid note. Please enter a grade between 0 and 10.");
            break;
    }
}

function exer20() {
    let strings = [];
    while (true) {
        let input = prompt("Please enter a text string (or press 'cancel' to exit): ");
        if (input === null || input === "") {
            break;
        }
        strings.push(input);
    }
    let result = strings.join('-');
    console.log("Strings concatenated with hyphen: " + result);
}

function exer21() {
    let sum = 0;
    while (true) {
        let input = prompt("Please enter a number (or press 'cancel' to exit):");
        if (input === null || input === "") {
            break;
        }
        let num = parseFloat(input);
        if (!isNaN(num)) {
            sum += num;
        } else {
            alert("Please enter a valid number.");
        }
    }
    alert(" The total sum of the numbers entered is: " + sum);
}

function exer22() {
    let dniInput = document.getElementById("dniInput").value;
    //
    if (!isNaN(dniInput) && dniInput !== "") {
        let dniNumber = parseInt(dniInput);
        //
        if (dniNumber >= 0 && dniNumber <= 99999999) {
            let rest = dniNumber % 23;
            let letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
            let dniLetter = letters[rest];
            alert("The letter of your ID is: " + dniLetter);
        } else {
            alert("The DNI number must be between 0 and 99999999");
        }
    } else {
        alert("Please enter a valid number");
    }
}

function exer23() {
    for (let i = 1; i <= 30; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += i;
        }
        console.log(line);
    }
}

function exer24() {
    let n = parseFloat(prompt("Please enter num: "));
    for (let i = n; i >= 1; i--) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += i;
        }
        console.log(line);
    }
}

function exer25() {
    for (let i = 1; i <= 500; i++) {
        console.log(i);
        if (i % 4 === 0) {
            console.log("Multiple of 4)");
        }
        if (i % 9 === 0) {
            console.log("Multiple of 9)");
        }
        // To separate groups of numbers into blocks of 25
        if (i % 5 === 0 && i % 25 === 0) {
            console.log("————————————————————");
        }
    }
}
