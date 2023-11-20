const {Router} = require('express');
const router = Router();

const {
  salvarUsuario,
  listarUsuarios,
  selecionarIdUsuario,
  pesquisarNomeUsuario,
  atualizarUsuario,
  deletarUsuario
} = require('../controllers/usersController')

router.post('/cadastrar/usuario', salvarUsuario);
router.get('/listar/usuarios', listarUsuarios);
router.get('/selecionar/usuario/:id', selecionarIdUsuario);
router.get('/pesquisar/usuario/:nome', pesquisarNomeUsuario);
router.put('/atualizar/usuario/:id', atualizarUsuario);
router.delete('/deletar/usuario/:id', deletarUsuario);

module.exports = router;