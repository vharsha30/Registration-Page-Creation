document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const dob = document.getElementById('dob').value;
  const terms = document.getElementById('terms').checked;
  const message = document.getElementById('message');

  if (!fullName || !email || !password || !confirmPassword || !dob || !gender || !terms) {
    message.textContent = 'Please fill out all fields and accept terms.';
    message.style.color = 'red';
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = 'Passwords do not match.';
    message.style.color = 'red';
    return;
  }

  message.textContent = `Registration successful! Welcome, ${fullName}.`;
  message.style.color = 'green';
});
