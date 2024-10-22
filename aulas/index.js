function classificarJogador(vitorias, derrotas) {
    // Calculando o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    
    // Funções para classificar o jogador em cada nível
    function nivelFerro() {
        return "Ferro";
    }
    
    function nivelBronze() {
        return "Bronze";
    }

    function nivelPrata() {
        return "Prata";
    }

    function nivelOuro() {
        return "Ouro";
    }

    function nivelDiamante() {
        return "Diamante";
    }

    function nivelLendario() {
        return "Lendário";
    }

    function nivelImortal() {
        return "Imortal";
    }

    // Função para determinar o nível baseado nas vitórias
    function determinarNivel(vitorias) {
        if (vitorias < 10) {
            return nivelFerro();
        } else if (vitorias >= 11 && vitorias <= 20) {
            return nivelBronze();
        } else if (vitorias >= 21 && vitorias <= 50) {
            return nivelPrata();
        } else if (vitorias >= 51 && vitorias <= 80) {
            return nivelOuro();
        } else if (vitorias >= 81 && vitorias <= 90) {
            return nivelDiamante();
        } else if (vitorias >= 91 && vitorias <= 100) {
            return nivelLendario();
        } else if (vitorias >= 101) {
            return nivelImortal();
        }
    }

    // Pegando o nível baseado nas vitórias
    let nivel = determinarNivel(vitorias);

    // Exibindo a mensagem final
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Exemplo de uso da função
classificarJogador(55, 20);
