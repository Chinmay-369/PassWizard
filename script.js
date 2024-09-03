let btnElement = document.querySelector('#generateBtn');
btnElement.addEventListener('click', generatePassword);

function generatePassword() {
    let length = document.querySelector('#length').value;
    let upperCase = document.querySelector('#includeUppercase').checked;
    let lowercase = document.querySelector('#includeLowercase').checked;
    let specialSymbols = document.querySelector('#includeSymbols').checked;
    let numbers = document.querySelector('#includeNumbers').checked;

    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';
    if (lowercase) characters += lowercaseLetters;
    if (upperCase) characters += uppercaseLetters;
    if (numbers) characters += numberChars;
    if (specialSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.querySelector('#password').value = password;
}

let copyBtn = document.querySelector('#copyBtn');
copyBtn.addEventListener('click', function() {
    let passwordField = document.querySelector('#password');
    
    if (passwordField.value === '') {
        alert('No password generated yet! Please generate a password first.');
        return;
    }

    passwordField.select();
    passwordField.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(passwordField.value)
        .then(() => {
            alert('Password copied to your Clipboard!');
        })
        .catch(err => {
            alert('Failed to copy!\nPlease try again...');
        });
});
