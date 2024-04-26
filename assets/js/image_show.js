var modal = document.querySelector('.modal');
var modalImg = document.getElementById('modal-image');
var captionText = document.getElementById('caption');

var images = document.querySelectorAll('.image-container');

images.forEach(function(image) {

    image.addEventListener('mouseover', function() {
        image.querySelector('img').style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', function() {
        image.querySelector('img').style.transform = 'scale(1)';
    });

    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.querySelector('img').src;
        captionText.innerHTML = this.querySelector('.caption').innerHTML;
    });
});

document.querySelector('.close').addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
