const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){

  new ScrollMagic
    .Scene({
      triggerElement : spyEl, //감시할 요소 선택
      triggerHook : .85       //스크린에서의 스크롤 위치  
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});