let universo = window.prompt("Digite o universo desejado: ").toLowerCase().trim();
let heroi = window.prompt("Digite o herói desejado: ").toLowerCase().trim();
let vezes = window.prompt("Digite quantas vezes você deseja ver o herói: ").toLowerCase().trim();
let x = 1;
let conteudo = '';

while (x <= vezes) {
    if (universo == "dc") {
        switch (heroi) {
            case "batman":
                conteudo += "<b>O herói é o " + heroi + "<div id='heroi-1'></div></b><hr>";
                break;
            case "flash":
                conteudo += "<b>O herói é o " + heroi + "<div id='heroi-2'></div></b><hr>";
                break;
            case "superman":
                conteudo += "<b>O herói é o " + heroi + "<div id='heroi-11'></div></b><hr>";
                break;
            case "mulher maravilha":
                conteudo += "<b>A heroína é a " + heroi + "<div id='heroi-13'></div></b><hr>";
                break;
            case "cyborg":
                conteudo += "<b>O herói é o " + heroi + "<div id='heroi-14'></div></b><hr>";
                break;
            case "ravena":
                conteudo += "<b>A heroína é a " + heroi + "<div id='heroi-17'></div></b><hr>";
                break;
            default:
                conteudo += "<b>O herói é inexistente nesse universo</b><hr>";
                break;
        }
    } else if (universo == "marvel") {
        switch (heroi) {
            case "spiderman":
                conteudo += "<b>O herói é o " + heroi + "<div id='heroi-3'></div></b><hr>";
                break;
            case "capitão américa":
                conteudo += "<b>O herói é o " + heroi + "<div id='heroi-12'></div></b><hr>";
                break;
            case "deadpool":
                conteudo += "<b>O herói é o " + heroi + "<div id='heroi-4'></div></b><hr>";
                break;
            case "hulk":
                conteudo += "<b>O herói é o " + heroi + "</b><div id='heroi-5'></div><hr>";
                break;
            case "thor":
                conteudo += "<b>O herói é o " + heroi + "</b><div id='heroi-6'></div><hr>";
                break;
            case "doctor strange":
                conteudo += "<b>O herói é o " + heroi + "</b><div id='heroi-7'></div><hr>";
                break;
            case "wolverine":
                conteudo += "<b>O herói é o " + heroi + "</b><div id='heroi-8'></div><hr>";
                break;
            case "moon knight":
                conteudo += "<b>O herói é o " + heroi + "</b><div id='heroi-9'></div><hr>";
                break;
            case "pantera negra":
                conteudo += "<b>O herói é o " + heroi + "</b><div id='heroi-10'></div><hr>";
                break;
            case "ironman":
                conteudo += "<b>O herói é o " + heroi + "</b><div id='heroi-15'></div><hr>";
                break;
            case "feiticeira escarlate":
                conteudo += "<b>A heroína é a " + heroi + "<div id='heroi-16'></div></b><hr>";
                break;
            default:
                conteudo += "<b>O herói é inexistente nesse universo</b><hr>";
                break;
        }
    } else {
        conteudo += "Universo inexistente<hr>";
    }
    x++;
}
document.getElementById("div").innerHTML = conteudo;