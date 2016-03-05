$(document).ready( function () {
    $.getJSON('../data/letters.json', function(data) {
        $.each(data.letters, function(letter, values) {
            $('.container').append('<div class="col-md-3 col-lg-2 col-xs-6 letter-item">' + letter + '</div>' + '<audio class="js-audio"><source src="audio/'+values.audio+'.mp3"></source></audio>');
        });
    });
    
    var audio = $(".js-audio")[0];
    
    $('.container').on( 'click', '.letter-item', function () {
        alert('playing' + audio)
        audio.play();
    });
});