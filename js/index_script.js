//swiper-slider
let swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  autoplay: {
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    activeIndexChange: function(){
      // console.log(this.realIndex)
      let bgColors=['#d8e22d','#3d435f','#c81b21','#3d435f','#f34689','#3d435f'];
      let bgColorIdx=bgColors[this.realIndex];

      $('.bg').css('background', bgColorIdx);
    }
  }
});



//header
$('.nav-celeb').hover(function(){
  $('.header-hide').addClass('visible');
  $('.celeb-flip').removeClass('hide');
  $('.header-effect').addClass('visible');
  $('.header-nav-wrap.fixed').css('background','none');
},function(){
  $('.header-hide').removeClass('visible');
  $('.celeb-flip').addClass('hide');
  $('.header-effect').removeClass('visible');
  $('.header-nav-wrap.fixed').css('background','rgba(255,255,255,.9)');
});
$('.nav-product').hover(function(){
  $('.header-hide').addClass('visible');
  $('.product-flip').addClass('active');
  $('.header-effect').addClass('visible');
  $('.header-nav-wrap.fixed').css('background','none');
},function(){
  $('.header-hide').removeClass('visible');
  $('.product-flip').removeClass('active');
  $('.header-effect').removeClass('visible');
  $('.header-nav-wrap.fixed').css('background','rgba(255,255,255,.9)');
});

$('.celeb-flip>ul>li>a').each(function(){
  let celeb=$(this)
  let celebCir=$(celeb).find('>span');
  let tab=$('.celeb-flip .album-box');
  let lastCeleb;
  let lastTab;

  lastCeleb=celeb.filter('.on');
  lastTab=$(lastCeleb.attr('href'));

  tab.hide();
  lastTab.show();

  $(celeb).hover(function(){
    let cntCeleb=$(this)
    let cntTab=$(celeb.attr('href'));

    cntCeleb.addClass('on');
    cntTab.show();

    let celebIdx=celeb.parent().index();
    let celebColors=['#fbcf1d','#c81b21','#006bd5','#f34689','#78dbd9','#cda5e0','#75787b','#f8877a','#d8e22d','#d8e22d','#f9dee6','linear-gradient(0.4turn,#c78cdc,#9aedff)'];
    let celebC=celebColors[celebIdx];
  
    celeb.css('fontWeight','500').addClass('on');
    celebCir.addClass('visible').css('background', celebC);
  },function(){
    let cntCeleb=$(this)
    let cntTab=$(celeb.attr('href'));

    lastCeleb.removeClass('on');
    lastTab.hide();

    lastCeleb=cntCeleb;
    lastTab=cntTab;

    celeb.css('fontWeight','400').removeClass('on');
    celebCir.removeClass('visible');
  });
});



//header-fix
let header=$('.header-nav-wrap');
let headerOffsetTop=header.offset().top;

$(window).scroll(function(){
    if($(this).scrollTop()>=headerOffsetTop){
        header.addClass('fixed');
        $('.header-nav .logo img').attr({src: './img/header/B/Logo_fix.svg'});
        $('.header-nav .mypage img').attr({src: './img/header/B/M_My.svg'});
        $('.header-nav .search img').attr({src: './img/header/B/M_Search.svg'});
        $('.header-nav .cart img').attr({src: './img/header/B/M_Cart.svg'});
        $('.header-nav .collect img').attr({src: './img/header/B/M_Collection.svg'});
    }else{
        header.removeClass('fixed');
        $('.header-nav .logo img').attr({src: './img/header/W/Logo_Default.svg'});
        $('.header-nav .mypage img').attr({src: './img/header/W/M_My.svg'});
        $('.header-nav .search img').attr({src: './img/header/W/M_Search.svg'});
        $('.header-nav .cart img').attr({src: './img/header/W/M_Cart.svg'});
        $('.header-nav .collect img').attr({src: './img/header/W/M_Collection.svg'});
    }
})



//content-s02-tab
$('.content-s02').each(function(){
    let tabDiv=$(this);
    let anchors=tabDiv.find('ul li a');
    let panelDiv=tabDiv.find('.content-s02-product .prd-tab');
    let lastAnchor;
    let lastPanel;
    let cirT=$('.content-s02-celeb-t li a').find('>span');
    let cirB=$('.content-s02-celeb-b li a').find('>span');
    let prdCirT=$('.content-s02-prd-t .prd-cir');
    let prdCirB=$('.content-s02-prd-b .prd-cir');

    lastAnchor=anchors.filter('.on');
    lastPanel=$(lastAnchor.attr('href'));

    panelDiv.hide();
    lastPanel.show();

    anchors.click(function(e){
        e.preventDefault();
        let currentAnchor=$(this);
        let currentPanel=$(currentAnchor.attr('href'));

        lastAnchor.removeClass('on');
        currentAnchor.addClass('on');

        lastPanel.hide();
        currentPanel.show();
        lastAnchor=currentAnchor;
        lastPanel=currentPanel;

        
        let bgColorsT=['#fbcf1d','#c81b21','#006bd5','#f34689','#78dbd9','#cda5e0'];
        let bgColorsB=['#75787b','#f8877a','#d8e22d','#d8e22d','#f9dee6','linear-gradient(0.4turn,#c78cdc,#9aedff)'];

        let i=currentAnchor.parent().index();
        // console.log(i);
        let bgCT=bgColorsT[i];
        let bgCB=bgColorsB[i];

        cirT.css('background', bgCT);
        cirB.css('background', bgCB);
        prdCirT.css('background', bgCT);
        prdCirB.css('background', bgCB);
    });
});