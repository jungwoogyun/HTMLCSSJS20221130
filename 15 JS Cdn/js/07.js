// gnbSecondEl(두번째)
//const gnbSecondEl = document.querySelector('header>.inner>.gnb-second');
// gnbEl(3번째)
const gnbEl = document.querySelector('header>.inner>.gnb');
// body
const bodyEl = document.querySelector('body');

window.addEventListener('scroll', _.throttle(function () {

  console.log(window.scrollY);
  if (window.scrollY > 700) {
    // gnbSecondEl 숨기기
    gnbSecondEl.style.marginTop="-86px"
    // gnbEl 올리기
    gnbEl.style.marginTop="-86px"
    // bodyEl 올리기
    bodyEl.style.paddingTop='108px';
  } else {
       // gnbSecondEl 숨기기
       gnbSecondEl.style.marginTop="0px"
       // gnbEl 올리기
       gnbEl.style.marginTop="0px"
       // bodyEl 올리기
       bodyEl.style.paddingTop='190px';

  }
}, 300));