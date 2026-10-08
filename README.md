# 🤝 ABIA — Associação Brasileira pela Inclusão Autista

<p align="center">
  <b>Plataforma web moderna orientada para a inclusão social, acessibilidade e performance avançada.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/HTML5-E24329?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

---

## 📖 Sobre o Projeto

O projeto **ABIA** foi desenvolvido no âmbito académico com o propósito de conectar voluntários, doadores e parceiros a iniciativas que promovem a autonomia e a inclusão de pessoas autistas. A aplicação foi totalmente refatorada para adotar padrões de desenvolvimento modernos, unindo arquitetura de ponta, design system personalizado e rigorosas normas de acessibilidade.

---

## 🚀 Principais Tecnologias e Funcionalidades

*   **Single Page Application (SPA):** Navegação dinâmica implementada em Vanilla JavaScript utilizando *Hash Routing* e injeção de DOM via *Template Literals*, evitando recarregamentos de página.
*   **Design System CSS3:** Sistema estruturado no `:root` contemplando uma paleta com mais de 8 cores distintas, 5 patamares hierárquicos de tipografia e espaçamentos modulares baseados numa escala estrita.
*   **Layout Responsivo Híbrido:** Implementação robusta de **CSS Grid** (sistema de 12 colunas) e **Flexbox**, associados a 5 *breakpoints* adaptativos (`@media query`).
*   **Persistência de Dados & Validação:** Rotina de validação visual de formulários com feedback em tempo real e salvamento persistente no navegador através da API nativa `localStorage` (convertido via `JSON`).
*   **Acessibilidade (WCAG 2.1 - Nível AA):** Utilização de elementos HTML5 semânticos, atributos ARIA e contraste otimizado para leitores de ecrã.
*   **Integração Externa:** Acoplamento seguro da biblioteca **Chart.js** para visualização dinâmica de gráficos estatísticos de impacto social.

---

## 📂 Estrutura de Ficheiros

A organização do repositório reflete uma arquitetura limpa e modular:

```text
ong-html-css/
│
├── css/
│   └── styles.css
│
├── html/
│   ├── cadastro.html
│   ├── index.html
│   └── projetos.html
│
├── imagem/
│
├── js/
│   ├── formularios.js
│   ├── main.js
│   └── pages.js
│
├── .gitattributes
├── LICENSE
└── README.md

🌿 Estratégia de Versionamento (GitFlow)
O histórico de desenvolvimento deste projeto foi gerido seguindo o modelo padrão GitFlow, garantindo organização corporativa:

main: Versão estável pronta para ambiente de produção.

develop: Linha principal de desenvolvimento contínuo e integração.

feature/*: Ramificações isoladas para a construção de novas funcionalidades (ex: estruturação da SPA e roteamento).

hotfix/*: Ramificações dedicadas a correções urgentes.

💻 Como Executar o Projeto Localmente
Devido à utilização de ES6 Modules (import/export), a aplicação requer um servidor local para funcionar corretamente sem bloqueios de CORS:

Clone o repositório para a sua máquina.

Abra a pasta do projeto no VS Code.

Certifique-se de ter a extensão Live Server instalada.

Clique com o botão direito sobre o ficheiro principal e selecione "Open with Live Server".

👥 Autoria
Desenvolvido com dedicação por Yorrana S. Vieira.