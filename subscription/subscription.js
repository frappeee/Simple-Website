// Form validation
const form = document.getElementById('subscribe-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const dobInput = document.getElementById('dob');
const genderInput = document.getElementById('gender');
const agreeInput = document.getElementById('agree');

form.addEventListener('submit', function(event) {
    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
        setErrorFor(nameInput, 'Name cannot be blank');
        isValid = false;
    } else {
        setSuccessFor(nameInput);
    }

    // Validate email
    if (emailInput.value.trim() === '') {
        setErrorFor(emailInput, 'Email cannot be blank');
        isValid = false;
    } else if (!isEmail(emailInput.value.trim())) {
        setErrorFor(emailInput, 'Email is not valid');
        isValid = false;
    } else {
        setSuccessFor(emailInput);
    }

    // Validate date of birth
    if (dobInput.value.trim() === '') {
        setErrorFor(dobInput, 'Date of Birth cannot be blank');
        isValid = false;
    } else {
        setSuccessFor(dobInput);
    }

    // Validate gender
    if (genderInput.value === '') {
        setErrorFor(genderInput, 'Please select your gender');
        isValid = false;
    } else {
        setSuccessFor(genderInput);
    }

    // Validate agreement
    if (!agreeInput.checked) {
        setErrorFor(agreeInput, 'You must agree to the terms and conditions');
        isValid = false;
    } else {
        setSuccessFor(agreeInput);
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function setErrorFor(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.innerText = message;
}

function setSuccessFor(input) {
    const errorSpan = input.nextElementSibling;
    errorSpan.innerText = '';
}

function isEmail(email) {
    // Basic email validation (not using regex)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
