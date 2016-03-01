$(function() {
    $('#webchat').click(function(){
        window.open('demo.html','webchat', 'width=200, height=200');
    });

    $('a.trap').keydown(function(event){
        event.preventDefault();
        var href = $(this).attr('href');
        var text = $(this).text();
        window.open(href, text);
    });

});