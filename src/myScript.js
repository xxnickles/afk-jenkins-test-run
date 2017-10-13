// Logic to check odd or even
function isAValidNumber(value) {
    return !isNaN(parseInt(value))
}

function checkOddAndEven(number) {
    if (isAValidNumber(number)) {
        var evaluation = (number % 2 !== 0)
        if (evaluation) {
            return 'odd'
        } else {
            return 'even'
        }
    } else {
        return 'invalid'
    }
}

// Logic to manage user input
var textbox = document.getElementById('input-control')
var buttton = document.getElementById('button-control')
var label = document.getElementById('result-display')

buttton.onclick = function(event){
    label.innerText = checkOddAndEven(textbox.value)
}