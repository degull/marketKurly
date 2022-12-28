(function($){


   let Kurly = {
      init : function(){
         this.topModal();
         this.header();
         this.section1();
         this.section2();
         this.section3();

      },

      topModal : function(){

      },

      header : function (){

         const $serviceBox = $('#header .service-box');
         const $mapTooltipBox = $('#header .map-tooltip-box');
         const $topTooltip = $('#header .top-tooltip');
         const $mapTooltipMenu = $('#header .map-tooltip-menu');


         //고객센터 버튼에 마우스를 올리면
         $serviceBox.on({
            mouseenter : function(){
               $topTooltip.show();
            }
         });

         //고객센터 버튼에서 마우스를 떼면
         $serviceBox.on({
            mouseleave : function(){
               $topTooltip.hide();
            }
         });

         //mouse:hover 이벤트
         $mapTooltipBox.on({
            mouseenter:function(){
               $mapTooltipMenu.show()
            }
         });

         $mapTooltipBox.on({
            mouseleave:function(){
               $mapTooltipMenu.hide();
            }
         });
         
      },

      section1 : function(){
         // 0. 변수 설정
         let cnt = 0;
         let setId = 0;
         const $slideWrap        = $('#section1 .slide-wrap');
         const $SlideView        = $('#section1 .slide-view');
         const $arrow            = $('#section1 .arrow');
         const $arrowLeftBtn     = $('#section1 .arrow-left-btn');
         const $arrowRightBtn    = $('#section1 .arrow-right-btn');
         const $currentPage      = $('#section1 .current-page');
         const $slideContainer  = $('#section1 .slide-container');

         // 1. 메인슬라이드 함수
         function mainSlide(){   //1 ~ 16
            $slideWrap.stop().animate({left : `${-100 * cnt}%`}, 600 ,'easeInOutExpo', function(){
               if (cnt > 16) {cnt = 0}    //끝까지 돌았으면 처음으로 => 0
               if (cnt < 0)  {cnt = 16}   //처음이면 끝으로 => 17
               $slideWrap.stop().animate({left : `${-100 * cnt}%` }, 0);   //처음으로 순간이동
            });
            $currentPage.text (cnt + 1 == 17 ? 1 : (cnt + 1 == 0 ? 20 : cnt+1));

         }
         
         
         
         // 2. 다음카운트 함수
         function nextCount(){
            cnt++;
            mainSlide();
         }

         //2-1. 이전카운트 함수
         function previewCount(){
            cnt--;
            mainSlide();
         }

         // 3. 자동타이머 함수
         function autoTimer(){
            clearInterval(setId);   //이전에 세팅된 메모리 내용 삭제
            setId = setInterval(nextCount, 4000);
         }

         // 4. 자동타이머 함수 실행
         autoTimer();

         // 5. 슬라이드 컨테이너에 마우스 이벤트(Mouse Event)
         //mouseenter : 화살표버튼 부드럽게 나타남. FadeIn(1000) & 슬라이드 정지
         //mouseleave : 화살표 버튼 기본은 FadeOut(1000) & 슬라이드 플레이
         $SlideView.on({
            mouseenter : function(){
               $arrow.stop().fadeIn(600);
               clearInterval(setId);   //슬라이드 일시정지
            },

            mouseleave : function(){
               $arrow.stop().fadeOut(600);
               autoTimer();   //슬라이드 플레이(타이머 호출)
            }
         });


         // 6-1 . 다음화살표 클릭이벤트 : 일시 정지된 슬라이드 다음슬라이드로 이동
         $arrowRightBtn.on({
            click : function(e){
               e.preventDefault();
               nextCount();
            }
         });

         // 6-2 . 이전화살표 클릭이벤트 : 일시정지된 슬라이드 이전슬라이드로 이동
         $arrowLeftBtn.on({
            click : function(e){
               e.preventDefault();
               previewCount();
            }
         });


         // 7. 터치스와이프  : 선택자 슬라이드 컨테이너 이용
         // 마우스의 터치 : 시작 위치와 터치가 끝나는 위치를 이용하여
         // 다음 슬라이드와 이전 슬라이드를 판단하여 실행시킴
         let touchStart = null;
         let touchEnd = null;

         $slideContainer.on({
            mousedown : function(e){
               touchStart = e.clientX;
            },
            mouseup : function(e){
               touchEnd = e.clientX;
               console.log( `touchStart - touchEnd ${touchStart-touchEnd}` );
               if (touchStart-touchEnd > 0){
                  nextCount();   //다음슬라이드
               }
               if (touchStart-touchEnd < 0) {
                  previewCount();
               }
            }
         });


         // 8. 드래그 & 드롭

      },

      section2 : function(){

      },

      section3 : function(){

      }
   }

   Kurly.init();

 

})(jQuery);