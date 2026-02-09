const fullNameInput = document.getElementById('fullName');
const yearLevelInput = document.getElementById('yearLevel');
const courseInput = document.getElementById('course');
const keyNInput = document.getElementById('keyN');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const clearBtn = document.getElementById('clearBtn');
const inputPlaintextDiv = document.getElementById('inputPlaintext');
const outputResultDiv = document.getElementById('outputResult');
const errorMessageDiv = document.getElementById('errorMessage');


/**
 * Encrypts text using Caesar Cipher
 * Formula: E = (X + N) % 26
 * @param {string} text - The plaintext to encrypt
 * @param {number} shift - The shift key (1-25)
 * @returns {string} - The encrypted ciphertext
 */
function encrypt(text, shift) {
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        // Check if character is uppercase letter (A-Z)
        if (char >= 'A' && char <= 'Z') {
            // Convert char to number (A=0, B=1, ..., Z=25)
            const charCode = char.charCodeAt(0) - 65;
            // Apply encryption formula: E = (X + N) % 26
            const encryptedCode = (charCode + shift) % 26;
            // Convert back to letter
            const encryptedChar = String.fromCharCode(encryptedCode + 65);
            result += encryptedChar;
        }
        // Check if character is lowercase letter (a-z)
        else if (char >= 'a' && char <= 'z') {
            // Convert char to number (a=0, b=1, ..., z=25)
            const charCode = char.charCodeAt(0) - 97;
            // Apply encryption formula: E = (X + N) % 26
            const encryptedCode = (charCode + shift) % 26;
            // Convert back to letter
            const encryptedChar = String.fromCharCode(encryptedCode + 97);
            result += encryptedChar;
        }
        // Keep numbers, spaces, symbols unchanged
        else {
            result += char;
        }
    }
    
    return result;
}

/**
 * Decrypts text using Caesar Cipher
 * Formula: D = (X - N) % 26
 * @param {string} text - The ciphertext to decrypt
 * @param {number} shift - The shift key (1-25)
 * @returns {string} - The decrypted plaintext
 */
function decrypt(text, shift) {
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        // Check if character is uppercase letter (A-Z)
        if (char >= 'A' && char <= 'Z') {
            // Convert char to number (A=0, B=1, ..., Z=25)
            const charCode = char.charCodeAt(0) - 65;
            // Apply decryption formula: D = (X - N) % 26
            // Add 26 before modulo to handle negative numbers correctly
            const decryptedCode = (charCode - shift + 26) % 26;
            // Convert back to letter
            const decryptedChar = String.fromCharCode(decryptedCode + 65);
            result += decryptedChar;
        }
        // Check if character is lowercase letter (a-z)
        else if (char >= 'a' && char <= 'z') {
            // Convert char to number (a=0, b=1, ..., z=25)
            const charCode = char.charCodeAt(0) - 97;
            // Apply decryption formula: D = (X - N) % 26
            // Add 26 before modulo to handle negative numbers correctly
            const decryptedCode = (charCode - shift + 26) % 26;
            // Convert back to letter
            const decryptedChar = String.fromCharCode(decryptedCode + 97);
            result += decryptedChar;
        }
        // Keep numbers, spaces, symbols unchanged
        else {
            result += char;
        }
    }
    
    return result;
}



/**
 * Validates all input fields
 * @returns {Object} - Validation result with isValid flag and error message
 */
function validateInputs() {
    const fullName = fullNameInput.value.trim();
    const yearLevel = yearLevelInput.value.trim();
    const course = courseInput.value.trim();
    const keyN = parseInt(keyNInput.value);
    
    // Check for empty fields
    if (!fullName) {
        return { isValid: false, message: 'Error: Full Name is required' };
    }
    
    if (!yearLevel) {
        return { isValid: false, message: 'Error: Year Level is required' };
    }
    
    if (!course) {
        return { isValid: false, message: 'Error: Course is required' };
    }
    

    if (isNaN(keyN) || keyN < 1 || keyN > 25) {
        return { isValid: false, message: 'Error: Key must be between 1 and 25' };
    }
    
    return { isValid: true, message: '' };
}

/**

 * @param {string} message
 */
function showError(message) {
    errorMessageDiv.textContent = message;
    errorMessageDiv.classList.add('show');
    
    
    setTimeout(() => {
        hideError();
    }, 4000);
}


function hideError() {
    errorMessageDiv.classList.remove('show');
}



/**


 * @returns {string}
 */
function getCombinedPlaintext() {
    const fullName = fullNameInput.value.trim();
    const yearLevel = yearLevelInput.value.trim();
    const course = courseInput.value.trim();
    
    return `${fullName} | ${yearLevel} | ${course}`;
}

/**

 * @param {HTMLElement} element
 * @param {string} text
 */
function safeSetText(element, text) {

    element.textContent = text;
}


function handleEncrypt() {
    hideError();
    
    // Validate inputs
    const validation = validateInputs();
    if (!validation.isValid) {
        showError(validation.message);
        return;
    }
    
    // Get values
    const plaintext = getCombinedPlaintext();
    const keyN = parseInt(keyNInput.value);
    
    // Display input plaintext
    safeSetText(inputPlaintextDiv, plaintext);
    
    // Encrypt and display result
    const ciphertext = encrypt(plaintext, keyN);
    safeSetText(outputResultDiv, ciphertext);
}


function handleDecrypt() {
    hideError();
    
    // Check if there's encrypted text in the output
    const ciphertext = outputResultDiv.textContent.trim();
    
    if (!ciphertext) {
        showError('Error: Please encrypt first before decrypting');
        return;
    }
    
    // Validate key input
    const keyN = parseInt(keyNInput.value);
    if (isNaN(keyN) || keyN < 1 || keyN > 25) {
        showError('Error: Key must be between 1 and 25');
        return;
    }
    
    // Decrypt the ciphertext and display result
    const decrypted = decrypt(ciphertext, keyN);
    safeSetText(outputResultDiv, decrypted);
}


function handleClear() {

    fullNameInput.value = '';
    yearLevelInput.value = '';
    courseInput.value = '';
    keyNInput.value = '3';
    

    inputPlaintextDiv.textContent = '';
    outputResultDiv.textContent = '';
    

    hideError();
    

    fullNameInput.focus();
}

/**

 * @param {KeyboardEvent} event 
 */
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        handleEncrypt();
    }
}

encryptBtn.addEventListener('click', handleEncrypt);
decryptBtn.addEventListener('click', handleDecrypt);
clearBtn.addEventListener('click', handleClear);


fullNameInput.addEventListener('keypress', handleKeyPress);
yearLevelInput.addEventListener('keypress', handleKeyPress);
courseInput.addEventListener('keypress', handleKeyPress);
keyNInput.addEventListener('keypress', handleKeyPress);


[fullNameInput, yearLevelInput, courseInput, keyNInput].forEach(input => {
    input.addEventListener('input', hideError);
});


document.addEventListener('DOMContentLoaded', () => {
    fullNameInput.focus();
});

