document.addEventListener("DOMContentLoaded", function() {
    console.log("Portafolio empresarial cargado correctamente");

    // Efecto de Fade-in en secciones al hacer scroll
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function() {
        let scrollPos = window.scrollY + window.innerHeight * 0.75;
        sections.forEach(section => {
            if (section.offsetTop < scrollPos) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    });

    // Inicializar opacidad y animación
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 0.8s ease-in-out";
    });
});
