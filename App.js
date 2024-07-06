document.getElementById('numberInput').addEventListener('input', function () {
    const numberInput = parseFloat(this.value);
    const message = document.getElementById('message');

    if ((!isNaN(numberInput) && numberInput > 10) || this.value === '' ) {
        message.textContent = '';
    } else {
        message.textContent = 'Please enter a number greater than 10.';
        message.style.color = 'red';
    }
});

function validateInput() {
    const numberInput = parseFloat(document.getElementById('numberInput').value);
    const message = document.getElementById('message');

    if (isNaN(numberInput) || numberInput <= 10) {
        message.textContent = 'Please enter a number greater than 10.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Thank you for the input!';
        message.style.color = 'green';
    }
}
