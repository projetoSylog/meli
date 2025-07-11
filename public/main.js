// Exemplo: Mensagem de erro automática
window.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get('error')) {
    alert('Ocorreu um erro: ' + params.get('error'));
  }
});