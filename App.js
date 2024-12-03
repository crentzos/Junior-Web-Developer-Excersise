function validateInput(value) {
    const numberInput = parseFloat(value);
    const message = document.getElementById('message');
    if (isNaN(numberInput) || numberInput <= 10) {
        message.textContent = 'Please enter a number greater than 10.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Thank you for the input!';
        message.style.color = 'green';
    }
}

document.getElementById('numberInput').addEventListener('input', function () {
    validateInput(this.value);
});

function checkInput() {
    const inputValue = document.getElementById('numberInput').value;
    validateInput(inputValue);
}
