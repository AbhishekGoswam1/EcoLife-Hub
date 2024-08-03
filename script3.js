document.getElementById('toggle-btn').addEventListener('click', function() {
    const formContent = document.getElementById('form-content');
    const toggleBtn = document.getElementById('toggle-btn');
  
    if (formContent.querySelector('h2').textContent === 'Signup') {
      formContent.innerHTML = `
        <h2>Login</h2>
        <form id="login-form">
          <input type="text" placeholder="Username" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Login</button>
        </form>
      `;
      toggleBtn.textContent = 'Switch to Signup';
    } else {
      formContent.innerHTML = `
        <h2>Signup</h2>
        <form id="signup-form">
          <input type="text" placeholder="Username" required>
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Signup</button>
        </form>
      `;
      toggleBtn.textContent = 'Switch to Login';
    }
  });