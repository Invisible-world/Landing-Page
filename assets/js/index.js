$(document).ready(function() {

    var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
        var heigh = affixElement.outerHeight(),
        
            top = wrapper.offset().top;
            console.log(top);
        
        if (scrollElement.scrollTop() >= (top - heigh)){
            wrapper.height(heigh);
            affixElement.addClass("affix");
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
  
});