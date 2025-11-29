import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import rotas from './rotas.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    mensage: 'Limite de Requisições Excedido'
}))

app.use('/api', rotas);

app.get('/status', (req, res) => {
    res.json({
        online: true,
        versão: '1.0.0',
        mensagem: 'API base fucionando com sucesso.'
    });
});


export default function iniciarServidor() {
    const PORTA = process.env.PORT || 3000;

    app.listen(PORTA, () => {
        console.log('Servidor rodando na porta ' + PORTA)
    });
}

