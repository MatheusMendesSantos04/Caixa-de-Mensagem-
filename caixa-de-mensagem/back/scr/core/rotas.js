import { Router } from 'express';

import mensagemRotas from '../modulos/mensagens/rotas.js';
import usuarioRotas from '../modulos/usuarios/rotas.js';


const router = Router();


router.use('/mensagens', mensagemRotas);
router.use('/usuarios', usuarioRotas);

export default router; 


