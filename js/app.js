var input = document.querySelector('.form-control');
numberKey = document.querySelector('.g-col-6');
operators = document.getElementById('operator');
equal = document.getElementById('equal');
clearBtn = document.getElementById('clear');
displayedResult = false;

for(var i = 0 ; i < numberKey.length; i++) {
    numberKey[i].add.EventListener('click', function(e) {
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if(displayedResult === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (displayedResult === true && lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷") {
            displayedResult = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            displayedResult = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML; 
        }
    });
}

    equal.addEventListener("click" , function() {
        var inputString = input.innerHTML;
        var numbers = inputString.split(/\+|\-|\×|\÷/g);
        var operator = inputString.replace(/[0-9]|\./g, "").split("");

        console.log(inputString);
        console.log(operator);
        console.log(numbers);
        console.log("----------------------------");

        var divide = operators.indexOf("÷");
            while (divide != -1) {
                numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
                operator.splice(divide, 1);
                divide = operators.indexOf("÷");
    }

        var multiply = operators.indexOf("×");
            while (multiply != -1) {
                numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
                operator.splice(multiply, 1);
                multiply = operators.indexOf("×");
    }

    var subtract = operators.indexOf("-");
            while (subtract != -1) {
                numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
                operator.splice(subtract, 1);
                subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while (add != -1) {
        // using parseFloat is necessary, otherwise it will result in string concatenation :)
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operator.splice(add, 1);
        add = operators.indexOf("+");
    }

    input.innerHTML = numbers[0]; // displaying the output

    displayedResult = true; // turning flag if result is displayed
    });

    // clearing the input on press of clear
    clear.addEventListener("click", function() {
    input.innerHTML = "";

})
