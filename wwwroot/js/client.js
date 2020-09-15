$(function () {
    // preload audio
    var toast = new Audio('media/toast.wav');
    
    $('.code').on('click', function (e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#code').html($(e.target).data().code);
        $('#product').html($(e.target).data().product);
        $('#toast').toast({ autohide: false }).toast('show');
    });
    document.addEventListener('keyup', function (evt) {
        if (evt.key == 'Escape') {
            $('#toast').toast('hide');
        }
    });
});