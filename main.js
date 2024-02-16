
        var typed = new Typed(".text", {
          strings: ["Student" , "Comedian" , "Movies Expert"],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 500,
          loop: true
          
        });

        function toggleMenu() {
          const menu = document.querySelector(".menu-links");
          const icon = document.querySelector(".hamburger-icon");
          menu.classList.toggle("open");
          icon.classList.toggle("open");
        }
        
    