const AUTH_FIELDS = {
  login: ['email', 'password'],
  register: ['name', 'email', 'phone', 'password', 'confirmPassword']
};

function getUsers() {
  return getFromStorage(STORAGE_KEYS.users, []);
}

function saveUsers(users) {
  saveToStorage(STORAGE_KEYS.users, users);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function togglePasswordVisibility(inputId, buttonId) {
  const input = document.getElementById(inputId);
  const button = document.getElementById(buttonId);

  if (!input || !button) return;

  button.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    button.textContent = isPassword ? 'Hide' : 'Show';
  });
}

function showAuthMessage(message, type = 'error') {
  const container = document.getElementById('auth-message');
  if (!container) return;

  container.textContent = message;
  container.style.color = type === 'success' ? '#1d7f59' : '#b24b4b';
}

function handleLoginForm() {
  const form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const email = String(formData.get('email') || '').trim();
    const password = String(formData.get('password') || '').trim();

    const users = getUsers();
    const matchedUser = users.find((user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password);

    if (!email || !password) {
      showAuthMessage('Please enter your email and password.', 'error');
      return;
    }

    if (!validateEmail(email) && !/^\d{10}$/.test(email)) {
      showAuthMessage('Use a valid email address or 10-digit phone number.', 'error');
      return;
    }

    if (!matchedUser) {
      showAuthMessage('Invalid credentials. Try the demo account or register first.', 'error');
      return;
    }

    saveToStorage(STORAGE_KEYS.currentUser, { name: matchedUser.name, email: matchedUser.email });
    showAuthMessage('Login successful. Redirecting...', 'success');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 800);
  });
}

function handleRegisterForm() {
  const form = document.getElementById('register-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const password = String(formData.get('password') || '').trim();
    const confirmPassword = String(formData.get('confirmPassword') || '').trim();

    if (!name || !email || !phone || !password || !confirmPassword) {
      showAuthMessage('Please fill in all registration fields.', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showAuthMessage('Enter a valid email address.', 'error');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      showAuthMessage('Phone number must be 10 digits.', 'error');
      return;
    }

    if (password.length < 6) {
      showAuthMessage('Password should be at least 6 characters long.', 'error');
      return;
    }

    if (password !== confirmPassword) {
      showAuthMessage('Passwords do not match.', 'error');
      return;
    }

    const existingUsers = getUsers();
    const userExists = existingUsers.some((user) => user.email.toLowerCase() === email.toLowerCase());

    if (userExists) {
      showAuthMessage('A user with this email already exists.', 'error');
      return;
    }

    const newUser = { name, email, phone, password };
    existingUsers.push(newUser);
    saveUsers(existingUsers);
    saveToStorage(STORAGE_KEYS.currentUser, { name, email });
    showAuthMessage('Registration successful. Redirecting...', 'success');

    setTimeout(() => {
      window.location.href = 'index.html';
    }, 800);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  togglePasswordVisibility('login-password', 'login-password-toggle');
  togglePasswordVisibility('register-password', 'register-password-toggle');
  togglePasswordVisibility('confirm-password', 'confirm-password-toggle');

  handleLoginForm();
  handleRegisterForm();
});
