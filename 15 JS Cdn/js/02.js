new Swiper('section>.main-banner>.inner>.swiper',{
  direction:'horizontal', //수평 슬라이드(기본)
  autoplay:{            //시작시 바로 재생 여부
      delay:3000,
      disableOnInteraction:false //사용자의 action에 따른 슬라이드 동작 정지여부
  },
  loop:true, //무한재생

  // navigation 
  navigation:{
    prevEl:'',
    nextEl:''
  }
  
});