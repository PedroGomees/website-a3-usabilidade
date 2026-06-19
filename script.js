document.addEventListener("DOMContentLoaded", () => {

    /* menu do celular */
    const btnMenu  = document.getElementById("btn-menu");
    const navbar   = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");

    btnMenu.addEventListener("click", () => {
        navbar.classList.toggle("aberto");
        const estaAberto = navbar.classList.contains("aberto");
        btnMenu.innerHTML = estaAberto
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("aberto");
            btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    /* destaca o link ativo enquanto a página rola */
    const secoes = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {
        let atual = "";
        secoes.forEach(s => {
            if (window.scrollY >= s.offsetTop - 100) {
                atual = s.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("ativo");
            if (link.getAttribute("href") === `#${atual}`) {
                link.classList.add("ativo");
            }
        });
    });

    /* quiz sobre a Mata Atlântica, usado para medir o quanto o usuário aprendeu */
    const perguntas = [
        {
            pergunta: "Qual porcentagem da Mata Atlântica original ainda existe hoje?",
            opcoes: ["Cerca de 12%", "Cerca de 45%", "Cerca de 30%", "Cerca de 60%"],
            correta: 0,
            explicacao: "Restam apenas cerca de 12% da cobertura original da Mata Atlântica, tornando-a um dos biomas mais ameaçados e fragmentados do planeta."
        },
        {
            pergunta: "Qual animal é considerado símbolo da Mata Atlântica e está em risco crítico de extinção?",
            opcoes: ["Onça-pintada", "Mico-leão-dourado", "Tamanduá-bandeira", "Capivara"],
            correta: 1,
            explicacao: "O mico-leão-dourado (Leontopithecus rosalia) é endêmico da Mata Atlântica e um símbolo global de conservação. Hoje existem cerca de 3.200 indivíduos, graças a décadas de esforço de preservação."
        },
        {
            pergunta: "Quantas espécies de plantas são encontradas exclusivamente na Mata Atlântica?",
            opcoes: ["Mais de 500", "Cerca de 2.000", "Mais de 8.000", "Cerca de 4.000"],
            correta: 2,
            explicacao: "A Mata Atlântica abriga mais de 8.000 espécies de plantas endêmicas, encontradas apenas neste bioma. Isso a torna uma das regiões com maior biodiversidade vegetal do mundo."
        },
        {
            pergunta: "Qual é a principal causa histórica do desmatamento da Mata Atlântica?",
            opcoes: ["Incêndios naturais", "Espécies invasoras", "Expansão agrícola e urbana", "Secas prolongadas"],
            correta: 2,
            explicacao: "A expansão da agricultura, pecuária e urbanização é a principal causa do desmatamento. A Mata Atlântica cobre a faixa costeira do Brasil, onde se concentra 70% da população do país."
        },
        {
            pergunta: "Como a Mata Atlântica é reconhecida internacionalmente pela ciência?",
            opcoes: ["Reserva da Biosfera Global", "Hotspot de Biodiversidade", "Parque Natural Mundial", "Zona de Proteção Climática"],
            correta: 1,
            explicacao: "A Mata Atlântica é um dos 36 Hotspots de Biodiversidade do planeta, áreas com altíssima concentração de espécies endêmicas e sob grave ameaça humana. Essa classificação prioriza esforços globais de conservação."
        }
    ];

    let indicePergunta = 0;
    let pontuacao = 0;
    let respondeu = false;

    const elPergunta  = document.getElementById("quiz-pergunta");
    const elOpcoes    = document.getElementById("quiz-opcoes");
    const elFeedback  = document.getElementById("quiz-feedback");
    const elFeedbackTexto = document.getElementById("feedback-texto");
    const elBtnProxima   = document.getElementById("btn-proxima");
    const elProgresso    = document.getElementById("quiz-progresso");
    const elPlacar       = document.getElementById("quiz-placar");
    const elResultado    = document.getElementById("quiz-resultado");
    const elQuizArea     = document.getElementById("quiz-area");
    const elBtnReiniciar = document.getElementById("btn-reiniciar");

    function carregarPergunta() {
        respondeu = false;
        const atual = perguntas[indicePergunta];

        elProgresso.textContent = `Pergunta ${indicePergunta + 1} de ${perguntas.length}`;
        elPlacar.textContent    = `Pontuação: ${pontuacao}`;
        elPergunta.textContent  = atual.pergunta;
        elFeedback.className    = "quiz-feedback oculto";
        elBtnProxima.classList.add("oculto");

        elOpcoes.innerHTML = "";
        atual.opcoes.forEach((opcao, i) => {
            const btn = document.createElement("button");
            btn.className   = "opcao-btn";
            btn.textContent = opcao;
            btn.addEventListener("click", () => verificarResposta(i, btn));
            elOpcoes.appendChild(btn);
        });
    }

    function verificarResposta(indiceEscolhido, btnClicado) {
        if (respondeu) return;
        respondeu = true;

        const atual   = perguntas[indicePergunta];
        const botoes  = elOpcoes.querySelectorAll(".opcao-btn");
        const acertou = indiceEscolhido === atual.correta;

        // desabilita os botões depois de responder
        botoes.forEach((btn, i) => {
            btn.disabled = true;
            if (i === atual.correta) btn.classList.add("correta");
        });

        if (acertou) {
            pontuacao++;
            elPlacar.textContent = `Pontuação: ${pontuacao}`;
        } else {
            btnClicado.classList.add("errada");
        }

        // mostra a explicação da resposta
        elFeedbackTexto.textContent = atual.explicacao;
        elFeedback.className = acertou
            ? "quiz-feedback"
            : "quiz-feedback feedback-erro";

        // texto do botão de avançar
        const ehUltima = indicePergunta === perguntas.length - 1;
        elBtnProxima.textContent = ehUltima
            ? "Ver Resultado"
            : "Próxima Pergunta";
        elBtnProxima.innerHTML = ehUltima
            ? 'Ver Resultado <i class="fa-solid fa-flag-checkered"></i>'
            : 'Próxima Pergunta <i class="fa-solid fa-arrow-right"></i>';
        elBtnProxima.classList.remove("oculto");
    }

    elBtnProxima.addEventListener("click", () => {
        indicePergunta++;
        if (indicePergunta < perguntas.length) {
            carregarPergunta();
        } else {
            mostrarResultado();
        }
    });

    function mostrarResultado() {
        elQuizArea.classList.add("oculto");
        elResultado.classList.remove("oculto");

        document.getElementById("resultado-acertos").textContent = pontuacao;

        let titulo, msg;
        if (pontuacao === 5) {
            titulo = "Biólogo Expert!";
            msg    = "Incrível! Você domina os conhecimentos sobre a Mata Atlântica. Continue sendo um guardião desse bioma precioso.";
        } else if (pontuacao >= 3) {
            titulo = "Bom Conhecimento!";
            msg    = "Você tem uma base sólida sobre a Mata Atlântica. Explore o jogo para aprofundar ainda mais seu aprendizado!";
        } else {
            titulo = "Continue Aprendendo!";
            msg    = "A Mata Atlântica tem muito a te ensinar! Revise os conteúdos do portal e tente novamente, você vai melhorar.";
        }

        document.getElementById("resultado-titulo").textContent = titulo;
        document.getElementById("resultado-msg").textContent    = msg;
        elResultado.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    elBtnReiniciar.addEventListener("click", () => {
        indicePergunta = 0;
        pontuacao      = 0;
        elResultado.classList.add("oculto");
        elQuizArea.classList.remove("oculto");
        carregarPergunta();
    });

    // começa o quiz
    carregarPergunta();

});
