import { WebSocketServer } from 'ws';

export function iniciarWebSocket(servidorHttp) {
    const wss = new WebSocketServer({ server: servidorHttp });

    wss.on('connection', (socket) => {
        console.log('Cliente conectado ao WebSocket');


        socket.on('message', (msg) => {
            console.log('Mensagem recebida:', msg);
        });


        socket.on('close', () => {
            console.log('Cliente desconectado do WebSocket');
        });
    });

    return wss;
}