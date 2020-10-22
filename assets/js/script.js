(function ($) {
    'use strict';

    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });


    /* ########################################### hero parallax ############################################## */
    window.onload = function () {

        // footnotes
        $('[data-toggle="tooltip"]').tooltip();
        // end footnotes

        $('.work-filter').trigger("change");

    }
    
    /* ########################################### /hero parallax ############################################## */

    if ($(".shuffle-item")[0]){

    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;


    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        group: ["selected", "fiction", "poetry"],
        buffer: 1
    });

    jQuery('.work-filter').on('change', function (evt) {
        var cats = [];
        var selected = false;

        if($('input[name=shuffle-filter2]:checked').val() == "selected"){
            var selected = true;
            cats.push("selected");
        }

        $('.work-type:checkbox:checked').each(function() {
            cats.push($(this).attr('value'));
        });

        // custom filter
        // if selected is on, item shows up iff it matches one of the types
        myShuffle.filter(function (element) {
            var elem_cats = JSON.parse(element.getAttribute('data-groups'));
            var shared = cats.filter(value => elem_cats.includes(value));

            if (selected != true && shared.length > 0){
                return true;
            }
            else if (selected == true && shared.includes("selected") && shared.length > 1){
                return true;
            }
            return false;
          }, {
            by: function (element) {
                if($('input[name=shuffle-sort]:checked').val() == "words"){
                    return parseInt(element.getAttribute('data-words'));
                } else{
                    return element.getAttribute('data-date');
                }
            },
            reverse: true,
          });

    });
    }



})(jQuery);
