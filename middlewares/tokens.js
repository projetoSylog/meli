module.exports.validateToken = (req, res, next) => {
  // Verifica se o token de acesso está salvo na session
  if (req.session && req.session.access_token) {
    // Torna o access_token disponível para outras rotas
    res.locals.access_token = req.session.access_token;
    next();
  } else {
    // Se não existir, redireciona para a tela de login ou início
    res.redirect('/?error=token-invalido');
  }
};