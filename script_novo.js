const CORES_MODAL = ['roxo', 'azul', 'vermelho', 'laranja', 'verde'];

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 2;
        const tx = (Math.random() * 50 - 25);

        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        particlesContainer.appendChild(particle);
    }
}

document.addEventListener('mousemove', (e) => {
    const container = document.getElementById('container');
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / centerX;
    const moveY = (y - centerY) / centerY;

    const blob1 = document.getElementById('blob1');
    const blob2 = document.getElementById('blob2');

    if (blob1) blob1.style.transform = `translate(${moveX * 60}px, ${moveY * 60}px)`;
    if (blob2) blob2.style.transform = `translate(${moveX * -40}px, ${moveY * -40}px)`;

    container.style.setProperty('--mouse-x', `${x}px`);
    container.style.setProperty('--mouse-y', `${y}px`);
});

function applyModalColor(elementClicked) {
    const modalContent = document.querySelector('#info-modal .modal-content');
    const color = elementClicked.getAttribute('data-color');

    CORES_MODAL.forEach(c => modalContent.classList.remove(`cor-${c}`));

    if (color) {
        modalContent.classList.add(`cor-${color}`);
    }
}

function openModal(element, title, contentHtml) {
    applyModalColor(element);

    const modal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.innerText = title;
    modalBody.innerHTML = contentHtml;

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('info-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('info-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function openProjectsModal(element) {
    applyModalColor(element);

    const modal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.innerText = 'PROJETOS';

    modalBody.innerHTML = `
        <div style="text-align:center;">
            <button onclick="loadProject('trabalho/PRINCIPAL.html')" style="margin:10px;">
                Projeto 1
            </button>
            <button onclick="loadProject('site/index.html')" style="margin:10px;">
                Projeto 2
            </button>
            <button onclick="loadProject('projeto/index.html')" style="margin:10px;">
                Projeto 3
            </button>
        </div>
        <div id="project-frame-container" style="margin-top:20px;"></div>
    `;

    modal.style.display = 'flex';
}

function loadProject(projectPath) {
    const container = document.getElementById('project-frame-container');
    container.innerHTML = `
        <iframe src="${projectPath}" 
                style="width:100%; height:70vh; border:none; border-radius:10px;">
        </iframe>
    `;
}

function openModalSocial(element) {
    applyModalColor(element);

    const modal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.innerText = "REDES SOCIAIS";
    modalBody.innerHTML = `
        <div class="social-buttons">
            <button class="social-btn instagram" onclick="openSocial('https://www.instagram.com/luis_guga00')">
                <img src="imagem/instagram.png" alt="Instagram" class="icon"> Instagram
            </button>
            <button class="social-btn linkedin" onclick="openSocial('https://www.linkedin.com/in/luis-gustavo-brandão-748a73319')">
                <img src="imagem/linkedin.png" alt="LinkedIn" class="icon"> LinkedIn
            </button>
            <button class="social-btn facebook" onclick="openSocial('https://www.facebook.com/luis.gustavo.947753?locale=pt_BR')">
                <img src="imagem/facebook.png" alt="Facebook" class="icon"> Facebook
            </button>
        </div>
    `;

    modal.style.display = 'flex';
}

function openSocial(url) {
    window.open(url, '_blank');
}



createParticles();
