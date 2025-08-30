  // navbar script start
        const menuBtn = document.getElementById("menuBtn");
        const closeBtn = document.getElementById("closeBtn");
        const menuOverlay = document.getElementById("menuOverlay");

        menuBtn.addEventListener("click", () => {
            menuOverlay.style.width = "100%";
        });

        closeBtn.addEventListener("click", () => {
            menuOverlay.style.width = "0";
        });
        // navbar script end

        // modal video script start
        const videoModal = document.getElementById('videoModal');
        const videoFrame = document.getElementById('videoFrame');
        const playBtn = document.querySelector('.youtube-btn');

        playBtn.addEventListener('click', function () {
            const videoSrc = this.getAttribute('data-src');
            videoFrame.setAttribute('src', videoSrc);
        });

        videoModal.addEventListener('hidden.bs.modal', function () {
            videoFrame.setAttribute('src', '');
        });
        //   modal video script end

        // carousel script start
        const slides = document.querySelectorAll(".carousel .slide");
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === index) {
                    slide.classList.add("active");
                }
            });
        }

        document.getElementById("next").addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });

        document.getElementById("prev").addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        showSlide(currentIndex);

        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 2000);
        // carousel script end