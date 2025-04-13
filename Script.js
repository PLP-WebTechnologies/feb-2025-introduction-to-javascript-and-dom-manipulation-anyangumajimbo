

// 1. Change text content dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Change header text after 3 seconds
    setTimeout(function() {
        const header = document.querySelector('.header h1');
        if (header) {
            header.textContent = 'Bienvenue au Club Français TUK';
            header.style.color = '#EF4135'; // French Red
        }
    }, 3000);

    // Change first paragraph in middle column
    const middlePara = document.querySelector('.column.middle p');
    if (middlePara) {
        middlePara.textContent = "Discover the vibrant world of French language and culture with our exciting activities! New members always welcome!";
    }

    // 2. Modify CSS styles via JavaScript
    const topnavLinks = document.querySelectorAll('.topnav a');
    topnavLinks.forEach(link => {
        link.style.fontSize = '1.2rem';
        link.style.padding = '10px 15px';
        link.style.borderRadius = '5px';
    });

    // Add a button to the first side column
    const joinColumn = document.querySelector('.column.side');
    if (joinColumn) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle Events List';
        toggleButton.style.marginTop = '10px';
        toggleButton.style.padding = '8px 15px';
        toggleButton.style.backgroundColor = '#EF4135';
        toggleButton.style.color = 'white';
        toggleButton.style.border = 'none';
        toggleButton.style.borderRadius = '5px';
        toggleButton.style.cursor = 'pointer';
        
        // 3. Add or remove element when button is clicked
        toggleButton.addEventListener('click', function() {
            const eventsList = document.querySelector('.column.side ul');
            if (eventsList) {
                if (eventsList.style.display === 'none') {
                    eventsList.style.display = 'block';
                    toggleButton.textContent = 'Hide Events List';
                } else {
                    eventsList.style.display = 'none';
                    toggleButton.textContent = 'Show Events List';
                }
            }
        });
        
        joinColumn.appendChild(toggleButton);
    }

    // Add animation to social media icons
    const socialIcons = document.querySelectorAll('.social-links a');
    socialIcons.forEach(icon => {
        icon.style.transition = 'transform 0.3s ease';
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
        });
        icon.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});