document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano atual no rodapé
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Você pode adicionar mais funcionalidades JavaScript aqui no futuro,
    // como efeitos de rolagem, validações de formulário (se houver), etc.
});

const projects = document.querySelectorAll('.project');
let current = 0;

function showProject(index) {
  projects.forEach((proj, i) => {
    proj.classList.toggle('active', i === index);
  });
}

document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % projects.length;
  showProject(current);
});

document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + projects.length) % projects.length;
  showProject(current);
});
