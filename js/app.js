let keys = document.querySelector('.calculator');
let display = document.querySelector('.form-control');
let calculator = document.querySelector('.container-fluid')

keys.addEventListener('click', event => {
    if(!event.target.closest('button')) return

    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    const { type } = key.dataset
    const { previousKeyType } = calculator.dataset
    // display.textContent = keyValue

    if(type === 'number'){
        if( displayValue === '0' || previousKeyType === 'operator') {
            display.textContent = keyValue
        } else {
            display.textContent = displayValue = keyValue
        }
    }

    if (type === 'equal') {
        // Perform a calculation
        const firstNumber = calculator.dataset.firstNumber
        const operator = calculator.dataset.operator
        const secondNumber = displayValue
        display.textContent = calculate(firstNumber, operator, secondNumber)
      }
    
      calculator.dataset.previousKeyType = type
    })
    
    function calculate (firstNumber, operator, secondNumber) {
      firstNumber = parseInt(firstNumber)
      secondNumber = parseInt(secondNumber)
    
      if (operator === 'plus') return firstNumber + secondNumber
      if (operator === 'minus') return firstNumber - secondNumber
      if (operator === 'times') return firstNumber * secondNumber
      if (operator === 'divide') return firstNumber / secondNumber
    }
    
    
    
})

