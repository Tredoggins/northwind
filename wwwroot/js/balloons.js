$(function () {
    var choices = ["bounce", "flash", "pulse", "rubberBand", "shakeX", "shakeY", "headShake","swing","tada","wobble","jello","heartBeat"];
    $("h1").removeClass().addClass("animated "+choices[Math.round(Math.random()*11)]);
    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    $('#checkAll').on('click',
        function() {
            $('.form-check-input').each(function () {
                $(this).prop('checked', true);
                $(this).change();
            });
        });
    $('#unCheckAll').on('click',
        function () {
            $('.form-check-input').each(function () {
                if ($(this).prop('checked')) {
                    $(this).prop('checked', false);
                    $(this).change();
                }
            });
        });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible');
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });
    $(".form-check-label").hover(function() {
        $("h1").css('color',$(this).attr('for'));
    },function() {
        $("h1").css('color','black');
    });
    $(".form-check-input").hover(function () {
        $("h1").css('color',this.id);
    }, function () {
        $("h1").css('color', 'black');
    });
    $('#submit').on('click',
        function () {
            
            var showToast = true;
            $(".form-check-input").each(function() {
                if ($(this).prop('checked')) {
                    showToast = false;
                }
            });
            if ($('input[type="text"]').val().length === 0) {
                showToast = true;
            }
            if (showToast) {
                $('#toast').toast({ autohide: false }).toast('show');
            }
        });
});