// slider

const images = document.querySelectorAll('.slider img');
const prevButton = document.getElementById('next-slide');
const nextButton = document.getElementById('prev-slide');

let currentIndex = 1;

function updateSlider() {

  const translateValue = (currentIndex - 1) * 100;
  images.forEach((img) => {
    img.style.transform = `translateX(${translateValue}%)`;
  });
}


prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});


nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});


updateSlider();

// FAQ

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
