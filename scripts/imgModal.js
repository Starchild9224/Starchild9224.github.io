/*  IMAGE MODAL */

const modal = document.querySelector('.modal');
if (modal) {
    const modalImg = modal.querySelector('.modal-content');
    const caption = modal.querySelector('.modal-caption');
    const closeBtn = modal.querySelector('.close');

    const images = document.querySelectorAll('.modal-trigger');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            //   TODO: refine the source
            caption.textContent = img.alt;
        });
    });

    // close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Optional: close if clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}