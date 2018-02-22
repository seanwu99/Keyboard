jQuery(function ($) {

    // QWERTY Text Input
    // The bottom of this file is where the autocomplete extension is added
    // ********************
    $('#text').keyboard({layout: 'qwerty'});

    $('.version').html('(v' + $('#text').getkeyboard().version + ')');






    // Custom: Hidden Input
    // click on a link - add focus to hidden input
    // ********************
    $('.hiddenInput').click(function () {
        $('#hidden').data('keyboard').reveal();
        return false;
    });
    // Initialize keyboard script on hidden input
    // set "position.of" to the same link as above
    $('#hidden').keyboard({
        layout: 'num',
        position: {
            of: $('.hiddenInput'),
            my: 'center top',
            at: 'center top'
        }
    });



});
