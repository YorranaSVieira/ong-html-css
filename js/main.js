import { pageInicio, pageProjetos, pageCadastro } from './pages.js';
import { iniciarFormulario } from './formularios.js';

const app = document.getElementById('app');

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