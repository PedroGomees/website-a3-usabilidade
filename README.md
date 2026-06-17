# BioAtlântica: Portal Educativo & Jogo 3D

Projeto desenvolvido para a disciplina de **Usabilidade e Design Web** (Semestre 2026/1, IBMR), sob orientação dos professores **Flávia Balbino** e **Rogério Pinheiro**.

O objetivo é criar um portal educativo que integra a apresentação de um jogo 3D imersivo desenvolvido em Unity 6 (exportado via WebGL), no qual o jogador assume o papel de um biólogo explorando a Mata Atlântica.

---

## O Problema

O ensino de ecologia e preservação ambiental é frequentemente limitado a métodos passivos, como livros e vídeos estáticos. Isso resulta em falta de engajamento dos alunos e dificuldade em visualizar a escala e a biodiversidade real de biomas como a Mata Atlântica.

---

## Nossa Solução

Um **portal web educativo** que apresenta um jogo 3D imersivo: o usuário assume o papel de um biólogo que explora uma floresta densa, atravessa rios e pontes, e cataloga espécies em tempo real, transformando a aprendizagem numa experiência ativa.


Portal Web  HTML5, CSS3, JavaScript 

---

## 👥 Integrantes do Grupo

* **Raffos** (R.A: 12623191)
* **Pablo Gomide** (R.A: 12625124922)
* **Pedro Gomes** (R.A: 1262328800)

---

## Identidade Visual

| Cor | Hex | Uso |
| :--- | :--- | :--- |
| Verde Floresta | `#1a4d2e` | Fundo do cabeçalho, rodapé, sobreposições |
| Verde Médio | `#2d8653` | Botões primários, ícones, destaques |
| Verde Claro | `#52b788` | Links ativos, bordas de destaque |
| Verde Pálido | `#d8f3dc` | Fundo de ícones, feedbacks positivos |
| Dourado Âmbar | `#e9a028` | Badge do hero, números de estatística |
| Fundo Claro | `#f4f9f4` | Fundo principal das seções |

---

## Mídia CC0 Utilizada

Todas as imagens e vídeos usados no portal são de uso livre:

- **Fotos**: [Pexels.com](https://www.pexels.com) (Licença gratuita sem atribuição obrigatória)
- **Vídeo**: Conteúdo educativo de domínio público (YouTube)

---

## Como Contribuir (Guia para o Grupo)

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/WebSiteA3.git
```

### 2. Nunca trabalhe direto na `main`

```bash
# Atualize sua main antes de começar
git checkout main
git pull

# Crie sua branch de trabalho
git checkout -b feature/nome-da-tarefa
```

### 3. Ciclo de commits

```bash
git status
git add nome-do-arquivo.html
git commit -m "feat: descrição clara do que foi feito"
git push origin feature/nome-da-tarefa
```

### 4. Abra um Pull Request no GitHub para revisão antes de mergear na `main`.

---

## Arquivos do Projeto

| Arquivo | Descrição |
| :--- | :--- |
| `index.html` | Portal principal (seletor de ecossistemas) |
| `bioatlantica.html` | Portal BioAtlântica (Mata Atlântica) |
| `style.css` | Estilos do portal BioAtlântica |
| `script.js` | Lógica e quiz da BioAtlântica |
| `oceanecho.html` | Portal OceanEcho (Oceanos) |
| `style_oceanecho.css` | Estilos do portal OceanEcho |
| `script_oceanecho.js` | Lógica e calculadora do OceanEcho |

---

## 🛠️ Ajustes de Responsividade & Animações (Notas do Pedro)

Dei um tapa geral na responsividade e adicionei umas animações bem fluidas para deixar o site com cara de premium. Aqui está um resumo do que fiz:

### Responsividade (Fim da rolagem lateral)
* **Conserto do bug do celular**: Algumas partes (como a galeria de imagens e os cartões de estatísticas) usavam tamanhos fixos mínimos em pixels. Em telas menores de 360px, isso esticava o site para o lado e quebrava tudo. Ajustei para usar a fórmula `minmax(min(100%, Xpx), 1fr)`, o que garante que a grade encolha dinamicamente de acordo com a tela do celular.
* **Espaço na calculadora (OceanEcho)**: Reduzi os paddings internos gigantes dos cartões e do formulário no mobile (foi para 20px no tablet e 15px em telas pequenas). Assim, os inputs e o botão de calcular têm espaço para respirar sem ficar tudo esmagado e cortado na direita.
* **Menu Drawer Limpo**: Refatorei o menu móvel. Antes ele era escondido jogando `right: -100%`, o que às vezes bugava o navegador do celular criando barras de rolagem invisíveis. Agora ele fica em `right: 0` e entra suave usando `transform: translateX(100%)` (aceleração por hardware).
* **Consistência**: Repliquei todos os ajustes de prevenção de overflow tanto no `style_oceanecho.css` quanto no `style.css` para que os dois ecossistemas (Mata Atlântica e Oceanos) fiquem 100% alinhados e sem nenhuma quebra visual.

### Animações CSS (Micro-interações fluidas)
Para dar aquela sensação de "site vivo" e premium, apliquei várias transições e animações no CSS puro:
* **Efeito Vidro / Glassmorphism**: O design do OceanEcho tem um efeito translúcido bem moderno no header e nos cards, com blur no fundo.
* **Efeito Hover nas Imagens**: Na galeria, ao passar o mouse por cima de uma imagem, ela dá um zoom leve e bem suave (`scale(1.08)`) com transição de curva Bézier, e a legenda sobe de baixo revelando a descrição da foto com opacidade gradativa.
* **Animações de Entrada**: Usei keyframes customizados como `@keyframes fadeIn` e `@keyframes surgir` para fazer com que os resultados da calculadora de plástico e o placar final do quiz apareçam subindo de forma suave na tela, em vez de simplesmente "brotarem" do nada.
* **Feedbacks de Movimento**: Adicionei pequenas transições de movimentação nos botões principais (`translateY(-3px)`) e nos cards informativos de ameaças (`translateX(5px)`) ao passar o mouse, dando um retorno visual super interativo.
