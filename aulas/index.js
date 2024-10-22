let nome = "robertinho";
let experiencia = 1000;

switch (true) {
    case experiencia < 1000:
        console.log("ferro");
        break;

    case experiencia < 2000:
        console.log("bronze");
        break;

    case experiencia < 5000:
        console.log("Prata");
        break;

    case experiencia < 7000:
        console.log("Ouro");
        break;

    case experiencia < 8000:
        console.log("platina");
        break;

    case experiencia < 9000:
        console.log("ascendente");
        break;

    case experiencia < 10000:
        console.log("imortal");
        break;

    case experiencia >= 10001:
        console.log("Radiante");
        break;
}

console.log("O Heroi de nome: " + nome + " está no nível: " + experiencia);
