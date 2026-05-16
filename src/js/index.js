
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


const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("top-0");
    navbar.classList.remove("top-5");


  } else {
    navbar.classList.remove("top-0");
    navbar.classList.add("top-5");

  }
});


const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 40,
  speed: 2500, // smooth slow movement
  autoplay: {
    delay: 0, // no pause
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 5 }
  }
});


const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

// Open Menu
openMenu.addEventListener("click", () => {

  sideMenu.classList.remove("translate-x-full");

  overlay.classList.remove("hidden");

  setTimeout(() => {
    overlay.classList.remove("opacity-0");
  }, 10);

});

// Close Function
function closeSidebar() {

  sideMenu.classList.add("translate-x-full");

  overlay.classList.add("opacity-0");

  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 300);

}

// Close Events
closeMenu.addEventListener("click", closeSidebar);

overlay.addEventListener("click", closeSidebar);

// Products Toggle
const productToggle = document.getElementById("productToggle");
const productMenu = document.getElementById("productMenu");
const productArrow = document.getElementById("productArrow");

productToggle.addEventListener("click", () => {

  productMenu.classList.toggle("hidden");

  productArrow.classList.toggle("rotate-180");

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



let current = 0;
const total = 8;

function changeStep(dir) {
  const next = current + dir;
  if (next < 0 || next >= total) return;
  goToStep(next);
}

function goToStep(index) {
  document.getElementById('content-' + current).classList.add('hidden');

  const prevDot = document.querySelectorAll('.stepper-dot')[current];
  const prevIcon = prevDot.querySelector('i');
  const prevLabel = document.querySelectorAll('.stepper-label')[current];
  prevDot.classList.remove('bg-[#2d2a26]', 'border-[#2d2a26]');
  prevDot.classList.add('border-gray-200', 'bg-white');
  prevIcon.classList.remove('text-white');
  prevIcon.classList.add('text-gray-300');
  if (prevLabel) { prevLabel.classList.remove('text-[#2d2a26]', 'font-semibold'); prevLabel.classList.add('text-gray-400'); }

  current = index;

  document.getElementById('content-' + current).classList.remove('hidden');

  const newDot = document.querySelectorAll('.stepper-dot')[current];
  const newIcon = newDot.querySelector('i');
  const newLabel = document.querySelectorAll('.stepper-label')[current];
  newDot.classList.add('bg-[#2d2a26]', 'border-[#2d2a26]');
  newDot.classList.remove('border-gray-200', 'bg-white');
  newIcon.classList.add('text-white');
  newIcon.classList.remove('text-gray-300');
  if (newLabel) { newLabel.classList.add('text-[#2d2a26]', 'font-semibold'); newLabel.classList.remove('text-gray-400'); }

  const linePercent = (current / (total - 1)) * 100;
  document.getElementById('active-line').style.width = linePercent + '%';

  document.getElementById('step-counter').textContent = 'Step ' + (current + 1) + ' of ' + total;

  document.getElementById('btn-prev').disabled = current === 0;
  document.getElementById('btn-prev').style.opacity = current === 0 ? '0.3' : '1';

  if (current === total - 1) {
    document.getElementById('btn-next').innerHTML = '<i class="fa-solid fa-check text-xs"></i> Done';
    document.getElementById('btn-next').disabled = true;
    document.getElementById('btn-next').style.opacity = '0.5';
  } else {
    document.getElementById('btn-next').innerHTML = 'Next <i class="fa-solid fa-arrow-right text-xs"></i>';
    document.getElementById('btn-next').disabled = false;
    document.getElementById('btn-next').style.opacity = '1';
  }
}

document.querySelectorAll('.stepper-item').forEach(item => {
  item.addEventListener('click', () => goToStep(parseInt(item.dataset.step)));
});

goToStep(0);
