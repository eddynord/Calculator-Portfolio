var input = document.getElementById('typeNumber');
    numberKey = document.querySelectorAll('.grid div');
    operators = document.querySelectorAll('.operator');
    equal = document.getElementById('equal');
    clearBtn = document.getElementById('clear');
    displayedResult = false;

for(var i = 0 ; i < numberKey.length; i++) {
    numberKey[i].addEventListener('click', function(e) {
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

for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(e) {
  
      // storing current input string and its last character in variables - used later
      var currentString = input.innerHTML;
      var lastChar = currentString[currentString.length - 1];
  
      // if last character entered is an operator, replace it with the currently pressed one
      if (lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷") {
        var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
        input.innerHTML = newString;
      } else if (currentString.length == 0) {
        // if first key pressed is an opearator, don't do anything
        console.log("enter a number first");
      } else {
        // else just add the operator pressed to the input
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

        var divide = operator.indexOf("÷");
            while (divide != -1) {
                numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
                operator.splice(divide, 1);
                divide = operator.indexOf("÷");
    }

        var multiply = operator.indexOf("×");
            while (multiply != -1) {
                numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
                operator.splice(multiply, 1);
                multiply = operator.indexOf("×");
    }

    var subtract = operator.indexOf("-");
            while (subtract != -1) {
                numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
                operator.splice(subtract, 1);
                subtract = operator.indexOf("-");
    }

    var add = operator.indexOf("+");
    while (add != -1) {
        // using parseFloat is necessary, otherwise it will result in string concatenation :)
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operator.splice(add, 1);
        add = operator.indexOf("+");
    }

    input.innerHTML = numbers[0]; // displaying the output

    displayedResult = true; // turning flag if result is displayed
    });

    // clearing the input on press of clear
    clearBtn.addEventListener("click", function() {
    input.innerHTML = "";

})
