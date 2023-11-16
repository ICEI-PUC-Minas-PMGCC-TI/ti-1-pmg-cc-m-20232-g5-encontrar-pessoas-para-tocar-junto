function adicionarBanda() {
    const nomeBanda = document.getElementById('bandName').value;
    const integrantes = document.getElementById('bandMembers').value.split('\n');

    const novaBanda = {
        nome: nomeBanda,
        membros: integrantes
    };

    exibirBanda(novaBanda);
}

function exibirBanda(banda) {
    const listaBandas = document.getElementById('bandList');
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('band');

    const nomeBanda = document.createElement('h2');
    nomeBanda.textContent = banda.nome;

    const listaIntegrantes = document.createElement('ul');
    banda.membros.forEach(integrante => {
        const listItem = document.createElement('li');
        listItem.textContent = integrante;
        listaIntegrantes.appendChild(listItem);
    });

    novaDiv.appendChild(nomeBanda);
    novaDiv.appendChild(listaIntegrantes);
    listaBandas.appendChild(novaDiv);
}
