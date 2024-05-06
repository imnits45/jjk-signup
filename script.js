const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const button = document.getElementById('create-account');
const p = document.querySelector('.in-case-no-match');

button.addEventListener('click', () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    passwordInput.style.border = '1px solid rgba(226, 241, 243, 0.727)';
    confirmPasswordInput.style.border = '1px solid rgba(226, 241, 243, 0.727)';

    if (password !== confirmPassword) {
        passwordInput.style.border = '2px solid red';
        confirmPasswordInput.style.border = '2px solid red';
        p.textContent = '*passwords do not match';
    }
    else if (password === "") {
        passwordInput.style.border = '2px solid red';
        confirmPasswordInput.style.border = '2px solid red';
        p.textContent = "*password cannot be empty"
    }
    else {
        p.textContent = '';
        alert('Account created successfully!');
    }
});
