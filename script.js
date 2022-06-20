var jogador = 1;
function vezJogador() {
	let vez = document.getElementById("jogador");
	document.getElementById("jogador").innerText =
		"Agora é a vez do jogador " + jogador;
        
	jogador++;

	if (jogador === 3) {
		jogador = 1;
	}
}

function marcar(lugar) {
	if (jogador === 1) {
		document.getElementById(lugar).innerHTML = "X";
	} else {
		document.getElementById(lugar).innerHTML = "O";
	}
}
addEventListener("click", verificar);

var v = 1;
function verificar() {
	var body = document.getElementById("body");
	var x = "X";
	var o = "O";
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
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}
	if (q4 == "X" && q5 == "X" && q6 == "X") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}
	if (q7 == "X" && q8 == "X" && q9 == "X") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}

	//--jogador O

	if (q1 == "O" && q2 == "O" && q3 == "O") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}
	if (q4 == "O" && q5 == "O" && q6 == "O") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}
	if (q7 == "O" && q8 == "O" && q9 == "O") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}

	//vertical

	//--jogador X

	if (q1 == "X" && q4 == "X" && q7 == "X") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}
	if (q2 == "X" && q5 == "X" && q8 == "X") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}
	if (q3 == "X" && q6 == "X" && q9 == "X") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}

	//--jogador O

	if (q1 == "O" && q4 == "O" && q7 == "O") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}
	if (q2 == "O" && q5 == "O" && q8 == "O") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}
	if (q3 == "O" && q6 == "O" && q9 == "O") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}
	// diagonal === /
	//--jogador X

	if (q1 == "X" && q5 == "X" && q9 == "X") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}

	//--jogador O
	if (q1 == "O" && q5 == "O" && q9 == "O") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}

	// diagonal === \
	//--jogador X

	if (q3 == "X" && q5 == "X" && q7 == "X") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}

	//--jogador O

	if (q3 == "O" && q5 == "O" && q7 == "O") {
		body.classList.add("active");

		document.getElementById("body").innerHTML =
			"o vencedor é o jogador" + jogador;
	}
}
