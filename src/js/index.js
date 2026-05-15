
// Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  preloader.style.opacity = "0";
  preloader.style.transition = "opacity 0.5s ease";
  // 
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});


// Navbar scroll effect


const buttons = document.querySelectorAll('.faq-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');

    document.querySelectorAll('.faq-content').forEach(el => {
      if (el !== content) el.style.maxHeight = null;
    });

    document.querySelectorAll('.faq-icon').forEach(i => {
      if (i !== icon) i.classList.remove('rotate-45');
    });

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.classList.remove('rotate-45');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add('rotate-45');
    }
  });
});





document.querySelectorAll('[data-tabs-target]').forEach(tab => {
  tab.addEventListener('click', () => {

    setTimeout(() => {

      const targetId = tab.getAttribute('data-tabs-target');
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        const offset = 120; // adjust for navbar height
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }

    }, 120);

  });
});