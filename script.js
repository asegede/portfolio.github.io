function openModal(project) {
    const modal = document.getElementById("modal");
    
    // Sample data for projects (you can replace this with actual data)
    const projectsData = {
        project1: {
            title: "e-commerce website",
            description: "Aims to create a seamless and personalized shopping experience with intuitive navigation and tailored recommendations. We prioritize secure payments and prompt delivery to make online shopping convenient and enjoyable..",
            link: "https://asegede.github.io/e-commerce.github.io/"
        },
        
        // Add more projects as necessary
    };

    const selectedProject = projectsData[project];
    
    document.getElementById("modal-title").innerText = selectedProject.title;
    document.getElementById("modal-description").innerText = selectedProject.description;
    document.getElementById("modal-link").href = selectedProject.link;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    
    if (event.target === modal) {
        closeModal();
    }
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('.skill-progress').forEach(progress => {
     const targetWidth = progress.style.width; // Get the width from inline style
     progress.style.width = '0'; // Start from 0 width
    
     // Animate to target width after a short delay
     setTimeout(() => {
     progress.style.width = targetWidth; // Animate to the target width
     }, 100); // Delay to allow for a smooth transition
    });
    document.addEventListener("DOMContentLoaded", function() {
         const logo = document.getElementById('logo');
        
         logo.addEventListener('click', function() {
         // Toggle the 'scale' class on click
         logo.classList.toggle('scale');
        
         // Optional: Reset the scale after a delay (e.g., 1 second)
         setTimeout(() => {
         logo.classList.remove('scale');
         }, 1000); // Adjust the time as needed
     });
        });