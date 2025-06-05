document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano atual no rodapé
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Você pode adicionar mais funcionalidades JavaScript aqui no futuro,
    // como efeitos de rolagem, validações de formulário (se houver), etc.
});