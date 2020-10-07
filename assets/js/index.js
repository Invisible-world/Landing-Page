$(document).ready(function() {

    var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
        // var heigh = affixElement.outerHeight(),
        
        //     top = wrapper.offset().top;
        //     console.log(top);
        
        if (scrollElement.scrollTop() >= (160)){
            // wrapper.height(heigh);
            affixElement.addClass("affix");
            console.log('height')
        }
        else {
            affixElement.removeClass("affix");
        }
      
    };
  

    $('[data-toggle="affix"]').each(function() {
        var ele = $(this),
            wrapper = $('<div></div>');
        
        ele.before(wrapper);
        $(window).on('scroll resize', function() {
            toggleAffix(ele, $(this), wrapper);
        });
        
        // init
        toggleAffix(ele, $(window), wrapper);
    });
  // $('#myCarousel').carousel({
  //     interval: false
  //   });


      



});