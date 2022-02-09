jQuery(document).ready(function (){
    // number of elements
    var show_per_page = 2;

    // get number of elements
    var number_of_items = $('#pagination').children().length;

    console.log("number of items"+ " "+number_of_items);

    // calculate number of items in a page
    var number_of_pages = Math.ceil(number_of_items/show_per_page);

    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);

    // create pagination element
    var navigation_html = '<a href="javascript:previous();" class="prev">&laquo; prev</a>';
    var current_link = 0;
    while(number_of_pages > current_link){
        navigation_html += ' <a href="javascript:go_to_page('+current_link +')" longdesc="'+current_link+'" class="link">' + (current_link + 1) + '</a>';
        current_link++;
        
    }
    navigation_html += '<a href="javascript:next();" class="next">next &raquo;</a>';

    $('#page_navigation').html(navigation_html);
    //add active class to first page link
    $('#page_navigation .link:first').addClass('active');







});