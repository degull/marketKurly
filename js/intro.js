(function($){

   $('.service-box').on({
      mouseenter: function(){
         $('.top-tooltip').show();
      }

   });

   $('.service-box').on({
      mouseleave: function(){
         $('.top-tooltip').hide();
      }

   });


})(jQuery);