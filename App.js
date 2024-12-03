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

let debounceTimer;
document.getElementById('numberInput').addEventListener('input', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        validateInput(this.value);
    }, 300);
});

function checkInput() {
    const inputValue = document.getElementById('numberInput').value;
    validateInput(inputValue);

    if (isNaN(inputValue) || parseFloat(inputValue) <= 10) {
        return false;
    }

    alert('Form Submitted Successfully!');
    return true;
}
