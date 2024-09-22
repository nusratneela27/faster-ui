const faqItems = document.querySelectorAll('.faq-qus-ans');

function closeAllAnswers() {
  faqItems.forEach(item => {
    const answer = item.querySelector('.answer');
    const toggleIcon = item.querySelector('.toggle-icon');

    answer.classList.remove('show');
    toggleIcon.src = './assets/plus-icon.png';
    toggleIcon.classList.remove('rotate');
  });
}

faqItems.forEach(item => {
  const toggleIcon = item.querySelector('.toggle-icon');
  const answer = item.querySelector('.answer');

  toggleIcon.addEventListener('click', () => {

    closeAllAnswers();

    if (!answer.classList.contains('show')) {
      answer.classList.add('show');
      toggleIcon.src = './assets/minus-icon.png';
      toggleIcon.classList.add('rotate');
    }
  });
});
