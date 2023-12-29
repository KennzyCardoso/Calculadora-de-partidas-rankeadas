// Função para calcular o saldo de ranqueadas
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível com base no saldo de vitórias
function determinarNivel(vitorias) {
    switch (true) {
        case vitorias < 10:
            return "Ferro";
        case vitorias >= 11 && vitorias <= 20:
            return "Bronze";
        case vitorias >= 21 && vitorias <= 50:
            return "Prata";
        case vitorias >= 51 && vitorias <= 80:
            return "Ouro";
        case vitorias >= 81 && vitorias <= 90:
            return "Diamante";
        case vitorias >= 91 && vitorias <= 100:
            return "Lendário";
        default:
            return "Imortal";
    }
}

// Função principal que chama as outras funções e exibe a mensagem
function exibirMensagem(vitorias, derrotas) {
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(vitorias);
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Exemplo de uso
exibirMensagem(25, 5); // Você pode substituir esses valores pelos resultados reais
