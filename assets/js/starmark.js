const ratings = document.querySelectorAll('.rating');

ratings.forEach((rating, index) => {
    const stars = rating.querySelectorAll('input');
    const ratingText = document.getElementById(`rating-text-${index + 1}`);

    stars.forEach((star) => {
        star.addEventListener('change', (event) => {
            const selectedStar = event.target;
            const selectedRating = selectedStar.value;
            const selectedText = selectedStar.nextElementSibling.querySelector('span').textContent;
            ratingText.textContent = selectedText;
        });
    });
});