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


 $(".nav-item a").on('click', function(event) {
console.log('clicked');
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800 
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        
    ) // End if
  }
  });



});