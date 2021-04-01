// section 01 : 탭 메뉴
function mainSectionTabs() {
  var targetLink = document.querySelectorAll('.tab a');
  var tabContent = document.querySelectorAll('.tab-Contents > div');

    for(var i=0; i<targetLink.length; i++) {
      targetLink[i].addEventListener('click',function(e){
        e.preventDefault();
        var orgTarget = e.target.getAttribute('href');
        var tabTarget = orgTarget.replace('#','');
        for(var x=0; x < tabContent.length; x++) {
          tabContent[x].style.display = 'none';
        }
        document.getElementById(tabTarget).style.display = 'block';
        for(var z=0; z<targetLink.length; z++) {
          targetLink[z].classList.remove('active');
          e.target.classList.add('active');
        }
      });
    }
    document.getElementById('tabs-1').style.display = 'block';
} mainSectionTabs();

// MediaQuery(resize)
var jsMediaQuery = window.matchMedia('screen and (max-width: 900px)');
// 사이즈 변경 후 버튼 추가
function itemBoxResize(){
  var itemboxArr = document.getElementsByClassName('item-box'),
      itembox2nd = itemboxArr[2].classList,
      itembox4th = itemboxArr[4].classList,
      itembtn = document.getElementsByClassName('btn_more');
  if(jsMediaQuery.matches){
    itembox2nd.remove('left-wrap');
    itembox2nd.add('center-wrap');
    itembox4th.remove('left-wrap');
    itembox4th.add('center-wrap');
    for(var i=0; i<itembtn.length; i++) {
      if(itembtn[i].className != 'mq900btn') {
        itembtn[i].classList.add('mq900btn');
      }
    }
  } else {
    itembox2nd.remove('center-wrap');
    itembox2nd.add('left-wrap');
    itembox4th.remove('center-wrap');
    itembox4th.add('left-wrap');
    for(var i=0; i<itembtn.length; i++) {
      itembtn[i].classList.remove('mq900btn');
    }
  }
} itemBoxResize();
// Section 01 탭 이미지 좌우 이동
function signageCarousel() {
  const secSignage = document.getElementById('signage'),
        imageFrame = secSignage.querySelectorAll('.con-img'),
        indicateBox = secSignage.querySelectorAll('.indicate'),
        ANIMATE_CN = 'animateTabs',
        ACTIVE_CN = 'activeTabs';
  if(jsMediaQuery.matches){
    for(let i=0; i<imageFrame.length; i++) {
      let image = imageFrame[i].children;
      for(let j=0; j<image.length; j++) {
        image[j].style.left = j * 100 +'%';
      }
      imageFrame[i].style.width = 200+'%';
      imageFrame[i].style.left = '0px';
      imageFrame[i].classList.add(ANIMATE_CN);

      const INDICATE = indicateBox[i].children[0].children;

      INDICATE[0].classList.add(ACTIVE_CN);
      INDICATE[0].addEventListener('click',function(){
        imageFrame[i].style.left = '0px';
        this.classList.add(ACTIVE_CN);
        this.nextElementSibling.classList.remove(ACTIVE_CN);
      });
      INDICATE[1].addEventListener('click',function(){
        imageFrame[i].style.left = -100+'%';
        this.classList.add(ACTIVE_CN);
        this.previousElementSibling.classList.remove(ACTIVE_CN);
      });
    }
  }
} signageCarousel();
// Section 02 이미지 좌우 이동
function companyCarousel() {
  const secCompany = document.getElementById('company'),
        imageFrame = secCompany.querySelector('.contents'),
        images = imageFrame.querySelectorAll('.mq900-slider'),
        indicateBox = secCompany.querySelector('.indicate'),
        ANIMATE_CN = 'animateTabs',
        ACTIVE_CN = 'activeTabs';

    if(jsMediaQuery.matches) {
      for(let i=0; i<images.length; i++) {
        images[i].style.left = i * 102+'%';
        images[i].classList.add(ANIMATE_CN);
  
        let INDI = indicateBox.children[0].children;
  
        INDI[0].classList.add(ACTIVE_CN);
        INDI[0].addEventListener('click', function(){
          images[0].style.left = 0;
          images[1].style.left = 102+'%';
          this.classList.add(ACTIVE_CN);
          this.nextElementSibling.classList.remove(ACTIVE_CN);
        });
        INDI[1].addEventListener('click', function(){
          images[0].style.left = -102+'%';
          images[1].style.left = 0;
          this.classList.add(ACTIVE_CN);
          this.previousElementSibling.classList.remove(ACTIVE_CN);
        });
      }
    }
} companyCarousel();
// Section 03 이미지 좌우 이동
function newsCarousel() {
  const secNews = document.getElementById('news'),
        imageFrame = secNews.querySelector('.contents'),
        images = imageFrame.querySelectorAll('.mq900-slider'),
        btnBox = imageFrame.querySelector('.slider-nav'),
        PREV_BTN = btnBox.querySelector('.btn-prev'),
        NEXT_BTN = btnBox.querySelector('.btn-next'),
        ANIMATE_CN = 'animateTabs';
  if(jsMediaQuery.matches){
    for(let img=0; img<images.length; img++) {
      images[img].style.left = img * 104+'%';
      images[img].classList.add(ANIMATE_CN);
      PREV_BTN.addEventListener('click',function(){
        images[0].style.left = 0;
        images[1].style.left = 104+'%';
      });
      NEXT_BTN.addEventListener('click',function(){
        images[0].style.left = -104+'%';
        images[1].style.left = 0;
      });
    }
  }
} newsCarousel();

jsMediaQuery.addEventListener('change', function() {
  itemBoxResize();
  signageCarousel();
  companyCarousel();
  newsCarousel();
});
// Main Visual 슬라이드
function mainVisual() {
  const sliderContainer = document.querySelector('.intro-slider'),
        slider = sliderContainer.querySelector('.slider-container'),
        slide = slider.querySelectorAll('.slide'),
        slideCount = slide.length;
        PAUSE_BTN = sliderContainer.querySelector('.btn-pause'),
        PREV_BTN = sliderContainer.querySelector('.btn-prev'),
        NEXT_BTN = sliderContainer.querySelector('.btn-next'),
        ANIMATE_CN = 'animateSlider';
  let currentIndex = 0;
  // 슬라이드 복사
  const newSldieLast = slide[0].cloneNode(true);
  slider.append(newSldieLast);
  for(let i = slideCount-1; i >= 0; i--) {
    newSldieFirst = slide[i].cloneNode(true);
    slider.prepend(newSldieFirst);
  }
  // 슬라이드 재정렬
  const newSldie = slider.querySelectorAll('.slide');
  for(let i=0; i<newSldie.length; i++) {
    newSldie[i].style.left = i*100+'%';
  }
  slider.style.transform = 'translateX(' + slideCount * -100 + '%)';
  slider.style.left = '0px';
  slider.classList.add(ANIMATE_CN);
  // 수동 슬라이드
  function btnClickSlider(index) {
    slider.style.left = -index * 100+'%';
    currentIndex = index;
    if(currentIndex === slideCount || currentIndex === -slideCount){
      setTimeout(function(){
        slider.classList.remove(ANIMATE_CN);
        slider.style.left = '0px';
        currentIndex = 0;
      }, 1000);
    }
    slider.classList.add(ANIMATE_CN);
    slideAnimation();
  }
  NEXT_BTN.addEventListener('click', function(){
    btnClickSlider(currentIndex+1)
  });
  PREV_BTN.addEventListener('click', function(){
    btnClickSlider(currentIndex-1)
  });
  // 자동 슬라이드
  function autoSlider(index) {
    index = currentIndex+1;
    slider.style.left = -index * 100+'%';
    currentIndex = index;
    if(currentIndex === slideCount || currentIndex === -slideCount){
      setTimeout(function(){
        slider.classList.remove(ANIMATE_CN);
        slider.style.left = '0px';
        currentIndex = 0;
      }, 1000);
    }
    slider.classList.add(ANIMATE_CN);
    slideAnimation();
  }
  autoPlay = setInterval(autoSlider, 4500);
  // 슬라이드 네비게이션 애니메이션
  function slideAnimation() {
    const prograssBox = sliderContainer.querySelector('.slider-nav'),
          pageNumber = prograssBox.children[0];
    // 슬라이드 번호
    if(currentIndex >= 0) {
      if(currentIndex === 2||currentIndex === 0) {
        pageNumber.innerText = 1;
      } else {
        pageNumber.innerText = 2;
      }
    } else {
      if(currentIndex === -2||currentIndex === 0) {
        pageNumber.innerText = 1;
      } else {
        pageNumber.innerText = 2;
      }
    }
    // 프로그래스바 애니메이션
    const progressFrame = document.querySelector('.progress'),
          spanProgress = progressFrame.querySelector('span'),
          ON_CN ='on';
    spanProgress.classList.add(ON_CN);
    setTimeout (function(){
      spanProgress.classList.remove(ON_CN);
    },4300);
  }
  // 자동 재생 정지 & 다시 시작
  function handleBtn() {
    const hasClass = PAUSE_BTN.classList.contains('push');
    if(!hasClass) {
      clearInterval(autoPlay);
      this.classList.add('push');
    } else {
      autoPlay = setInterval(autoSlider, 4500);
      this.classList.remove('push');
    }
  } PAUSE_BTN.addEventListener('click', handleBtn);
  slideAnimation();
} mainVisual();
// Section 04 : slick JS
$('#slick-slider').slick({
  slide: 'li',
  centerMode: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        centerMode: false,
        slidesToShow: 2,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});