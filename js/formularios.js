export function iniciarFormulario() {
    const form = document.getElementById('formCadastro');
    if (!form) return;

    const msgErro = document.getElementById('msg-erro');

    // Recupera dados com segurança (Try/Catch evita que a aplicação quebre)
    const dadosSalvos = localStorage.getItem('usuario_abia');
    if (dadosSalvos) {
        try {
            const dadosParseados = JSON.parse(dadosSalvos);
            Object.keys(dadosParseados).forEach(key => {
                const campos = form.querySelectorAll(`[name="${key}"]`);
                if (campos.length > 0) {
                    if (campos[0].type === 'radio') {
                        const radioCorreto = Array.from(campos).find(r => r.value === dadosParseados[key]);
                        if (radioCorreto) radioCorreto.checked = true;
                    } else {
                        campos[0].value = dadosParseados[key];
                    }
                }
            });
        } catch (error) {
            console.error("Erro ao ler os dados do localStorage:", error);
            localStorage.removeItem('usuario_abia'); // Limpa dados corrompidos
        }
    }

    // Validação reativa no evento 'input'
    form.addEventListener('input', (event) => {
        const campo = event.target;
        if (!campo.checkValidity()) {
            campo.style.borderColor = 'var(--color-danger)';
        } else {
            campo.style.borderColor = 'green';
            msgErro.style.display = 'none';
        }
    });

    // Intercetação do formulário com preventDefault()
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            msgErro.style.display = 'block';
            return;
        }

        const formData = new FormData(form);
        const dadosUsuario = Object.fromEntries(formData.entries());

        localStorage.setItem('usuario_abia', JSON.stringify(dadosUsuario));
        
        alert('Cadastro salvo com sucesso de forma persistente!');
        form.reset();
        
        Array.from(form.elements).forEach(el => {
            if(el.style) el.style.borderColor = '';
        });
    });
}