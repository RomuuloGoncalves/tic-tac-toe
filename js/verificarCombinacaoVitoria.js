const combos = [
	["p1","p2","p3"],
	["p4","p5","p6"],
	["p7","p8","p9"],
	["p1","p4","p7"],
	["p2","p5","p8"],
	["p3","p6","p9"],
	["p1","p5","p9"],
	["p3","p5","p7"]
];

function verificar() {
	let vencedorSimbolo = null;
	for (let i = 0; i < combos.length; i++) {
		const [aId,bId,cId] = combos[i];
		const a = document.getElementById(aId).innerHTML.trim();
		const b = document.getElementById(bId).innerHTML.trim();
		const c = document.getElementById(cId).innerHTML.trim();
		if (a !== "" && a === b && b === c) {
			vencedorSimbolo = a;
			break;
		}
	}

	if (vencedorSimbolo === "X") {
		placarJogadorAzul++;
		atualizarPlacar();
		return;
	}

	if (vencedorSimbolo === "O") {
		placarJogadorVermelho++;
		atualizarPlacar();
		return;
	}

	// se não houver vencedor, verificar empate (todas as casas preenchidas)
	const ids = ["p1","p2","p3","p4","p5","p6","p7","p8","p9"];
	const todasPreenchidas = ids.every(id => document.getElementById(id).innerHTML.trim() !== "");
	if (todasPreenchidas) {
		mostrarVelha();
	}
}