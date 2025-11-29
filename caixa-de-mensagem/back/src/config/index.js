const { criarMensagem } = require('../modulos/mensagens/createrMensagem.js');
const { excluirMensagem } = require('../modulos/mensagens/deleteMensagem.js');


criarMensagem('Primeira mensagem via Node!');
excluirMensagem(4)