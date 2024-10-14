let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    document.querySelector('.carousel-slide').style.transform = `translateX(${-currentIndex * 100}vw)`;
}

setInterval(showNextSlide, 3000); // Cambia cada 3 segundos

function toggleSection(sectionId) {
    // Obtener todas las secciones
    var sections = document.querySelectorAll('.content');

    // Ocultar todas las secciones
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Mostrar la sección que se ha seleccionado
    var section = document.getElementById(sectionId);
    section.style.display = 'block';
}
