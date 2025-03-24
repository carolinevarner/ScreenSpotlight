// Function to toggle the color of the navigation links using arrow functions
const toggleNavColor = () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        linke.addEventListener('mouseover', () => {
            link.computedStyleMap.color = '#ff6347';
        });
        link.addEventListener('mouseout', () => {
            link.computedStyleMap.color = '#fff';
        });
    });
};

// Function to update content dynamically using template literals
const updateContent = (sectionId, content) => {
    const section = document.getElementById(sectionId);
    if(section){
        section.innerHTML = <p>${content}</p>;
    }
};

// Initial call to set up event listeners
toggleNavColor();