/* ==========================================================================
   Controle de Menu Responsivo (Mobile Drawer)
   ========================================================================== */
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

    // Fechar menu mobile ao clicar em um link
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

    /* ==========================================================================
       Destaque do Link Ativo ao Rolar a Página
       ========================================================================== */
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

    /* ==========================================================================
       Lógica da Calculadora de Impacto nos Oceanos (JavaScript Interativo)
       ========================================================================== */
    const btnCalcular = document.getElementById("btn-calcular");
    const calcResults = document.getElementById("calc-results");
    const weightResult = document.getElementById("weight-result");
    const ratingBadge = document.getElementById("rating-badge");
    const tipsText = document.getElementById("tips-text");

    if (btnCalcular) {
        btnCalcular.addEventListener("click", () => {
            // Pegar valores dos inputs
            const copos = parseFloat(document.getElementById("input-copos").value) || 0;
            const sacolas = parseFloat(document.getElementById("input-sacolas").value) || 0;
            const garrafas = parseFloat(document.getElementById("input-garrafas").value) || 0;

            // Fatores de peso médio unitário estimado em Kg
            const pesoCopo = 0.015; // 15 gramas
            const pesoSacola = 0.008; // 8 gramas
            const pesoGarrafa = 0.025; // 25 gramas

            // Cálculo semanal e anual (52 semanas)
            const totalSemanal = (copos * pesoCopo) + (sacolas * pesoSacola) + (garrafas * pesoGarrafa);
            const totalAnual = totalSemanal * 52;

            // Exibir valores calculados
            weightResult.textContent = totalAnual.toFixed(2);

            // Determinar classificação e recomendações
            ratingBadge.className = "rating-badge"; // reset classes
            
            if (totalAnual < 5.0) {
                // Impacto Baixo (Verde)
                ratingBadge.classList.add("green");
                ratingBadge.textContent = "Impacto Baixo";
                tipsText.textContent = "Excelente! Seus hábitos ajudam a preservar os ecossistemas marinhos. Continue minimizando o consumo e descarte consciente.";
            } else if (totalAnual >= 5.0 && totalAnual <= 15.0) {
                // Impacto Médio (Amarelo)
                ratingBadge.classList.add("yellow");
                ratingBadge.textContent = "Impacto Moderado";
                tipsText.textContent = "Bom, mas pode melhorar. Tente substituir copos plásticos por copos térmicos e leve sacolas retornáveis ao supermercado.";
            } else {
                // Impacto Alto (Vermelho)
                ratingBadge.classList.add("red");
                ratingBadge.textContent = "Impacto Alto";
                tipsText.textContent = "Alerta! Seu descarte estimado é alto e prejudica a fauna marinha. Considere substituir plásticos descartáveis por alternativas ecológicas reutilizáveis imediatamente.";
            }

            // Exibir container de resultados com animação suave
            calcResults.classList.remove("hidden");
            
            // Rolagem suave até o resultado
            calcResults.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    }
});
