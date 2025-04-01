// hero
document.addEventListener("DOMContentLoaded", function () {
    // document.querySelector(".page-start-transition").classList.add("active");
    // Start text animation after inserting content
    startTextAnimation();


});

function startTextAnimation() {
    const words = document.querySelectorAll(".sp-words-wrapper span");
    const faces = document.querySelectorAll("#hero-face-container img");
    let currentIndex = 0;

    function showNextWord() {
        words[currentIndex].classList.remove("is-visible");
        words[currentIndex].classList.add("is-hidden");
        faces[currentIndex].classList.remove("is-visible");
        faces[currentIndex].classList.add("is-hidden");

        currentIndex = (currentIndex + 1) % words.length;

        words[currentIndex].classList.remove("is-hidden");
        words[currentIndex].classList.add("is-visible");
        faces[currentIndex].classList.remove("is-hidden");
        faces[currentIndex].classList.add("is-visible");
    }

    setInterval(showNextWord, 3000);
    // Change words every 3 seconds
}