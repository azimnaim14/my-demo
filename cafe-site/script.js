// Smooth scroll when clicking nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Button click (for demo: just an alert)
document.querySelector('.btn-primary').addEventListener('click', () => {
  alert("Online ordering coming soon! ☕");
});
