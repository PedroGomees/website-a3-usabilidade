# BioAtlântica: Portal Educativo & Jogo 3D

Projeto desenvolvido para a disciplina de **Usabilidade e Design Web** (Semestre 2026/1, IBMR), sob orientação dos professores **Flávia Balbino** e **Rogério Pinheiro**.

O objetivo é criar um portal educativo que integra a apresentação de um jogo 3D imersivo desenvolvido em Unity 6 (exportado via WebGL), no qual o jogador assume o papel de um biólogo explorando a Mata Atlântica.

---

## O Problema

O ensino de ecologia e preservação ambiental é frequentemente limitado a métodos passivos, como livros e vídeos estáticos. Isso resulta em falta de engajamento dos alunos e dificuldade em visualizar a escala e a biodiversidade real de biomas como a Mata Atlântica.

---

## Nossa Solução

Um **portal web educativo** que apresenta um jogo 3D imersivo: o usuário assume o papel de um biólogo que explora uma floresta densa, atravessa rios e pontes, e cataloga espécies em tempo real, transformando a aprendizagem numa experiência ativa.

| Plataforma | Tecnologia |
| :--- | :--- |
| Jogo 3D | Unity 6 (exportação WebGL) |
| Portal Web | HTML5, CSS3, JavaScript |

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

## Estrutura Semântica do Site

Seguindo boas práticas de HTML5:

- `<header>`: Cabeçalho com logo e menu de navegação
- `<nav>`: Menu com rolagem suave para cada seção
- `<main>`: Conteúdo central do portal
- `<section>`: Seções temáticas (Hero, Stats, Problema, O Jogo, Vídeo, Quiz, Galeria)
- `<article>`: Cards individuais dos problemas identificados
- `<aside>`: (versão original) Painel de curiosidades
- `<figure>` / `<figcaption>`: Galeria de imagens com legendas
- `<footer>`: Rodapé com dados do projeto e créditos

---

## Seções do Portal

| Seção | Descrição |
| :--- | :--- |
| **Hero** | Landing page do jogo com chamada para ação e badge de plataforma WebGL |
| **Estatísticas** | Dados de impacto sobre a Mata Atlântica (12% restante, +70% espécies ameaçadas, 8.000+ endêmicas) |
| **O Problema** | 3 cards explicando as falhas do ensino tradicional de ecologia |
| **O Jogo** | Conceito do jogo com screenshot fictício e lista de funcionalidades |
| **Vídeo** | Embed de documentário CC0 sobre a Mata Atlântica |
| **Quiz** | Quiz interativo com 5 perguntas sobre fauna e flora como indicador de retenção de conhecimento |
| **Galeria** | Fotos CC0 de espécies e paisagens da Mata Atlântica |

---

## Indicadores de Resultado

- **Retenção de conhecimento** medida via quiz integrado ao portal
- **Tempo de exploração** dentro do jogo 3D
- **Número de amostras biológicas** coletadas pelos jogadores

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
