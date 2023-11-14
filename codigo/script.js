function enviarDados() {

    var casaEvento = document.getElementById('caixaTexto').value;
    var descricao = document.getElementById('descricao').value;
    var data = document.getElementById('data').value;

    //exibir no console
    console.log('Nome da casa:', casaEvento);
    console.log('Descrição:', descricao);
    console.log('Data:', data);

    var anuncio = {
      casaEvento: casaEvento,
      descricao: descricao,
      data: data
  };

  var usuariosExistentes = JSON.parse(localStorage.getItem('anuncio')) || [];

  usuariosExistentes.push(anuncio);

  localStorage.setItem("anuncio", JSON.stringify(usuariosExistentes));

    alert("Cadastro realizado com sucesso!!!");
  }

 