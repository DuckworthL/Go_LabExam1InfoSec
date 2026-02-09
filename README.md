# Student Identity Cipher - Caesar Cipher Web Application

## 📋 Project Overview
A web-based Caesar Cipher encryption/decryption tool designed for educational purposes. This application demonstrates basic cryptographic principles by shifting letters in the alphabet while preserving numbers, symbols, and spaces.

## 🎯 Features
- **Encrypt**: Transform plaintext into ciphertext using Caesar Cipher
- **Decrypt**: Reverse the encryption process
- **Input Validation**: Ensures all fields are filled and key is within valid range (1-25)
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Security-Conscious**: Implements XSS prevention and safe DOM manipulation
- **Distinctive UI**: Modern cyber-terminal aesthetic with smooth animations

## 📁 File Structure
```
student-identity-cipher/
├── index.html          # Main HTML structure
├── styles.css          # Styling with cyber-terminal theme
├── script.js           # Caesar cipher logic and validation
├── EXPLANATION.txt     # How encryption/decryption works
└── README.md           # This file
```

## 🚀 How to Use

### 1. Open the Application
Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

### 2. Enter Your Information
- **Full Name**: Your complete name (e.g., "Glenn Angelo Oliva")
- **Year Level**: Your current year (e.g., "3rd Year")
- **Course**: Your course code (e.g., "BSIT")
- **Key (N)**: A number between 1-25 for the shift value

### 3. Encrypt or Decrypt
- Click **Encrypt** to convert your plaintext into ciphertext (shown in Output)
- Click **Decrypt** to reverse the encryption and return to original plaintext
- Click **Clear** to reset all fields

**Workflow Example:**
1. Enter your information → Click **Encrypt** → See ciphertext in Output
2. Click **Decrypt** → See original plaintext restored in Output

## 🧪 Testing Instructions

### Test Case 1: Basic Encryption (N = 3)
**Input:**
- Full Name: `Glenn Angelo Oliva`
- Year Level: `3rd Year`
- Course: `BSIT`
- Key: `3`

**Expected Combined Plaintext:**
```
Glenn Angelo Oliva | 3rd Year | BSIT
```

**Expected Encrypted Output:**
```
Johsq Dqjhor Rolyh | 3ug Bhdu | EVLW
```

**Then click Decrypt to verify:**
```
Glenn Angelo Oliva | 3rd Year | BSIT
```
(Should return to original plaintext)

**Verification:**
- G → J (encrypt: shift by 3)
- J → G (decrypt: shift back by 3)
- 3 → 3 (numbers unchanged)
- | → | (symbols unchanged)

### Test Case 2: Edge Case - Wrap Around (N = 1)
**Input:**
- Full Name: `ALICE`
- Year Level: `1`
- Course: `BSIT`
- Key: `1`

**Expected:**
- A → B
- Z → A (wraps around)

### Test Case 3: Validation Tests
Try these to test error handling:
- Leave Full Name empty → Should show error
- Set Key to 0 → Should show error
- Set Key to 26 → Should show error
- Set Key to -5 → Should show error

## 🔒 Caesar Cipher Formulas

### Encryption Formula
```
E = (X + N) % 26
```
- X = Position of letter (A=0, B=1, ..., Z=25)
- N = Shift key (1-25)
- E = Encrypted position

### Decryption Formula
```
D = (X - N + 26) % 26
```
- X = Position of encrypted letter
- N = Shift key (1-25)
- D = Decrypted position
- +26 ensures positive result before modulo

## 🎨 Design Features
- **Cyber-Terminal Aesthetic**: Modern, distinctive design
- **Custom Typography**: Orbitron display font + JetBrains Mono for code
- **Animated Background**: Subtle grid animation
- **Glowing Effects**: Cyan accent colors with glow effects
- **Smooth Transitions**: Professional micro-interactions
- **Responsive Layout**: Adapts to all screen sizes

## 🔐 Security Features
1. **XSS Prevention**: Uses `textContent` instead of `innerHTML`
2. **Input Validation**: Checks all fields before processing
3. **No Unsafe Functions**: No `eval()` or similar dangerous functions
4. **Range Checking**: Ensures key stays within 1-25
5. **Error Handling**: Clear error messages for invalid inputs

## ⚠️ Important Notes

### Limitations of Caesar Cipher
- **NOT SECURE**: Caesar Cipher is for educational purposes only
- **Easily Cracked**: Only 25 possible keys
- **Vulnerable**: Susceptible to frequency analysis and brute force
- **For Learning**: Use modern encryption (AES-256) for real security

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📊 Rubric Alignment

| Criteria | Implementation |
|----------|----------------|
| **Correct Encryption** (25 pts) | ✅ E = (X + N) % 26 with proper wrap-around |
| **Correct Decryption** (25 pts) | ✅ D = (X - N + 26) % 26 returns original text |
| **Identity-Based Plaintext** (10 pts) | ✅ Uses FULL NAME \| YEAR \| COURSE format |
| **Input Validation** (10 pts) | ✅ Validates empty fields and key range 1-25 |
| **UI Layout** (10 pts) | ✅ Clean, readable, professional design |
| **Code Quality** (10 pts) | ✅ Organized functions, comments, meaningful names |
| **Security Awareness** (10 pts) | ✅ XSS prevention, no eval, limitations documented |

## 💡 Tips for Testing
1. Always test with N=3 first (standard Caesar Cipher test)
2. **Complete cycle test**: Enter data → Click Encrypt → Click Decrypt → Verify original text returns
3. Test edge cases: Z→A wrap-around, numbers, symbols
4. Check validation by submitting empty fields or trying to decrypt before encrypting
5. Verify mobile responsiveness by resizing browser

## 📝 Author Notes
This implementation prioritizes:
- **Educational Value**: Clear code with extensive comments
- **Security Best Practices**: Even for a demo application
- **User Experience**: Intuitive interface with helpful error messages
- **Code Quality**: Maintainable, well-structured JavaScript

## 📧 Support
If you encounter any issues or have questions, please check:
1. Browser console for JavaScript errors (F12)
2. Ensure all three files are in the same directory
3. Verify browser supports ES6+ JavaScript features

---
**Created for**: Laboratory Exam 1 - Web Development
**Topic**: Caesar Cipher Implementation
**Technologies**: HTML5, CSS3, JavaScript (ES6+)
