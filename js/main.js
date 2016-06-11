$(document).scroll(function () {
    //the current height
    var y = $(this).scrollTop();
//height of top div
    var headerImage =  document.getElementById('header-image-container');
    var slidingDiv = document.getElementById('come-in-div-one');
    var headerImageHeight = headerImage.offsetHeight - 400;
    var headerImageHeight2 = headerImageHeight + 500;
    var headerImageHeight3 = headerImageHeight + 900;
    var headerImageHeight4 = headerImageHeight + 1000;
    
     
    
    /************************SLIDING DIVS and STICKY HEADER*************************/
     /***********************************************************/
    
    if(y < headerImageHeight) {
        $('#sticky-header').hide('slow');
        
        } else if(y >= headerImageHeight && y < headerImageHeight2){
      
            $('#come-in-div-one').css('opacity', '1').addClass('come-in');
            $('#sticky-header').show('slow');
        
        }  else if (y >= headerImageHeight2 && y < headerImageHeight3) {
            $('#come-in-div-two').css('opacity', '1').addClass('come-in-2');
      
        } else if (y >= headerImageHeight3 && y < headerImageHeight4) {
        
            $('#come-in-div-three').css('opacity', '1').addClass('come-in');
        
         } else if (y >= headerImageHeight4){
             $('#come-in-div-four').css('opacity', '1').addClass('come-in-2');
        
    } 
});

 /************************SHOW HEADER MENU*************************/
     /***********************************************************/

$('#sticky-menu').click(function(){
    $('#sticky-ul').toggle();
});





 /************************SHOW FOOTER*************************/
     /***********************************************************/

$(window).scroll(function() {
    if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
        //Bottom Reached
        $('#bottom-scroller').slideDown('slow'); 
    } 
        
    
});