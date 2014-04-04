$(function() {
    var calendar = $('#calendar_table');
    $('table tr').eq(1).css({backgroundColor:'#FF9933'})

    $('td').click(function(){
        $(this).toggleClass('clicker');
    });

  $('#submit_button').click(function(){
        var div1 = $('<div></div>');
        $('#ready_names').append(div1);
        var chosenName = $('#name_input').val();
        div1.html(chosenName);
        var chosenColor = $('#color_select').val();
        div1.css({
            'font-weight' : 'normal',
            'color' : chosenColor,
            'padding' : '6px'
        });
        div1.attr('id', chosenName);
        if($('#ready_names').children()){
            var nameArray = $('#ready_names').children();
            var newArray = [];
            for(var ii=0; ii<nameArray.length; ii++){
                (function(idx) {
                    $(nameArray[idx]).off('click').click(function(){
                        var newestArray = [];
                        newArray.unshift($(nameArray[idx]));
                        $(newArray[0]).css({'text-decoration' : 'underline', 'font-weight' : 'bold'});
                        if(newArray.length > 1){
                            newestArray = newArray.slice(1);
                            for(var jj=0; jj<newestArray.length; jj++){
                                $(newestArray[jj]).css({'text-decoration' : 'none', 'font-weight' : 'normal'});
                                newestArray = [];
                  }
            } 
                    });
                })(ii);
            }
        }
    });








 });

