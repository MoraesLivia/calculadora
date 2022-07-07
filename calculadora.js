function calculadora(){
    const operacao = prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)');
    console.log(operacao)

    if (!operacao || operacao >= 7) {
        alert('ERRO - Operação inválida!')
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:')); //sem o number o valor seria considerado em string, e a soma de 1 + 1 retornaria 11 por exemplo
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2) {
            alert('ERRO - parâmetros inválidos! Tente novamente.')
            calculadora()
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function divisaoreal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function divisaointeira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
                novaOperacao();
            }
    
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a  ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
    
            function novaOperacao() {
                let opcao = prompt('Deseja fazer uma nova operação?\n 1 - SIM\n 2 - NÃO');
    
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }


        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoreal();
        } else if (operacao == 5) {
            divisaointeira();
        } else if (operacao == 6) {
            potenciacao();
        }

        /*switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoreal();
                break;
            case 5:
                divisaointeira();
                break;
            case 6:
                potenciacao();
                break;
        }*/
    }
}

calculadora();