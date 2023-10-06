const apiKey = "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"

//Definir frases aleatorias

const Frases = [
    "batata!",
    "fasddj",
    "kaskdkasdk",
    "lasldasldsl"

]

//Fim definir

function gerarFrase(){
    const indice = Math.floor(Math.random() * Frases.length);
    return Frases[indice];
}



//fim

function sendMessage(){
    var message = document.getElementById('message-input');
    if(!message.value){
        message.style.border = '1px solid red'
        return
    }    
    message.style.border = "none"

    //requisição da mensagem digitada pelo usuário
    
    var userMessage = message.value;
    showHistoric(userMessage)
    message.value = ' ';

    //fim

    var status = document.getElementById('status');
    var button = document.getElementById('button');
    button.disabled = true;
    button.style.cursor = 'not-allowed'

    setTimeout(function(){
        button.disabled = false;
        button.style.cursor = 'pointer';
    }, 2000); 
}

function showHistoric(message){
    var historic = document.getElementById('historic')

    //minhas mensagens

    var boxMyMessage = document.createElement('div')
    boxMyMessage.className = 'box-my-message'

    var MyMessage = document.createElement('p')
    MyMessage.className = 'my-message'
    MyMessage.innerHTML = message

    boxMyMessage.appendChild(MyMessage)
    historic.appendChild(boxMyMessage)

    //respostas 

    var RespostaMessage = document.createElement('div')
    RespostaMessage.className = 'box-response-message'

    var chatResponse = document.createElement('p')
    chatResponse.className = 'chat-response'


   


    setTimeout(function(){
        historic.removeChild(AnimationMessage)
        chatResponse.innerHTML = gerarFrase();
        chatResponse.style.marginLeft = '-5%'
    },3000);

    RespostaMessage.appendChild(chatResponse)
    historic.appendChild(RespostaMessage)


     //animação

     var AnimationMessage = document.createElement('div')
     AnimationMessage.className = 'box-animation-message'
    
     var animation = document.createElement('p')
     animation.className = 'animação';
 
 
     AnimationMessage.appendChild(animation)
     historic.appendChild(AnimationMessage)
 
 
     //fim animação
    
    

}









