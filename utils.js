/**
 * Arquivo utilitário para funções auxiliares da aplicação.
 */

// Função para verificar se o usuário está autenticado
function isAuthenticated(req) {
  return !!(req.session && req.session.user);
}

// Função para formatar datas no padrão brasileiro
function formatDateBR(date) {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

// Função para tratar erros e retornar uma mensagem amigável
function getErrorMessage(error) {
  if (!error) return 'Erro desconhecido.';
  if (typeof error === 'string') return error;
  if (error.message) return error.message;
  return 'Erro desconhecido.';
}

module.exports = {
  isAuthenticated,
  formatDateBR,
  getErrorMessage,
};