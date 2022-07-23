function verificar() {

	let q1 = document.getElementById("p1").innerHTML;
	let q2 = document.getElementById("p2").innerHTML;
	let q3 = document.getElementById("p3").innerHTML;
	let q4 = document.getElementById("p4").innerHTML;
	let q5 = document.getElementById("p5").innerHTML;
	let q6 = document.getElementById("p6").innerHTML;
	let q7 = document.getElementById("p7").innerHTML;
	let q8 = document.getElementById("p8").innerHTML;
	let q9 = document.getElementById("p9").innerHTML;

	// horizontal

	//--jogador X
	if (q1 == "X" && q2 == "X" && q3 == "X") {
		placarJogadorAzul++
        atualizarPlacar()
	}
	if (q4 == "X" && q5 == "X" && q6 == "X") {
	placarJogadorAzul++
    atualizarPlacar()
	}
	if (q7 == "X" && q8 == "X" && q9 == "X") {
	placarJogadorAzul++
    atualizarPlacar()
	}

	//--jogador O

	if (q1 == "O" && q2 == "O" && q3 == "O") {
	placarJogadorVermelho++
    atualizarPlacar()
	}
	if (q4 == "O" && q5 == "O" && q6 == "O") {
	placarJogadorVermelho++
    atualizarPlacar()
	}
	if (q7 == "O" && q8 == "O" && q9 == "O") {
	placarJogadorVermelho++
    atualizarPlacar()
	}

	//vertical

	//--jogador X

	if (q1 == "X" && q4 == "X" && q7 == "X") {
	placarJogadorAzul++
    atualizarPlacar()
	}
	if (q2 == "X" && q5 == "X" && q8 == "X") {
	placarJogadorAzul++
    atualizarPlacar()
	}
	if (q3 == "X" && q6 == "X" && q9 == "X") {
	placarJogadorAzul++
    atualizarPlacar()
	}

	//--jogador O

	if (q1 == "O" && q4 == "O" && q7 == "O") {
	placarJogadorVermelho++
    atualizarPlacar()
	}
	if (q2 == "O" && q5 == "O" && q8 == "O") {
	placarJogadorVermelho++
    atualizarPlacar()
	}
	if (q3 == "O" && q6 == "O" && q9 == "O") {
	placarJogadorVermelho++
    atualizarPlacar()
	}
	// diagonal === /
	//--jogador X

	if (q1 == "X" && q5 == "X" && q9 == "X") {
	placarJogadorAzul++
    atualizarPlacar()
	}

	//--jogador O
	if (q1 == "O" && q5 == "O" && q9 == "O") {
	placarJogadorVermelho++
    atualizarPlacar()
	}

	// diagonal === \
	//--jogador X

	if (q3 == "X" && q5 == "X" && q7 == "X") {
	placarJogadorAzul++
    atualizarPlacar()
	}

	//--jogador O

	if (q3 == "O" && q5 == "O" && q7 == "O") {
	placarJogadorVermelho++
    atualizarPlacar()
	}
}