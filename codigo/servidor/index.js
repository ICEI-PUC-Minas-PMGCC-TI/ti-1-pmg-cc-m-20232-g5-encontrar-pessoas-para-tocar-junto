const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  console.log('Cliente conectado.');

  ws.on('message', (message) => {
    console.log(`Mensagem recebida: ${message}`);
    // Processar mensagens recebidas do cliente WebSocket aqui.
  });

  ws.on('close', () => {
    console.log('Cliente desconectado.');
  });
});

console.log('Servidor WebSocket está ouvindo na porta 8080.');
