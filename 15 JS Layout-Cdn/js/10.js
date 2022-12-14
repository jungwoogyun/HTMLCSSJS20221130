const toTopBtnEl = document.querySelector('#to-top');

toTopBtnEl.addEventListener('click',function(){
  
  window.scrollTo({ top: 0, behavior: "smooth" });
  
})

let toTopflag = false;
window.addEventListener('scroll',_.throttle(function(){
  if(window.scrollY>700){
    if(toTopflag==false){
      toTopBtnEl.style.display='flex';
      toTopflag=true;
    }
    //버튼 표시
    toTopBtnEl.classList.remove('btn--ToRight');
    toTopBtnEl.classList.add('btn--Toleft');
   
  }else{

    //버튼 숨기기
    toTopBtnEl.classList.add('btn--ToRight');
    toTopBtnEl.classList.remove('btn--Toleft');
    
   
  }
},300));
