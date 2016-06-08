$(document).scroll(function () {
    //the current height
    var y = $(this).scrollTop();

    
    if(y >= 100 && y < 200){
      
        $('#side-scroller').show().addClass('come-in');
         $('#right-side-scroller').show().addClass('come-in-2');
    }else if (y >= 300){
        
        $('#bottom-side-scroller').show().addClass('come-in');
         $('#bottom-right-side-scroller').show().addClass('come-in-2');
        
    } else if (y >= 1600) 
        $('#bottom-scroller').slideUp();
});