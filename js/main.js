$(document).scroll(function () {
    //the current height
    var y = $(this).scrollTop();
//height of top div
    var headerImage =  document.getElementById('header-image');
    var headerImageHeight = headerImage.offsetHeight - 400;
    var headerImageHeight2 = headerImageHeight +1;
    
     
    
    if(y >= headerImageHeight && y < 1000){
      
        $('#come-in-div-one').show().addClass('come-in');
        
        }else if (y >= headerImageHeight2) {
         $('#right-side-scroller').show().addClass('come-in-2');
      
    }else if (y >= headerImageHeight){
        
        $('#bottom-side-scroller').show().addClass('come-in');
         $('#bottom-right-side-scroller').show().addClass('come-in-2');
        
    } else if (y >= 1600) 
        console.log('something');
});

$(window).scroll(function() {
    if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
        //Bottom Reached
        $('#bottom-scroller').slideDown('slow'); 
    }
});