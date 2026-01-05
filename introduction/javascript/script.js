// 1. SCROLL SPY functionality
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('.portfolio-section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // 200 is an offset to trigger the switch before reaching the exact line
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


// 2. THE "MAGIC" RESIZE FUNCTIONALITY
const magicBox = document.getElementById('magic-box');
const feedback = document.getElementById('resize-feedback');
let rotation = 0;

window.addEventListener('resize', () => {
    // Generate a random background color from the palette
    const palette = ['#213448', '#547792', '#94B4C1']; 
    const randomColor = palette[Math.floor(Math.random() * palette.length)];
    
    // Rotate the box slightly every time resize happens
    rotation += 5;
    
    // Apply styles
    magicBox.style.backgroundColor = randomColor;
    magicBox.style.transform = `rotate(${rotation}deg) scale(0.95)`;
    
    // Show feedback text
    feedback.innerText = `Screen Width: ${window.innerWidth}px - Magic Active! ✨`;
    feedback.style.color = '#fff';

    // Reset transform after a delay for a "pulse" effect
    setTimeout(() => {
        magicBox.style.transform = `rotate(0deg) scale(1)`;
    }, 500);
});