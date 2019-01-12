$(function () {

    $('#myCarousel').carousel({
        interval: 2000
    });

    // handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        var id = id_selector.substr(id_selector.length - 1);
        id = parseInt(id);
        $('#myCarousel').carousel(id);
        $('[id^=carousel-selector-]').removeClass('selected');
        $(this).addClass('selected');
    });

    var is_start = true;
    // when the carousel slides, auto update
    $(document).on('slid', '#myCarousel', function () {
        //console.log('lol ');
        var id = $('.item.active').data('slide-number') + 1;
        //if(!is_start){
        //    id = id + 1;
        //}

        if (id > 4) {
            id = 0
        }
        id = parseInt(id);
        $('[id^=carousel-selector-]').removeClass('selected');
        $('[id=carousel-selector-' + id + ']').addClass('selected');
        console.log(id);
        //is_start = false;
    });

    $('#myCarousel').on('slide.bs.carousel', function () {
        //console.log('lol ');

        $('#myCarousel').trigger('slid');
    })
});