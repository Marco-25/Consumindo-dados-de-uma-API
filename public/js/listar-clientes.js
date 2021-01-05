const removeCliente = (id) => {
    if (confirm("Desejar deletar Cliente?")) {
        deletaCliente(id);
    }
}

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement("tr"),
          conteudoLinha = `
  <td>${cpf}</td>
  <td>${nome}</td>
  <button type="button" onclick="removeCliente(${id})" class="btn btn-danger">Deletar</button>
  <a href="edita-clientes.html?id=${id}">
        <button type="button" onclick="" class="btn btn-info">Editar</button>
  </a>
  `;

    linha.innerHTML = conteudoLinha;
    return linha;
};

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

listarClientes().then( exibe => {
    exibe.forEach(indice => {
            corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome,indice.id))
        })
    }

)