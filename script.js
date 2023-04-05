$(document).ready(function(){
    $('.hide').click(function(){
        $('img').fadeOut();
    });
    $('.show').click(function(){
        $('img').fadeIn();
    });
    $('#show-hide').click(function(){
        // setInterval(function(){
        //     $('img').toggle(3000);
        // }, 3000);
    })
    var soLike = 0;
    $('.like').click(function(){
        soLike++;
        $('.like span').text(soLike);
    })
});