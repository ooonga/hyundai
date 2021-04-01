// 사업소개 - 디지털 사이니지 : 슬라이더
var jsMediaQuery = window.matchMedia('screen and (max-width: 600px)');
function digitalSlider() {
  const sliderContainer = document.querySelector('.subslider-wrap'),
        slide = sliderContainer.querySelectorAll('.items'),
        indiBox = document.querySelector('.indicate'),
        INDICATE_BTN = indiBox.querySelectorAll('li'),
        ANIMATE_CN = 'animateTabs',
        ACTIVE_CN = 'activeTabs';
  if(jsMediaQuery.matches){

    sliderContainer.classList.add(ANIMATE_CN);
    sliderContainer.style.left = '0px';
    INDICATE_BTN[0].classList.add(ACTIVE_CN);

    for( let obj=0; obj<slide.length; obj++ ) {
      slide[obj].style.left = obj * 100+'%';
      INDICATE_BTN[obj].addEventListener('click', function(){
        for(let i=0; i<INDICATE_BTN.length; i++) {
          INDICATE_BTN[i].classList.remove(ACTIVE_CN);
          this.classList.add(ACTIVE_CN);
        }
        sliderContainer.style.left = -obj * 100+'%';
      })
    }
  } else {
    sliderContainer.style.left = '';
    for(let i=0; i<INDICATE_BTN.length; i++) {
      slide[i].style.left = '';
    }
  }
} digitalSlider();
jsMediaQuery.addEventListener('change', function() {
  digitalSlider();
});