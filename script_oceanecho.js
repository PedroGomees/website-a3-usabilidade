/* controle do menu no celular */
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle-btn");
    const navbar = document.getElementById("navbar-nav");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("open");
            const isOpen = navbar.classList.contains("open");
            menuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        });
    }

    // fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbar && navbar.classList.contains("open")) {
                navbar.classList.remove("open");
                if (menuToggle) {
                    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
                }
            }
        });
    });

    /* destaca o link ativo enquanto a página rola */
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 120) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    /* calculadora de impacto nos oceanos */
    const btnCalcular = document.getElementById("btn-calcular");
    const calcResults = document.getElementById("calc-results");
    const weightResult = document.getElementById("weight-result");
    const ratingBadge = document.getElementById("rating-badge");
    const tipsText = document.getElementById("tips-text");

    if (btnCalcular) {
        btnCalcular.addEventListener("click", () => {
            // pega o que a pessoa preencheu
            const copos = parseFloat(document.getElementById("input-copos").value) || 0;
            const sacolas = parseFloat(document.getElementById("input-sacolas").value) || 0;
            const garrafas = parseFloat(document.getElementById("input-garrafas").value) || 0;

            // peso médio estimado de cada item, em kg
            const pesoCopo = 0.015; // peso de um copo
            const pesoSacola = 0.008; // peso de uma sacola
            const pesoGarrafa = 0.025; // peso de uma garrafa

            // soma da semana e estimativa para o ano
            const totalSemanal = (copos * pesoCopo) + (sacolas * pesoSacola) + (garrafas * pesoGarrafa);
            const totalAnual = totalSemanal * 52;

            // mostra o resultado calculado
            weightResult.textContent = totalAnual.toFixed(2);

            // decide a classificação e a dica que vai aparecer
            ratingBadge.className = "rating-badge"; // limpa as classes antigas

            if (totalAnual < 5.0) {
                // impacto baixo, fica verde
                ratingBadge.classList.add("green");
                ratingBadge.textContent = "Impacto Baixo";
                tipsText.textContent = "Excelente! Seus hábitos ajudam a preservar os ecossistemas marinhos. Continue minimizando o consumo e descarte consciente.";
            } else if (totalAnual >= 5.0 && totalAnual <= 15.0) {
                // impacto médio, fica amarelo
                ratingBadge.classList.add("yellow");
                ratingBadge.textContent = "Impacto Moderado";
                tipsText.textContent = "Bom, mas pode melhorar. Tente substituir copos plásticos por copos térmicos e leve sacolas retornáveis ao supermercado.";
            } else {
                // impacto alto, fica vermelho
                ratingBadge.classList.add("red");
                ratingBadge.textContent = "Impacto Alto";
                tipsText.textContent = "Alerta! Seu descarte estimado é alto e prejudica a fauna marinha. Considere substituir plásticos descartáveis por alternativas ecológicas reutilizáveis imediatamente.";
            }

            // mostra o resultado na tela
            calcResults.classList.remove("hidden");

            // rola a página até o resultado
            calcResults.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    }
});
