const abas = document.querySelectorAll(".aba");
let viewCount = localStorage.getItem('viewCount') || 0;


viewCount++;
localStorage.setItem('viewCount', viewCount);


const counterElement = document.createElement('p');
counterElement.textContent = `Esta página foi visualizada ${viewCount} vezes`;
counterElement.className = 'contador-visualizacoes';
rodape.appendChild(counterElement);
});

abas.forEach(aba => {
    aba.addEventListener("click", function() {
        if(aba.classList.contains("selecionado")){
            return;
        }
        selecionarAba(aba);
        mostrarInformacoesDaAba(aba);
    });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionado");
}
