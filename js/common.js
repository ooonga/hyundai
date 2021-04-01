// 앵커 태그 기본 이벤트 막기
$('a[href="#"]').click(function(event){
  event.preventDefault();
})
// Header : 서브메뉴 드랍다운
function headerDropdown(){
  var header = document.querySelector('header'),
      gnbMenu = document.querySelectorAll('.gnb-list > li');
    for(var i=0; i <gnbMenu.length; i++) {
      gnbMenu[i].addEventListener('mouseenter',function(){
        header.classList.add('on');
      });
      gnbMenu[i].addEventListener('mouseleave',function(){
        header.classList.remove('on');
      });
    }
} headerDropdown();
// Header : 햄버거 메뉴 네비게이션
function topNaviController() {
  const navWrap = document.querySelector('nav'),
        btnNavOpen = document.getElementById('btn-nav'),
        btnNavClose = document.getElementById('btn-nav-close'),
        navWeb = document.querySelector('.web-nav'),
        jsMediaQuery = window.matchMedia('screen and (max-width: 900px)');
  // 모바일 네비게이션 작동
  function accodianNavi() {
    const $titleBtn = $('.nav-li').children('a');
    $titleBtn.attr('href','#');
    $titleBtn.click(function(){
      const anchor = $(this),
            parent = anchor.parent();
      if(anchor.hasClass('active')){
        anchor.removeClass('active');
        anchor.next().slideUp();
        anchor.next().find('ul').css('display','none');
      } else {
        anchor.addClass('active');
        anchor.next().slideDown();
        anchor.next().find('ul').css('display','none');
        parent.siblings().children('a').removeClass('active');
        parent.siblings().children('.nav-menu').slideUp();
      }
    });
    const $subBtn = $('.nav-submenu').children('a');
    $subBtn.attr('href','#');
    $subBtn.click(function(){
      $(this).next().slideToggle();
    });
  }
  // 가로사이즈 900px 이하 네비게이션 모양 변경
  if(jsMediaQuery.matches) {
    navWeb.className = 'mobile-nav';
    accodianNavi();
  }
  jsMediaQuery.addEventListener('change', function(event) {
    if(event.matches) {
      navWeb.className = 'mobile-nav';
    } else {
      navWeb.className = 'web-nav';
    }
  });
  // 네비 열기 & 닫기 버튼
  btnNavOpen.addEventListener('click',function() {
    navWrap.classList.add('visible');
  });
  btnNavClose.addEventListener('click',function() {
    navWrap.classList.remove('visible');
  });
} topNaviController();
//
// Footer : 패밀리 사이트 선택창
function openSitemap() {
  var footerBtn = document.querySelector('.btn_family'),
      showFamilySite = footerBtn.nextSibling.nextSibling;
    footerBtn.addEventListener('click',function(){
      this.classList.toggle('active');
      showFamilySite.classList.toggle('active');
    });
} openSitemap();
// 서브페이지 네비게이션
function subpageNavi() {
  const subNavBtn = document.getElementsByClassName('btn-subNav');
  for( var i = 0; i < subNavBtn.length; i++ ) {
    subNavBtn[i].addEventListener('click',function(){
      var showNav = this.nextSibling.nextSibling;
      var noshowNav = this.parentNode;
      this.classList.add('active');
      showNav.classList.add('active');
      noshowNav.addEventListener('mouseleave',function(){
        var navBtn = this.firstChild;
        showNav.classList.remove('active');
        navBtn.classList.remove('active');
      });
    });
  }
} subpageNavi();