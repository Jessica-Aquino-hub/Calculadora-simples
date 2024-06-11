function calcular() {
    let n1, n2, operacao, resultado, caixaResposta

    n1 = Number(document.getElementById("valor1").value);
    n2 = Number(document.getElementById("valor2").value);
    operacao = (document.getElementById("operacao").value);
    caixaResposta = document.getElementById("caixaResposta");


    if (operacao === '+') {
        resultado = n1 + n2;
    }
    else if (operacao === '-') {
        resultado = n1 - n2;
    }
    else if (operacao === '*') {
        resultado = n1 * n2;
    }
    else {
        operacao === '/'
        resultado = n1 / n2
    };

    caixaResposta.textContent = resultado;
};
