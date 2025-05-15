// Add styles dynamically
const styles = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', Arial, sans-serif;
    }

    body {
        background-color: #f5f5f5;
    }

    .navbar {
        background-color: #ffffff;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
    }

    .logo img {
        height: 40px;
        transition: transform 0.3s ease;
    }

    .logo img:hover {
        transform: scale(1.05);
    }

    .nav-links a {
        color: #000000;
        text-decoration: none;
        margin-left: 2rem;
        font-weight: 600;
        position: relative;
        transition: color 0.3s ease;
    }

    .nav-links a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: #00704A;
        transition: width 0.3s ease;
    }

    .nav-links a:hover::after {
        width: 100%;
    }

    .nav-links a.active {
        color: #00704A;
    }

    .hero {
        height: 100vh;
        background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                    url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        padding-top: 60px;
    }

    .hero-content {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 1s ease forwards;
    }

    .hero h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }

    .hero p {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    .cta-button {
        background-color: #00704A;
        color: white;
        border: none;
        padding: 1rem 2rem;
        font-size: 1.2rem;
        border-radius: 25px;
        cursor: pointer;
        transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .cta-button:hover {
        transform: scale(1.05);
        background-color: #005c3f;
    }

    .featured-drinks {
        padding: 4rem 2rem;
        background-color: white;
    }

    .featured-drinks h2 {
        text-align: center;
        margin-bottom: 3rem;
        color: #00704A;
    }

    .drinks-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .drink-card {
        background-color: #f8f8f8;
        border-radius: 10px;
        overflow: hidden;
        transition: transform 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
    }

    .drink-card.visible {
        animation: fadeInUp 0.5s ease forwards;
    }

    .drink-card:hover {
        transform: translateY(-10px);
    }

    .drink-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .drink-card h3 {
        padding: 1rem;
        color: #00704A;
    }

    .drink-card p {
        padding: 0 1rem 1rem;
        color: #666;
    }

    footer {
        background-color: #00704A;
        color: white;
        padding: 2rem;
        text-align: center;
    }

    .social-links {
        margin-bottom: 1rem;
    }

    .social-links a {
        color: white;
        font-size: 1.5rem;
        margin: 0 1rem;
        transition: transform 0.3s ease;
    }

    .social-links a:hover {
        transform: scale(1.2);
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Intersection Observer for drink cards animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Observe drink cards
    const drinkCards = document.querySelectorAll('.drink-card');
    drinkCards.forEach(card => observer.observe(card));

    // Add click event to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Welcome to Starbucks! This is a demo website.');
        });
    }

    // Add hover effect to nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // link.style.color = '#00704A';
        });
        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('active')) {
                // link.style.color = '#000000';
                // link.
            }
        });
    });
});