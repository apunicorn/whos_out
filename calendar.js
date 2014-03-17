$(function() {
    var calendar = $('#calendar_table');
    $('table tr').eq(1).css({backgroundColor:'#FF9933'})

    $('td').click(function(){
        $(this).toggleClass('clicker');
    });

    $('#submit_button').click(function(){
        var div1 = $('<div></div>');
        $('#ready_names').append(div1);
        div1.html($('#name_input').val());
        var chosenColor = $('#color_select').val();
        div1.css({
            'font-weight' : 'bold',
            'color' : chosenColor
        });

    });










 });