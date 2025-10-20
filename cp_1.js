document.addEventListener('DOMContentLoaded'), () => {
    const form = document.getElementById('feedback-form');
    const feedbackDisplay = document.getElementById('feedback-display');
    const formContainer = document.getElementById('form-container');


formContainer.addEventListener ('input', handleInputEvent);
formContainer.addEventListener ('mouseover', () => showTooltip());
formContainer.addEventListener ('mouseout', () => hideTooltip());

form.addEventListener ('submit', handleFormSubmit);

document.querySelector('background-container').addEventListener('click', e => {
    if (e.target.classList.contains('background-container')) {
        e.stopPropagation();
    }
});

function handleInputEvent(e) {
    if (e.target.id === 'comments') {
        const charCount = e.target.value.length;
        const charCpintDisplay = document.getElementById('char-count');
        charCountDisplay.textContent = `${charCount}/500 characters`;
    }
}

function handleMouseoverEvent(e) {
    const target = e.target.closest('.form-group');
    if (target) {
        const tooltip = target.querySelector('.tooltip');
        if (tooltip) {
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
        }
    }
}

function handleMouseoutEvent(e) {
    const target = e.target.closest('.form-group');
    if (target) {
        const tooltip = target.querySelector('.tooltip');
        if (tooltip) {
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        }
    }
}

function handleFormSubmit(e) {
    e.preventDefault();

    let allFieldsValid = true;

    // Clear previous validation messages
    document.querySelectorAll('.validation-message').forEach(el => el.textContent = '');

    // Check for empty fields
    const userName = document.getElementById('user-name');
    if (!userName.value.trim()) {
        displayValidationMessage(userName, 'Name is required.');
        allFieldsValid = false;
    }

    const userEmail = document.getElementById('user-email');
    if (!userName.value.trim() || !validateEmail(userEmail.value)) {
        displayValidationMessage(userEmail, 'A valid email is required.');
        allFieldsValid = false;
    }

    const comments = document.getElementById('comments');
    if (!comments.value.trim()) {
        displayValidationMessage(comments, 'Comments are required.');
        allFieldsValid = false;
    }

    if (allFieldsValid) {
        appendFeedback(userName.value, userEmail.value, comments.value);
        form.reset();
    }
}

// Appends a new feedback entry to the display container.
function appendFeedback(name, email, comments) {
    const entry = document.createElement('div');
    entry.textContent = "Feedback received!";
    document.getElementById("feedback-display").appendChild(entry);
}

// Displays a validation message next to an input field.
function displayValidationMessage(field, message) {
    const formGroup = field.closest('.form-group');
    const validateE1 = formGroup.querySelector('.validation-message');
    if(validateE1) {
        validationE1.textContent = message;
    }
}



