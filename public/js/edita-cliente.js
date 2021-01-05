const pegaUrl = new URL(window.location);
const id = pegaUrl.searchParams.get('id');

const inputCpf = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

detalhaCliente(id).then(dados => {
    inputCpf.value = dados[0].cpf
    inputNome.value = dados[0].nome
});

const formEdicao = document.querySelector('[data-form]');
formEdicao.addEventListener('submit', event => {
    event.preventDefault();

    if(!validaCPF(inputCpf.value)) {
        alert("Esse cpf não exite.")
        return
    }

    editaCliente(id, inputCpf.value, inputNome.value).then(resposta => {
        if(resposta.status === 200) {
            formEdicao.appendChild(mensagem(
                'success','Cliente editado com sucesso.'))
        }
    });
})

const mensagem = (tipo,mensagem) => {
    const msg = document.createElement("div");
    msg.innerHTML = `
            <p class="alert alert-${tipo}"> ${mensagem} </p>
  `;
    return msg;
}

