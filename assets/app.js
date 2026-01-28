// Função para mostrar uma seção
function showSection(sectionId) {
    // Remove 'active' de todos os links
    document.querySelectorAll('.menu-item').forEach(l => l.classList.remove('active'));
    
    // Ativa o link correspondente
    const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Remove 'show' de todas as seções
    document.querySelectorAll('.flowchart').forEach(section => {
        section.classList.remove('show');
    });
    
    // Adiciona 'show' na seção alvo
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('show');
    }
    
    // Salva a seção no localStorage
    localStorage.setItem('currentSection', sectionId);
}

// Ao carregar a página, restaura a última seção visitada
window.addEventListener('DOMContentLoaded', () => {
    const savedSection = localStorage.getItem('currentSection') || 'home';
    showSection(savedSection);
});

// Clique nos links do menu
document.querySelectorAll('.menu-item').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        showSection(targetId);
    });
});

// Hover nos comandos: copy to clipboard
document.querySelectorAll('.command').forEach(cmd => {
    cmd.addEventListener('click', () => {
        navigator.clipboard.writeText(cmd.textContent).then(() => {
            const original = cmd.textContent;
            cmd.textContent = 'Copiado!';
            setTimeout(() => cmd.textContent = original, 1500);
        });
    });
});