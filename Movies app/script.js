const movies = $('#movies');
const moviesList = [];

$('.input-form').on('submit', function(e) {
    e.preventDefault();
    const rating = $('input[name="rating"]').val();
    const movieTitle = $('input[name="title"]').val();
    if(movieTitle.length >= 2) {
        $(`<div><b>Movie:</b> ${movieTitle} <b>Rating:</b> ${rating}<button class='remove'>X</button></div>`).appendTo(movies);
        
    } else throw new Error('Movie title must be at least 2 characters long.')
    console.log($('select').val())
})

movies.on('click', '.remove', function() {
    $(this).parent().remove();
})
