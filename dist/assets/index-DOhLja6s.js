(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),((e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports))((()=>{var e={"/":`
        <section class="hero">
            <div>
                <h2 class="hero-title">Transformando Realidades Através da Cidadania</h2>
                <p class="hero-text">Atuamos há mais de uma década unindo educação, segurança alimentar e voluntariado para gerar oportunidades reais a centenas de famílias.</p>
                <div class="btn-group">
                    <a href="#/cadastro" class="btn btn-primary">Quero Ser Voluntário</a>
                    <a href="#/projetos" class="btn btn-secondary">Conhecer Nossas Ações</a>
                </div>
            </div>
            <div class="hero-img-wrapper">
                <img src="../imagens/ong.avif" alt="Membros da comunidade unidos e sorrindo">
            </div>
        </section>

        <section class="metrics-section">
            <h2>Nosso Impacto em Números</h2>
            <div class="metrics-grid">
                <div>
                    <div class="metric-number">+1.200</div>
                    <p>Jovens Atendidos</p>
                </div>
                <div>
                    <div class="metric-number">18 Ton.</div>
                    <p>Alimentos Distribuídos</p>
                </div>
                <div>
                    <div class="metric-number">+400</div>
                    <p>Voluntários Ativos</p>
                </div>
            </div>
        </section>

        <section style="margin-top: 3rem;">
            <h2 style="font-size: 2rem; color: var(--primary-dark); margin-bottom: 1rem;">Nossos Pilares</h2>
            <div class="cards-grid">
                <article class="card-item">
                    <div class="icon-box">
                        <img src="../imagens/educacao.webp" alt="Ícone de chapéu de formatura e livro">
                    </div>
                    <h3 class="card-title">Educação e Futuro</h3>
                    <p class="card-text">Reforço escolar, incentivo à leitura e letramento digital no contra-turno escolar para crianças e adolescentes.</p>
                    <a href="#/projetos/educacao" class="btn btn-secondary" style="width: 100%;">Saiba mais</a>
                </article>

                <article class="card-item">
                    <div class="icon-box">
                        <img src="../imagens/comunidade.webp" alt="Ícone de suporte comunitário com mãos unidas">
                    </div>
                    <h3 class="card-title">Desenvolvimento Social</h3>
                    <p class="card-text">Suporte nutricional emergencial, feiras gratuitas e suporte psicológico para famílias cadastradas.</p>
                    <a href="#/projetos/comunidade" class="btn btn-secondary" style="width: 100%;">Saiba mais</a>
                </article>

                <article class="card-item">
                    <div class="icon-box">
                        <img src="../imagens/voluntariado.jpg" alt="Ícone de mãos coloridas simbolizando trabalho voluntário">
                    </div>
                    <h3 class="card-title">Rede de Voluntariado</h3>
                    <p class="card-text">Mutirões urbanos, infraestrutura e oficinas ministradas por profissionais parceiros.</p>
                    <a href="#/projetos/voluntariado" class="btn btn-secondary" style="width: 100%;">Saiba mais</a>
                </article>
            </div>
        </section>
    `,"/projetos":`
        <header style="margin-bottom: 2rem;">
            <h2 style="font-size: 2.2rem; color: var(--primary-dark);">Nossos Projetos Sociais</h2>
            <p style="color: var(--text-muted); font-size: 1.1rem;">Conheça detalhadamente cada uma das nossas frentes de atuação e como elas geram impacto contínuo.</p>
        </header>

        <div style="display: flex; flex-direction: column; gap: 2.5rem;">
            <section id="educacao" class="hero" style="margin-bottom: 0;">
                <div>
                    <h3 style="font-size: 1.8rem; color: var(--primary); margin-bottom: 0.8rem;">1. Projeto Educação para o Futuro</h3>
                    <p class="hero-text">Oferecemos acompanhamento pedagógico personalizado para garantir que crianças permaneçam na escola e desenvolvam raciocínio lógico e inclusão digital.</p>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.2rem; color: var(--text-muted);">
                        <li>Aulas diárias de reforço escolar.</li>
                        <li>Oficinas semanais de introdução à tecnologia.</li>
                        <li>Distribuição de material escolar e livros didáticos.</li>
                    </ul>
                    <a href="#/cadastro" class="btn btn-primary">Seja um Tutor Voluntário</a>
                </div>
                <div class="hero-img-wrapper">
                    <img src="../imagens/educacao.webp" alt="Materiais de educação e formação">
                </div>
            </section>

            <section id="comunidade" class="hero" style="margin-bottom: 0;">
                <div>
                    <h3 style="font-size: 1.8rem; color: var(--primary); margin-bottom: 0.8rem;">2. Ação Comunitária e Nutrição</h3>
                    <p class="hero-text">Focamos na erradicação da insegurança alimentar garantindo nutrição e dignidade para as famílias da nossa área de atendimento.</p>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.2rem; color: var(--text-muted);">
                        <li>Kits mensais de nutrição e produtos higiênicos.</li>
                        <li>Triagem assistencial humanizada.</li>
                        <li>Atendimento com assistentes sociais parceiros.</li>
                    </ul>
                    <a href="#/cadastro" class="btn btn-primary">Apoiar Arrecadação</a>
                </div>
                <div class="hero-img-wrapper">
                    <img src="../imagens/comunidade.webp" alt="Pessoas unidas em apoio comunitário">
                </div>
            </section>

            <section id="voluntariado" class="hero" style="margin-bottom: 0;">
                <div>
                    <h3 style="font-size: 1.8rem; color: var(--primary); margin-bottom: 0.8rem;">3. Mutirões e Voluntariado Técnico</h3>
                    <p class="hero-text">Canalizamos talentos de diversas áreas (Engenharia, Saúde, TI, Design) em ações focadas para melhorar a comunidade.</p>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.2rem; color: var(--text-muted);">
                        <li>Reformas e pintura de espaços comunitários.</li>
                        <li>Mentoria de carreira para jovens formandos.</li>
                        <li>Eventos Culturais e Esportivos nos finais de semana.</li>
                    </ul>
                    <a href="#/cadastro" class="btn btn-primary">Quero Fazer Parte</a>
                </div>
                <div class="hero-img-wrapper">
                    <img src="../imagens/voluntariado.jpg" alt="Equipe de voluntários">
                </div>
            </section>
        </div>
    `,"/transparencia":`
        <section class="form-container">
            <h2 style="font-size: 2rem; color: var(--primary-dark); margin-bottom: 1rem;">Transparência e Prestação de Contas</h2>
            <p style="color: var(--text-muted); margin-bottom: 2rem;">Nosso compromisso é com a total clareza na aplicação dos recursos doados pela sociedade e parceiros corporativos.</p>

            <div class="cards-grid">
                <div class="card-item">
                    <h3 class="card-title">Alocação de Recursos (2025/2026)</h3>
                    <ul style="padding-left: 1.2rem; color: var(--text-muted);">
                        <li><strong>78%:</strong> Execução de Projetos e Material Pedagógico</li>
                        <li><strong>14%:</strong> Logística de Mantimentos e Distribuição</li>
                        <li><strong>8%:</strong> Custos Administrativos e Manutenção</li>
                    </ul>
                </div>
                <div class="card-item">
                    <h3 class="card-title">Relatórios e Auditoria</h3>
                    <p class="card-text">Todos os balanços contábeis passam por auditoria anual independente e estão disponíveis para download.</p>
                    <button class="btn btn-secondary" onclick="alert('Relatório demonstrativo baixado com sucesso!')">Baixar PDF (2025)</button>
                </div>
            </div>
        </section>
    `,"/cadastro":`
        <section class="hero" style="grid-template-columns: 1.2fr 0.8fr; align-items: start;">
            <div class="form-container" style="box-shadow: none; border: none; padding: 0;">
                <h2 style="font-size: 2rem; color: var(--primary-dark); margin-bottom: 0.5rem;">Seja um Voluntário</h2>
                <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Preencha seus dados para conectar suas habilidades aos nossos projetos.</p>

                <form id="form-cadastro" novalidate>
                    <div class="form-group">
                        <label for="nome">Nome Completo</label>
                        <input type="text" id="nome" name="nome" class="form-control" placeholder="Digite seu nome completo" required minlength="3">
                        <span class="feedback-msg valid-feedback">✓ Nome aceito.</span>
                        <span class="feedback-msg invalid-feedback">✕ Informe ao menos 3 caracteres.</span>
                    </div>

                    <div class="form-group">
                        <label for="cpf">CPF</label>
                        <input type="text" id="cpf" name="cpf" class="form-control" placeholder="000.000.000-00" inputmode="numeric" maxlength="14" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" required>
                        <span class="feedback-msg valid-feedback">✓ Formato de CPF válido.</span>
                        <span class="feedback-msg invalid-feedback">✕ Informe no formato 000.000.000-00.</span>
                    </div>

                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" class="form-control" placeholder="seuemail@dominio.com" maxlength="100" pattern="[^\\s@]+@[^\\s@]+\\.[^\\s@]+" required>
                        <span class="feedback-msg valid-feedback">✓ E-mail válido.</span>
                        <span class="feedback-msg invalid-feedback">✕ Digite um e-mail válido (ex: usuario@dominio.com).</span>
                    </div>

                    <div class="form-group">
                        <label for="telefone">Telefone / WhatsApp</label>
                        <input type="tel" id="telefone" name="telefone" class="form-control" placeholder="(00)00000-0000" inputmode="numeric" maxlength="14" pattern="\\(\\d{2}\\)\\d{5}-\\d{4}" required>
                        <span class="feedback-msg valid-feedback">✓ Telefone válido.</span>
                        <span class="feedback-msg invalid-feedback">✕ Informe no formato (00)00000-0000.</span>
                    </div>

                    <div class="form-group">
                        <label for="area">Área de Atuação Desejada</label>
                        <select id="area" name="area" class="form-control" required>
                            <option value="">Selecione uma opção...</option>
                            <option value="educacao">Tutoria e Educação</option>
                            <option value="tecnologia">Inclusão Digital e TI</option>
                            <option value="comunidade">Ações Comunitárias e Logística</option>
                            <option value="eventos">Organização de Eventos</option>
                        </select>
                        <span class="feedback-msg invalid-feedback">✕ Escolha uma área de interesse.</span>
                    </div>

                    <button type="submit" class="btn btn-primary" style="width: 100%;">Finalizar Cadastro</button>
                </form>

                <div id="feedback-status" role="alert" style="margin-top: 1rem; font-weight: bold;"></div>
            </div>

            <div>
                <div class="card-item" style="background: var(--bg-alt);">
                    <h3 class="card-title">Por que se voluntariar?</h3>
                    <p class="card-text">O voluntariado gera impacto real na vida de famílias vulneráveis e permite desenvolver competências humanas e técnicas únicas.</p>
                </div>
                <div class="hero-img-wrapper" style="margin-top: 1.5rem;">
                    <img src="../imagens/voluntariado.jpg" alt="Pessoas voluntárias reunidas">
                </div>
            </div>
        </section>
    `,404:`
        <section style="text-align: center; padding: 4rem 1rem;">
            <h2 style="font-size: 2.5rem; color: var(--error);">404 — Página não encontrada</h2>
            <p style="color: var(--text-muted); margin: 1rem 0 2rem;">O endereço acessado não existe ou foi movido.</p>
            <a href="#/" class="btn btn-primary">Voltar ao Início</a>
        </section>
    `};function t(){let e=window.location.hash.replace(/^#/,``).split(`/`).filter(Boolean);return{pagina:`/`+(e[0]||``),ancora:e[1]||null}}function n(){let n=document.getElementById(`app`),{pagina:r,ancora:i}=t();n.innerHTML=e[r]||e[404];let a=document.getElementById(`menu-toggle`);if(a&&(a.checked=!1),i){let e=document.getElementById(i);e&&e.scrollIntoView({behavior:`smooth`})}else window.scrollTo(0,0)}window.addEventListener(`hashchange`,n),document.addEventListener(`DOMContentLoaded`,n);function r(e){return e.replace(/\D/g,``).slice(0,11).replace(/(\d{3})(\d)/,`$1.$2`).replace(/(\d{3})(\d)/,`$1.$2`).replace(/(\d{3})(\d{1,2})$/,`$1-$2`)}function i(e){return e.replace(/\D/g,``).slice(0,11).replace(/(\d{2})(\d)/,`($1)$2`).replace(/(\d{5})(\d{1,4})$/,`$1-$2`)}function a(e){let t=e.checkValidity();return e.classList.toggle(`is-valid`,t),e.classList.toggle(`is-invalid`,!t),t}document.addEventListener(`input`,e=>{let t=e.target;t.matches(`#form-cadastro .form-control`)&&(t.id===`cpf`&&(t.value=r(t.value)),t.id===`telefone`&&(t.value=i(t.value)),a(t))}),document.addEventListener(`change`,e=>{let t=e.target;t.matches(`#form-cadastro .form-control`)&&a(t)}),document.addEventListener(`submit`,e=>{let t=e.target.closest(`#form-cadastro`);if(!t)return;e.preventDefault();let n=!0;t.querySelectorAll(`.form-control`).forEach(e=>{a(e)||(n=!1)});let r=document.getElementById(`feedback-status`);n?(r.textContent=`✓ Cadastro realizado com sucesso! Em breve entraremos em contato.`,r.style.color=`var(--success)`,t.reset(),t.querySelectorAll(`.form-control`).forEach(e=>e.classList.remove(`is-valid`,`is-invalid`))):(r.textContent=`✕ Por favor, corrija os erros destacadas acima.`,r.style.color=`var(--error)`)})}))();