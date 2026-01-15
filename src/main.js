// CSS imported in HTML for compatibility
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const desktopNav = document.querySelector('.desktop-nav');

    // Mobile menu logic
    menuToggle.addEventListener('click', () => {
        // Create or toggle mobile menu overlay
        let mobileMenu = document.querySelector('.mobile-menu');

        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.classList.add('mobile-menu');
            mobileMenu.innerHTML = `
        <div class="mobile-menu-content">
          <button class="close-menu"><i class="ph ph-x"></i></button>
          <nav>
            <a href="#kako-radi">Kako radi</a>
            <a href="#za-koga-je">Za koga je</a>
            <a href="#cijene">Cijene</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      `;
            document.body.appendChild(mobileMenu);

            // Close button logic
            mobileMenu.querySelector('.close-menu').addEventListener('click', () => {
                mobileMenu.remove();
            });

            // Close when clicking links
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.remove();
                });
            });
        } else {
            mobileMenu.remove(); // Toggle off if exists
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

console.log('App initialized');
