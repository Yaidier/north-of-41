$(document).ready(function($){

    $('.wn-accordion_item').on('click', function(){

        $('.wn-accordion_item_head_plus_icon').removeClass('wn-accordion_item_head_plus_icon--active');
        $(this).find('.wn-accordion_item_head_plus_icon').addClass('wn-accordion_item_head_plus_icon--active');

        $('.wn-accordion_item_content').css('display', 'none');
        $(this).find('.wn-accordion_item_content').css('display', 'block');
        
    });
    
});