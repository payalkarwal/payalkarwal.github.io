let currentSlide = 0;
const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".manual-btn");
const totalSlides = slides.children.length;

function showSlide(index) {
  currentSlide = index;
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function goToSlide(index) {
  showSlide(index);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // Change every 4 seconds
showSlide(0); // Initialize on page load






document.getElementById('searchBtn').addEventListener('click', function () {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    // Replace below with actual search page logic or filter
    window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
  } else {
    alert('Please enter a search term');
  }
});











