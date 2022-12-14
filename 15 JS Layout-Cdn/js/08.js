const toggleAtagEl = document.querySelector('.banner-toggle>.inner>.left>a');
const toggleiconEl = toggleAtagEl.firstChild;
let toggleflag = false;

const toggleBannerEl = document.querySelector('.toggle-banner');

toggleAtagEl.addEventListener('click', function () {
  // alert("TESt");
  if (toggleflag == false) {
    //버튼 모양 변경
    toggleiconEl.remove();
    toggleAtagEl.innerHTML = '<i class="bi bi-caret-down"></i>';

    //토글배너 숨기기
    toggleBannerEl.classList.add('Banner--hidden');
    toggleBannerEl.classList.remove('Banner--show');
    toggleflag = true;
  } else {
    //버튼 모양 변경
    toggleiconEl.remove();
    toggleAtagEl.innerHTML = '<i class="bi bi-caret-up"></i>';

    //토글배너 표시
    toggleBannerEl.classList.add('Banner--show');
    toggleBannerEl.classList.remove('Banner--hidden');

    toggleflag = false;
  }

})