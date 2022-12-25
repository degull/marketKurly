(function($){


   let Kurly = {
      init : function(){
         this.topModal();
         this.header();
         this.main();
         this.section1();
         this.section2();
         this.section3();

      },

      topModal : function(){

      },

      header : function (){
         //고객센터 버튼에 마우스를 올리면
         $('.service-box').on({
            mouseenter : function(){
               $('.top-tooltip').show();
            }
         });

         //고객센터 버튼에서 마우스를 떼면
         $('.service-box').on({
            mouseleave : function(){
               $('.top-tooltip').hide();
            }
         });

         //mouse:hover 이벤트
         $('.map-tooltip-box').on({
            mouseenter:function(){
               $('.map-tooltip-menu').show()
            }
         });

         $('.map-tooltip-box').on({
            mouseleave:function(){
               $('.map-tooltip-menu').hide();
            }
         });
         
      },

      section1 : function(){
         // 0. 변수 설정
         let cnt = 0;

         // 1. 메인슬라이드 함수
         function mainSlide(){   //0 ~ 17
            $('.slide-wrap').animate({left:(-100 * cnt) + '%'}, 300, function(){
               if (cnt > 17) {cnt = 0}
               $('.slide-wrap').animate({left : (-100 * cnt) + '%'}, 0);
            });
         }

         // 2. 다음카운트 함수
         function nextCount(){
            cnt++;
            mainSlide();
         }

         // 3. 자동타이머 함수
         function autoTimer(){
            setInterval(nextCount, 3000);
         }

         // 4. 자동타이머 함수 실행
         autoTimer();
      },

      section2 : function(){

      },

      section3 : function(){

      }
   }

   Kurly.init();

 

})(jQuery);