document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtener valores del formulario
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Validación simple
  if (username && email && password) {
    document.getElementById('message').textContent = '¡Registro exitoso!';
    document.getElementById('message').className = 'message success';
  } else {
    document.getElementById('message').textContent = 'Por favor, complete todos los campos.';
    document.getElementById('message').className = 'message error';
  }
});
