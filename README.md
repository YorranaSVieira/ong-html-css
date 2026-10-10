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
├── .gitignore
├── LICENSE
├── README.md
├── package.json
└── vite.config.js
```

---

## 🌿 Estratégia de Versionamento (GitFlow)

O histórico de desenvolvimento deste projeto foi gerido seguindo o modelo padrão GitFlow, garantindo organização corporativa:

- `main`: versão estável pronta para ambiente de produção.
- `develop`: linha principal de desenvolvimento contínuo e integração.
- `feature/*`: ramificações isoladas para a construção de novas funcionalidades (ex.: estruturação da SPA e roteamento, acessibilidade).
- `hotfix/*`: ramificações dedicadas a correções urgentes.

### Conventional Commits

As mensagens de commit seguem o padrão `tipo(escopo): descrição`:

| Tipo | Uso |
|---|---|
| `feat` | nova funcionalidade |
| `fix` | correção de erro |
| `docs` | alteração apenas de documentação |
| `refactor` | reestruturação sem mudar comportamento |

Exemplo: `feat(a11y): adiciona link de salto, foco visivel e reducao de movimento`

### Versionamento Semântico (SemVer)

As releases seguem `MAJOR.MINOR.PATCH`:

| Release | Tipo | Conteúdo |
|---|---|---|
| `v1.0.0` | MAJOR | SPA com Hash Routing, Design System CSS3 e formulário com `localStorage` |
| `v1.1.0` | MINOR | Melhorias de acessibilidade (link de salto, foco visível, redução de movimento) |
| `v1.1.1` | PATCH | Correção de formatação do README |

---

## 💻 Pré-requisitos e Execução Local

### Pré-requisitos

- **Visual Studio Code** com a extensão **Live Server**.
- Navegador atual (Chrome, Edge ou Firefox).
- Ligação à internet, pois a biblioteca **Chart.js** e as fontes são carregadas por CDN.
- **Node.js 20.19+ (ou 22.12+)** e npm, apenas para gerar o build de produção.

> Para desenvolver e visualizar, basta o Live Server (sem instalar nada). O **npm** só é necessário para o build de produção. Não há testes automatizados.

### Passo a passo

Devido à utilização de ES6 Modules (`import`/`export`), a aplicação requer um servidor local para funcionar corretamente sem bloqueios de CORS:

1. Clone o repositório: `git clone https://github.com/YorranaSVieira/ong-html-css.git`
2. Abra a pasta do projeto no VS Code.
3. Certifique-se de ter a extensão **Live Server** instalada.
4. Clique com o botão direito sobre `html/index.html` e selecione **"Open with Live Server"**.
5. A aplicação abre no navegador; a navegação usa Hash Routing (`#/`, `#/projetos`, `#/cadastro`).

---

### Build de produção (Vite)

O projeto usa o **Vite** como _bundler_ para gerar uma versão otimizada em `dist/`:

```bash
npm install      # instala o Vite e o minificador de HTML (uma única vez)
npm run build    # gera a pasta dist/ minificada
npm run preview  # (opcional) serve o dist/ para conferir o resultado
```

Configuração (`vite.config.js`):
- **Entradas:** `html/index.html`, `html/projetos.html` e `html/cadastro.html`; o Vite agrupa `main.js`, `pages.js` e `formularios.js` num único arquivo.
- **CSS e JS:** minificados pelo próprio Vite (remove espaços, quebras de linha e comentários).
- **HTML:** minificado pelo plugin `html-minifier-terser`, incluindo os `<script>` inline.
- **`base: './'`:** caminhos relativos, para o site funcionar em qualquer pasta.
- **Imagens:** um plugin copia `imagem/` para `dist/imagem/`, porque o `pages.js` referencia as fotos dentro de _template literals_, que o bundler não reescreve.

Resultado medido (bytes):

| Arquivo | Antes | Depois | Redução |
|---|---|---|---|
| CSS | 14.540 | 8.859 | 39,1% |
| JS (3 arquivos → 1) | 11.307 | 9.361 | 17,2% |
| HTML (3 páginas) | 13.630 | 8.978 | 34,1% |
| **Total** | **39.477** | **27.198** | **31,1%** |

---

## 👥 Autoria

Desenvolvido com dedicação por **Yorrana S. Vieira**.