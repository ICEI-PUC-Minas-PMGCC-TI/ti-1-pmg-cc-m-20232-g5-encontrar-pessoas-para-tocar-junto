$(document).ready(function(){

    load(0);

    function load(id) {
        $.getJSON("perfil.json", function(data){

            console.log(data)
    
            $('.nome').html(data[id].nome)
            $('.descricao').html(data[id].descricao)
            //$('.instrumentos').html(data[id].instrumentos)
            $('.insta').html(data[id].instagram)
            $('.ctt').html(data[id].contato)

            switch (id) {
                case 0:
                    document.getElementById('profileP').src = "/assets/images/profissional.jpeg"
                break;
                case 1:
                    document.getElementById('profileP').src = "/assets/images/amador.jpeg"
                break;
                case 2:
                    document.getElementById('profileP').src = "/assets/images/hobbie.jpeg"
                break;
            
                default:
                    break;
            }
        });
    }
})