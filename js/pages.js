export const pageInicio = () => `
    <div class="col-12">
        <h1 class="text-center">Transformando vidas com inclusão e propósito</h1>

        <section aria-labelledby="quem-somos">
            <h2 id="quem-somos">Quem somos</h2>
            <p>A Associação Brasileira pela Inclusão Autista (ABIA) é uma organização sem fins lucrativos dedicada a ampliar oportunidades reais de inclusão para pessoas autistas em todas as fases da vida. Conectamos voluntários, doadores e parceiros a projetos que promovem autonomia, acesso à educação, saúde, trabalho e participação social para a comunidade autista e suas famílias.</p>
            
           
            <img class="quemsomos" src="../imagem/quemsomos.jpg" alt="Foto das mãos segurando o quebra-cabeça">
        </section>

        <section aria-labelledby="nosso-impacto">
            <h2 id="nosso-impacto">Nosso impacto</h2>
            <p>Desde 2019, a ABIA já transformou a vida de mais de 3.200 pessoas autistas e suas famílias. Veja o crescimento dos nossos atendimentos:</p>
            <canvas id="impactoChart" width="400" height="150" style="margin-top: 20px;"></canvas>
        </section>
    </div>

    <!-- Alterado para col-12 para empurrar a caixa para a linha de baixo -->
    <aside class="col-12" aria-label="Chamada para ação">
        <section class="faca-parte">
            <h2>Faça parte dessa mudança</h2>
        </section>
        <div class="seja-voluntario">
            <p>Seja voluntário ou doador e ajude a levar nossos projetos ainda mais longe.</p>
        </div>
        <a class="botao nav-link" href="#/cadastro">Quero me cadastrar</a>
    </aside>
`;

export const pageProjetos = () => `
    <div class="col-12 text-center">
        <div class="titulo-com-imagem">
            <img src="../imagem/imgprojetos.png" alt="Cordão Quebra Cabeça" class="imagem-projetos">
            <h1>Nossos Projetos</h1>
        </div>
    </div>

    <div class="subtexto col-12 text-center">
        <p>Conheça as iniciativas que você pode apoiar como voluntário(a) ou doador(a).</p>
    </div>

    <article class="projeto col-6">
        <div>
            <h2>Educação Inclusiva</h2>
            <p>Formamos professores e escolas para receber e ensinar crianças autistas com metodologias adaptadas, promovendo aprendizado respeitoso às diferentes formas de processar o mundo.</p>
        </div>
        <img src="../imagem/educacao.jpg" alt="Professora ensinando crianças">
    </article>

    <article class="projeto col-6">
        <div>
            <h2>Autonomia para o Trabalho</h2>
            <p>Preparamos jovens e adultos autistas para o mercado de trabalho, com capacitação profissional, apoio na busca por vagas e sensibilização de empresas parceiras sobre contratação inclusiva.</p>
        </div>
        <img src="../imagem/autonomia.jpg" alt="Jovens no computador">
    </article>

    <article class="projeto col-6">
        <div>
            <h2>Comunicação e Tecnologia Assistiva</h2>
            <p>Distribuímos ferramentas de comunicação alternativa e aplicativos acessíveis que ajudam pessoas autistas não-verbais ou com dificuldades de comunicação a se expressarem com mais autonomia.</p>
        </div>
        <img src="../imagem/comunicacao.jpg" alt="Crianças com tablets">
    </article>

    <article class="projeto col-6">
        <div>
            <h2>Saúde Acessível</h2>
            <p>Conectamos pessoas autistas a atendimento especializado, psicólogos, terapeutas ocupacionais e outros profissionais, muitas vezes gratuito ou custo reduzido.</p>
        </div>
        <img src="../imagem/saude.jpg" alt="Profissional da saúde atendendo">
    </article>

    <div class="projeto-destaque col-12 text-center">
        <p><b>Cada projeto conta com voluntários dedicados e o apoio de doadores que acreditam em um Brasil mais inclusivo. Escolha uma causa e faça parte dessa transformação.</b></p>
    </div>
`;

export const pageCadastro = () => `
    <div class="col-2"></div>
    <section class="col-8">
        <h1 class="text-center">Cadastre-se como voluntário(a) ou doador(a)</h1>
        <p>Preencha os dados abaixo. Os campos marcados com <span class="asterisco">*</span> são obrigatórios.</p>

        <form id="formCadastro" novalidate>
            <fieldset>
                <legend>Dados pessoais</legend>
                <label for="nome">Nome completo <span class="asterisco">*</span></label>
                <input type="text" id="nome" name="nome" required placeholder="Digite seu nome completo">

                <label for="email">E-mail <span class="asterisco">*</span></label>
                <input type="email" id="email" name="email" required placeholder="seuemail@exemplo.com">

                <label for="nascimento">Data de nascimento <span class="asterisco">*</span></label>
                <input type="date" id="nascimento" name="nascimento" required>
            </fieldset>

            <fieldset>
                <legend>Documento e contato</legend>
                <label for="cpf">CPF <span class="asterisco">*</span></label>
                <input type="text" id="cpf" name="cpf" required pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}" placeholder="000.000.000-00">

                <label for="telefone">Telefone / WhatsApp <span class="asterisco">*</span></label>
                <input type="tel" id="telefone" name="telefone" required pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}" placeholder="(00) 00000-0000">
                
                <label for="bairro">Bairro <span class="asterisco">*</span></label>
                <input type="text" id="bairro" name="bairro" required placeholder="Nome do bairro">
            </fieldset>

            <fieldset>
                <legend>Como você quer ajudar?</legend>
                <div class="radio-group">
                    <label><input type="radio" name="participacao" value="voluntario" required> Quero ser voluntário(a)</label>
                    <label><input type="radio" name="participacao" value="doador"> Quero ser doador(a)</label>
                    <label><input type="radio" name="participacao" value="ambos"> Ambos</label>
                </div>
            </fieldset>

            <button type="submit" style="margin-top: 20px;">Enviar cadastro</button>
        </form>
        <p id="msg-erro" style="color: var(--color-danger); display: none; margin-top: 10px; font-weight: bold;">Por favor, corrija os campos assinalados!</p>
    </section>
`;