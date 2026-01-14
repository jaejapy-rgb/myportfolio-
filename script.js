// Section navigation
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      navLinks.forEach(lnk => lnk.classList.remove('active'));
      link.classList.add('active');
      const target = link.getAttribute('href').slice(1);
      sections.forEach(sec => {
        sec.classList.remove('active');
        if (sec.id === target) sec.classList.add('active');
      });
    });
  });

  // Contact form submission
  const form = document.getElementById('contactForm');
  const resultDiv = document.getElementById('contact-result');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      resultDiv.textContent = "Thank you for reaching out! Your message is sprinkled with sparkle and sent!";
      form.reset();
      setTimeout(() => { resultDiv.textContent = ""; }, 4000);
    });
  }
});