$(document).ready( function () {
    $.getJSON('../data/letters.json', function(data) {
        $.each(data.letters, function(letter, values) {
            $('.container').append('<div class="col-md-3 col-lg-2 col-xs-6 letter-item">' + letter + '</div>' + '<audio class="js-sound"><source src="audio/'+values.audio+'.mp3"></source></audio>');
        });
    });

    $('.container').on( 'click', '.letter-item', function () {
        $(".js-sound").trigger('play');
    });

    $("audio").on("play", function(){
        var _this = $(this);
        $("audio").each(function(i,el){
            if(!$(el).is(_this))
                $(el).get(0).pause();
        });
    });
});