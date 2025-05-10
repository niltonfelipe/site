
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  this.reset();
});

document.querySelectorAll('.module-card').forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(1.02)';
    setTimeout(() => {
      card.style.transform = 'translateY(-5px)';
    }, 200);
  });
});
