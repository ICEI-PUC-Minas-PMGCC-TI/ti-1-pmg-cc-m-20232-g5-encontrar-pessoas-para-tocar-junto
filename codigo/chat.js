const ws = new WebSocket('ws://localhost:8080/servidor')
const input = document.querySelector('input');
const output = document.querySelector('output');

ws.addEventListener('open', console.log)
ws.addEventListener('message', console.log)

ws.addEventListener('message', message =>{
    const dados = JSON.parse(message.data);
    if(dados.type === 'chat'){
        output.append('Outro: ' + dados.text, document.createElement('br'));
    }
})

input.addEventListener('keypress', e => {
    if (e.code === 'Enter') {
        const valor = input.value;
        output.append( 'Eu:' + valor, document.createElement('br'));
        ws.send(valor);

        input.value = '';
    }
})