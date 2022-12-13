


const badgeEl=document.querySelector('section>.sticky-banner');
const gnbSecondEl = document.querySelector('.gnb-second');
// window.addEventListener('scroll',function(){
//   console.log('scroll!!');
//   // console.log(window.scrollY);
// })

// _.throttle(함수,시간)

window.addEventListener('scroll',_.throttle(function(){
  // console.log('scroll!!');
  console.log(window.scrollY);
  if(window.scrollY>700 ){
    //배지 숨기기
    badgeEl.classList.add('badge--hidden');
    badgeEl.classList.remove('badge--show');
   
  }else{
    //배지 표시하기
    badgeEl.classList.add('badge--show');
    badgeEl.classList.remove('badge--hidden');
   
  }
},300));
