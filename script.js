document.getElementById('showMore').addEventListener('click', function() {
    document.querySelectorAll('.movie.hidden').forEach(function(movie, index) {
        if (index < 4) {
            movie.classList.remove('hidden');
        }
    });
}) 
function enlargeBox() {
    document.querySelector('.con').style.transform = 'scale(0.0)';
}

function shrinkBox() {
    document.querySelector('.con').style.transform = 'scale(0)';
}

function submitRating() {
    var rating = 0;
    var stars = document.getElementsByName('rating');

    for (var i = 0; i < stars.length; i++) {
        if (stars[i].checked) {
            rating = stars[i].value;
            break;
        }
    }

    alert('you rated the movie' + rating)}