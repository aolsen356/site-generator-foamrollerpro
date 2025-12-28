// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const tableRows = document.querySelectorAll('#comparisonTable tbody tr');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    // Filter table rows
    tableRows.forEach(row => {
      if (filter === 'all') {
        row.style.display = '';
        setTimeout(() => {
          row.style.opacity = '1';
          row.style.transform = 'translateX(0)';
        }, 10);
      } else {
        const rowDensity = row.dataset.density;
        if (rowDensity === filter) {
          row.style.display = '';
          row.style.opacity = '0';
          row.style.transform = 'translateX(-20px)';
          setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateX(0)';
          }, 10);
        } else {
          row.style.opacity = '0';
          row.style.transform = 'translateX(-20px)';
          setTimeout(() => {
            row.style.display = 'none';
          }, 300);
        }
      }
    });
  });
});

// Add smooth transitions to table rows
tableRows.forEach(row => {
  row.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});

// Animate hero stats on scroll
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Visual grid animation
const visualCells = document.querySelectorAll('.visual-cell');
let currentIndex = 0;

function animateGrid() {
  visualCells.forEach(cell => cell.classList.remove('active'));

  const activeIndices = [
    Math.floor(Math.random() * visualCells.length),
    Math.floor(Math.random() * visualCells.length),
    Math.floor(Math.random() * visualCells.length),
    Math.floor(Math.random() * visualCells.length)
  ];

  activeIndices.forEach(index => {
    visualCells[index].classList.add('active');
  });
}

// Animate grid every 2 seconds
if (visualCells.length > 0) {
  setInterval(animateGrid, 2000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active state to navigation based on current page
const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage ||
      (currentPage === '/' && link.getAttribute('href') === '/') ||
      (currentPage.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
    link.classList.add('active');
  }
});

// Table row hover effect enhancement
tableRows.forEach(row => {
  row.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.01)';
  });

  row.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});