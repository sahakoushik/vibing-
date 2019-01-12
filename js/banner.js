window.addEventListener('load', function () {

    var four = document.querySelector('.four');
    var five = document.querySelector('.five');
    var six = document.querySelector('.six');
    var seven = document.querySelector('.seven');
    delay = 500;

    setTimeout(function () {
        $('.content-2').addClass('loaded');
    }, 2000);

    var animation = function () {
        setTimeout(function () {
            four.style.top = '0%';
        }, delay * 2);
        setTimeout(function () {
            four.style.top = '100%';           
        }, delay * 5);

        setTimeout(function () {
            var animationDelay = delay *5 
            five.style.top = '0%';
            //five.style.animation = "fadein 3s";
            //$('#five').css({ 'animation-delay': animationDelay });
        }, delay * 6);
        setTimeout(function () {
            five.style.top = '100%';
        }, delay * 11);

        setTimeout(function () {
            six.style.top = '0%';
            //six.style.animation = "fadein 4s";
        }, delay * 12);
        setTimeout(function () {
            six.style.top = '100%';
        }, delay * 17);

        setTimeout(function () {
            seven.style.top = '0%';
            //seven.style.animation = "fadein 5s";
        }, delay * 18);
        setTimeout(function () {
            seven.style.top = '100%';
        }, delay * 23);
    };
    animation();
    setInterval(animation, delay * 24);
});
