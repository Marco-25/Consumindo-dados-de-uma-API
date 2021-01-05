function verificaCPFInvalidos(cpf) {
    const cpfsInvalidos = [
        '11111111111','22222222222',
        '33333333333','44444444444',
        '55555555555','66666666666',
        '77777777777','88888888888',
        '99999999999','00000000000'
    ];
    return cpfsInvalidos.indexOf(cpf) === -1;
}

function somaNumerosCpf(cpf, totalDigitos, peso) {
    let soma = 0;
    for(let i =1; i <= totalDigitos; i++) {
        soma += parseInt(cpf.substring(i - 1, i) * (peso - i));
    }
    return soma;
}

function verificaDegitoVerificacao(cpf, totalDigitos, peso, digitoverificacao){

    const soma = somaNumerosCpf(cpf,totalDigitos,peso);
    const resto = (soma *10 ) % 11;
    return resto === digitoverificacao;
}

function verificaPrimeiroDigito(cpf) {
    const peso = 11;
    const totalDeDigitosPrimeiraParte = 9
    const digitoDeVerificacao = parseInt(cpf.substring(9,10));

    return verificaDegitoVerificacao(
        cpf,
        totalDeDigitosPrimeiraParte,
        peso,
        digitoDeVerificacao
    )
}

function verificaSegundoDigito(cpf) {
    const peso = 12;
    const totalDeDigitosSegundaParte = 10
    const digitoDeVerificacao = parseInt(cpf.substring(10,11));

    return verificaDegitoVerificacao(
        cpf,
        totalDeDigitosSegundaParte,
        peso,
        digitoDeVerificacao
    )
}

function validaCPF(cpf) {
    return (
        verificaPrimeiroDigito(cpf)&&
        verificaSegundoDigito(cpf)&&
        verificaCPFInvalidos(cpf)
    )
}















