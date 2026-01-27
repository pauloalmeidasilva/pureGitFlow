document.querySelectorAll('.menu-item').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Impede scroll da âncora
                
                const targetId = link.getAttribute('href').substring(1); // Remove #
                
                // Remove 'active' de todos os links
                document.querySelectorAll('.menu-item').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Remove 'show' de todas as seções
                document.querySelectorAll('.flowchart').forEach(section => {
                    section.classList.remove('show');
                });
                
                // Adiciona 'show' na seção alvo
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('show');
                }
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