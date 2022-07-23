const input = document.querySelectorAll("input");
const span = document.querySelectorAll("span");
const camposSelecionados = document.querySelectorAll(".p")
const addJogadores = document.querySelector(".addJogadores")
const jogo = document.querySelector(".jogo")
const divVencedor = document.querySelector(".vencedor")
const vazio = "Campo vazio";

var placarJogadorVermelho = 0
var placarJogadorAzul = 0
var verificacaoVazio = 0
var jogador = 0
var arrayJogador = []


function iniciar(){
    
    if(verificarVazio() == 2){
        let jogador1 = document.querySelector(".jogador1").value
        let jogador2 = document.querySelector(".jogador2").value
        jogador1.trim()
        jogador2.trim()
        arrayJogador[0] = jogador1
        arrayJogador[1] = jogador2
        toggleInicar()
        atualizarPlacar()
        vezJogador()
    }
}

function toggleInicar(){
    addJogadores.classList.toggle("apagar")
    
    jogo.classList.toggle("aparecer")
}


function vezJogador() {
    document.getElementById("jogador").innerHTML = "Faça sua jogada " + arrayJogador[jogador];

 
	jogador++;

	if (jogador === 2) {
		jogador = 0;
	}
}

function marcar(lugar) {
    let lugarMarcar = document.getElementById(lugar).innerHTML
    if(lugarMarcar.trim()==""){
        if (jogador === 1) {
            document.getElementById(lugar).innerHTML = "X";
            document.getElementById(lugar).style.color = "blue"
            vezJogador()
            verificar()
        } else {
            document.getElementById(lugar).innerHTML = "O";
            document.getElementById(lugar).style.color = "red"
            verificar()
            vezJogador()

        }
    }
}

function verificarVazio() {
    verificacaoVazio = 0
    for (let i = 0; i < 2; i++) {
        if (input[i].value.trim() === "") {
            input[i].classList.add("erro");
            span[i].innerHTML = vazio

        } else {
            verificacaoVazio++;
            input[i].classList.remove("erro");
            span[i].innerHTML = ""
        }
    }
    return verificacaoVazio;
}

function limparSelecionados(){
    for(let i = 0; i < 9; i++){
        camposSelecionados[i].innerHTML = ""
    }
}

function atualizarPlacar(){
    document.querySelector(".placarVermelho").innerHTML = placarJogadorVermelho
    document.querySelector(".placarAzul").innerHTML = placarJogadorAzul
    
    limparSelecionados()

    if(placarJogadorAzul == 3){
        vencedor("azul")
    }else if(placarJogadorVermelho == 3){
        vencedor("vermelho")
    }

}

function vencedor(vencedor){
    divVencedor.classList.remove("apagado")
    jogo.classList.toggle("aparecer")
    
    if(vencedor == "vemelho"){
        divVencedor.innerHTML = `Você é o vencedor: ${arrayJogador[1]}!!!`
        
    }else{
        divVencedor.innerHTML = `Você é o vencedor: ${arrayJogador[0]}!!!`

    }
}

function reset(){
    limparSelecionados()
    placarJogadorAzul = 0
    placarJogadorVermelho = 0
}