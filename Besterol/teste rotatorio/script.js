document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var form = document.getElementById('signup-form');
  var successMessage = document.querySelector('.success-message');
  
  // Simula o processo de cadastro (aqui você pode adicionar sua lógica de cadastro real)
  setTimeout(function() {
    // Oculta o formulário
    form.style.display = 'none';
    // Mostra a mensagem de sucesso
    successMessage.style.display = 'block';
    // Gira o formulário 180 graus lateralmente
    form.classList.add('rotated');
  }, 1000); // Tempo de espera em milissegundos (1 segundo neste exemplo)
});
