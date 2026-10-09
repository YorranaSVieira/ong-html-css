import { pageInicio, pageProjetos, pageCadastro } from './pages.js';
import { iniciarFormulario } from './formularios.js';

const app = document.getElementById('app');

// ---------- Tema claro / escuro (persistido no localStorage) ----------
const CHAVE_TEMA = 'tema_abia';
const btnTema = document.getElementById('btn-tema');

function temaAtual() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function aplicarTema(tema) {
    document.documentElement.setAttribute('data-theme', tema);
    btnTema.setAttribute('aria-pressed', String(tema === 'dark'));
}

btnTema.addEventListener('click', () => {
    const novo = temaAtual() === 'dark' ? 'light' : 'dark';
    aplicarTema(novo);
    try {
        localStorage.setItem(CHAVE_TEMA, novo);
    } catch (error) {
        console.error('Não foi possível salvar o tema:', error);
    }
    // O gráfico usa cores de texto do tema: redesenha só na página inicial
    if (!window.location.hash || window.location.hash === '#/') {
        renderizarGrafico();
    }
});

aplicarTema(temaAtual()); // sincroniza o estado do botão com o tema já aplicado

// Dicionário de rotas seguras baseadas em Hash
const rotas = {
    '#/': pageInicio,
    '#/projetos': pageProjetos,
    '#/cadastro': pageCadastro
};

function navegarPara() {
    
    let rota = window.location.hash;
    if (!rota) {
        rota = '#/';
        window.location.hash = rota;
    }

   
    const template = rotas[rota] || rotas['#/'];
    app.innerHTML = template();


    if (rota === '#/cadastro') {
        iniciarFormulario();
    } else if (rota === '#/') {
        renderizarGrafico();
    }
}


window.addEventListener('hashchange', navegarPara);


window.addEventListener('DOMContentLoaded', navegarPara);

// Função da biblioteca externa encapsulada de forma segura
function renderizarGrafico() {
    const ctx = document.getElementById('impactoChart');
    if(ctx) {
        const existente = Chart.getChart(ctx);
        if (existente) existente.destroy();
        Chart.defaults.color = getComputedStyle(document.body).color;
        Chart.defaults.borderColor = 'rgba(128, 128, 128, 0.3)';
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2023', '2024', '2025', '2026'],
                datasets: [{
                    label: 'Pessoas Atendidas',
                    data: [850, 1200, 2400, 3200],
                    backgroundColor: '#0393C2'
                }]
            },
            options: { responsive: true }
        });
    }
}