/*
$(function () {
	// �꾩쭅 �곗씠�곌� �닿��섏� �딆븘
	// �꾩떆濡� ��젣.
	// �섏쨷�� �곗씠�� 蹂듦뎄�섎㈃
	// script_main.bak.js瑜� �ㅼ떆 �ъ슜�� 寃�
	// 2020-05-15 �꾧킅誘�
	$('#section6').remove();
})
*/
$(document).ready(function () {
  mainHeight(); //釉뚮씪�곗� �믪씠 怨꾩궛
  mVisual_resize(); //硫붿씤鍮꾩���
  worldwide(); //�붾뱶���대뱶

  var isFirstFocusAbout = true;

  // ���섏씠吏�
  $("#fullpage").fullpage({
    //verticalCentered    : true,
    //anchors : ['main', 'about', 'brand', 'park', 'csr', 'global', 'news', 'foot'],
    navigation: true,
    navigationTooltips: [
      "Main",
      "About",
      "Skills",
      "Portfolio",
      "Contact",
      "111",
      "222",
    ],
    //navigationTooltips: ['Main', 'About', 'Brand', 'Atomy Park', 'CSR', 'Global'],
    navigationPosition: "right",
    showActiveTooltip: true,
    css3: true,
    scrollingSpeed: 500,
    scrollOverflow: false,
    sectionSelector: ".mainCnts_wrap",
    autoScrolling: true,
    //responsiveWidth	: 1201,
    offsetSections: false,
    afterLoad: function (anchorLink, index) {
      if (index == 2 && isFirstFocusAbout) {
        setTimeout(focusAnimation, 100, 0);
        isFirstFocusAbout = false;
      }

      if (index == 2 || index == 3 || index == 5) {
        $("#fp-nav").addClass("color");
      } else {
        $("#fp-nav").removeClass("color");
      }
      //var loadedSection = $(this);
      //var nextSection = loadedSection.next();
      //var prevSection = loadedSection.prev();
      //if(nextSection.hasClass('fp-auto-height')){
      //	var IScroll = nextSection.find('.fp-scrollable').data('iscrollInstance');
      //	IScroll.scrollTo(0, 0, 0)
      //}
      //if(prevSection.hasClass('fp-auto-height')){
      //	var IScroll = prevSection.find('.fp-scrollable').data('iscrollInstance');
      //	IScroll.scrollTo(0, IScroll.maxScrollY, 0)
      //}
    },
    onLeave: function (prev, next, direction) {
      var $headerAndHurb = $("#header, .mignonHurb_wrap");

      // 硫붾돱 怨좎젙�섍린
      if (next == 1) {
        $headerAndHurb.removeClass("fixed");
      } else {
        $headerAndHurb.addClass("fixed");
      }

      switch (next) {
        case 3:
          $(".skills_wrap").addClass("current");
          break;

        case 4:
          $(".atomypark_wrap").addClass("current");
          break;

        case 5:
          $(".social_wrap").addClass("current");
          break;
      }
    },
    /*scrollOverflowOptions: {
			scrollX: false,
			scrollY: true,
			scrollbars: true,
			useTransform: false,
			useTransition: false,
			probeType: 2,
			click: true
		}*/
  });
  $("#footer").clone().appendTo("#section7 .fp-tableCell");

  //about Atomy �щ씪�대뱶
  $(".aboutMignon_imgbox")
    .on("init", function (e, slick) {
      $(".aboutMignon_num > .count").html(
        "<em>" +
        parseInt(slick.currentSlide + 1) +
        "</em> / " +
        slick.slideCount
      );
    })
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".aboutMignon_count",
      arrows: true,
      fade: false,
      vertical: true,
      verticalSwiping: true,
      touchMove: false,
      prevArrow: '<button class="slick-prev"><i class="xi-long-arrow-up"><span class="hide">Previous</span></i></button>',
      nextArrow: '<button class="slick-next"><i class="xi-long-arrow-down"><span class="hide">Next</span></i></button>',
    });

  $(".aboutMignon_count").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0",
    asNavFor: ".aboutMignon_imgbox",
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: false,
    autoplay: false,
    vertical: true,
    swipe: false,
    touchMove: false,
    useTransform: false,
    transformEnabled: false,
    respondTo: "slider",

    // 諛� �듭뀡�ㅼ� 而ㅼ뒪���� �듭뀡�쇰줈 API�먮뒗 議댁옱�섏� �딆쓬
    noResize: true,
    beforeChangeSync: counterAnimationReset,
  });
  $(".slick-prev")
    .off("click")
    .on("click", function () {
      counterAnimationReset();
      setTimeout(triggerSlickMethod, 100, "slickPrev");
    });
  $(".slick-next")
    .off("click")
    .on("click", function () {
      counterAnimationReset();
      setTimeout(triggerSlickMethod, 100, "slickNext");
    });

  function counterAnimationReset() {
    $(".aboutMignon_count .slick-slide").removeClass("current");
    $(".aboutMignon_count .slick-list").css({
      height: "12.2rem"
    });
  }

  function triggerSlickMethod(event) {
    $(".aboutMignon_imgbox").slick(event);
    $(".aboutMignon_count").slick(event);
  }
  $(".aboutMignon_imgbox").on("afterChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".aboutMignon_num > .count").html(
      "<em>" + parseInt(slick.currentSlide + 1) + "</em> / " + slick.slideCount
    );
  });
  $(".aboutMignon_count").on("afterChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    focusAnimation(nextSlide);
  });

  function focusAnimation(idx) {
    if ($(window).width() < 481) {
      var inFocustransform = (180 + 60 * idx) * -1;
    } else if ($(window).width() < 769) {
      var inFocustransform = (210 + 70 * idx) * -1;
    } else {
      var inFocustransform = (240 + 80 * idx) * -1;
    }
    console.log(inFocustransform);
    // 移댁슫�� �ㅽ겕由쏀듃
    setTimeout(function () {
      // $('.aboutMignon_count .slick-list').css({'height':'22.2rem'});
      $(".aboutMignon_count .slick-track").css({
        top: inFocustransform + "px",
      });
      $(".aboutMignon_count .slick-current").addClass("current");
      $(".item.slick-center .counter").counterUp({
        delay: 10,
        time: 300,
        // 而ㅼ뒪���� �듭뀡�쇰줈 API�먮뒗 議댁옱�섏� �딆쓬.
        useWaypoint: false,
      });
    }, 100);
  }

  //Product �щ씪�대뱶
  $(".products_img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    prevArrow: '<button class="slick-prev"><i class="xi-long-arrow-left"><span class="hide">Previous</span></i></button>',
    nextArrow: '<button class="slick-next"><i class="xi-long-arrow-right"><span class="hide">Next</span></i></button>',
  });

  //�좏꽣誘명뙆��
  $(".atomypark_img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    cssEase: "linear",
  });

  setInterval(function () {
    var time = parseInt($("#mVisualVideo").prop("currentTime"));
    if (time > 13 && time < 16) {
      $(".mVisual_wrap .item > .innerwrap").addClass("active");
    } else {
      $(".mVisual_wrap .item > .innerwrap").removeClass("active");
    }
  }, 500);

  //�뚯뀥
  if ($(window).width() < 980) {
    $(".social_lst").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 500,
    });
  } else {
    $(".sociallst_wrap").mCustomScrollbar({
      axis: "x",
      //theme:"rounded-dots"
    });
  }
});
$(window)
  .bind("load resize", function () {
    var $window = $(window);
    var $windowsWidth = $window.width();
    setTimeout(function () {
      mainHeight();
      mVisual_resize();
    }, 100);
  })
  .trigger("resize");

//釉뚮씪�곗� �믪씠 怨꾩궛
function mainHeight() {
  var $window = $(window);
  var $windowsWidth = $window.width();
  var $windowsHeight = $window.height();
  $(".mainCnts_wrap").css({
    height: $windowsHeight
  });
}
//硫붿씤鍮꾩���
function mVisual_resize() {
  var $node = $(".mVisual_wrap");
  var ratio = 16 / 9;
  var width = $node.parent().width(),
    pWidth,
    height = $node.parent().height(),
    pHeight,
    $av = $("#mVisualVideo");
  if (width / ratio < height) {
    pWidth = Math.ceil(height * ratio);
    $av
      .width(pWidth)
      .height(height)
      .css({
        left: (width - pWidth) / 2,
        top: 0
      });
  } else {
    pHeight = Math.ceil(width / ratio);
    $av
      .width(width)
      .height(pHeight)
      .css({
        left: 0,
        top: (height - pHeight) / 2
      });
  }
}

//네비게이션
function worldwide() {
  var worldParam = $(".worldwide_wrap");
  var worldGroup_btn = worldParam.find(".tabNav_lst a.th1");
  var worldGroup_subbtn = worldParam.find(".tabNav_lst a.th2");
  var worldArea_btn = worldParam.find("a.link");
  var worldGroupActive = false;

  setTimeout(function () {
    //$("#wrap").addClass('intro');
  }, 100);
  //��硫붾돱
  worldGroup_btn.on("click", function () {
    event.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
    var className = $(this).find("> span").text();
    className = className.replace(/\s/gi, "").replace("&", "");
    $("#worldwide_map").removeClass().addClass(className);
    $(".worldwide_tab").addClass("active");
    $(this).trigger("mouseenter");
    worldGroupActive = true;
  });
  worldGroup_btn.on("mouseenter", function () {
    event.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
    var className = $(this).find("> span").text();
    className = className.replace(/\s/gi, "").replace("&", "");
    $("#worldwide_map").removeClass().addClass(className).addClass("current");
    $(this)
      .parents(".worldwide_wrap")
      .find("[aria-id=" + className + "]")
      .addClass("current");
  });
  worldGroup_btn.on("mouseleave", function () {
    if (!worldGroupActive) {
      $(this)
        .parents(".worldwide_wrap")
        .find(".worldwide_group > div")
        .removeClass("active")
        .removeClass("hidden");
      $("#worldwide_map").removeClass();
    }
  });
  worldGroup_subbtn.on("click", function () {
    event.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
    var className2 = $(this).find("> span").text();
    className2 = className2.replace(/\s/gi, "").replace("&", "");
    $("#worldwide_map").removeClass().addClass(className2);
    $(".worldwide_tab").addClass("active");
    $(this)
      .parents(".worldwide_wrap")
      .find(".worldwide_group > ." + className2)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .addClass("hidden");
  });

  var worldAreaBTN = function (event) {
    event.preventDefault();
    if (!$(worldParam).find("> div").hasClass("active")) {
      var className3 = $(this)
        .parent()
        .parent("div")
        .removeClass("current")
        .attr("class");
      $("#worldwide_map").removeClass().addClass(className3);
      $(this)
        .parent()
        .parent("div")
        .addClass("active")
        .siblings()
        .removeClass("active")
        .addClass("hidden");
      //$('.worldwide_tab').addClass('active');
      var groupName = $(this).parent().parent("div").attr("aria-id");
      $('.th1 span:contains("' + groupName + '")').trigger("click");
      $('.th2 span:contains("' + className3 + '")').trigger("click");
    }
  };

  //醫뚰몴 �щ꽕�쇱씠誘몄�
  worldArea_btn.on("click", worldAreaBTN);
  //�꾩껜吏���낫湲곕쾭��
  $(".return").click(function () {
    $(this).parent().removeClass("active");
    $("#worldwide_map").removeClass();
    $(".worldwide_group > div").removeClass("active").removeClass("hidden");
    worldGroupActive = false;
  });

  $(window)
    .on("resize", function () {
      if ($(window).width() < 769) {
        worldArea_btn.off("click");
        $("#worldwide_map").removeClass().addClass("Korea");
        $(".worldwide_wrap")
          .find(".worldwide_group > .Korea")
          .addClass("active")
          .siblings()
          .removeClass("active")
          .addClass("hidden");

        $(".social_lst .item .item_link").click(function () {
          $(this).parent().addClass("active").siblings().removeClass("active");
          var link = $(this).attr("href");
          $(this).after("<a href='" + link + "' class='social_more'></a>");
          return false;
        });
      } else {
        worldArea_btn.on("click", worldAreaBTN);
      }
    })
    .trigger("resize");

  $("#mobileCountry").on("change", function () {
    var mobileCountrySelName = $(this).val();
    mobileCountrySelName = mobileCountrySelName
      .replace(/\s/gi, "")
      .replace("&", "");
    $("#worldwide_map").removeClass().addClass(mobileCountrySelName);
    $(".worldwide_wrap")
      .find(".worldwide_group > ." + mobileCountrySelName)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .addClass("hidden");
  });
}
/**
 * 硫붿씤�붾㈃ Shoppong Mall 留곹겕
 * �쒓렇濡� 愿�由ы븯硫� 留곹겕 諛붾�� �뚮쭏�� 紐⑤뱺 �ㅺ뎅�� �섏씠吏�瑜� �꾨� �섏젙�댁빞 �섎�濡�
 * �섏젙�� �⑹씠�깆쓣 �꾪빐 留곹겕�섏씠吏�瑜� �ㅽ겕由쏀듃濡� 愿�由ы븳��.
 */
$(function () {
  var link = {
    Korea: {
      pc: "http://www.atomy.kr/v2/Home/Product/MallMain",

      m: "http://m.atomy.com/kr/m/shop",
    },

    USA: {
      pc: "http://www.atomy.com/us/Home/Product/MallMain",

      m: "http://m.atomy.com/us/shop/index",
    },

    Japan: {
      pc: "http://www.atomy.com/jp/Home/Product/MallMain",

      m: "http://m.atomy.com/jp/shop/index",
    },

    Canada: {
      pc: "https://www.atomy.com:449/ca/Home/Product/MallMain",

      m: "http://m.atomy.com/ca/shop/index",
    },

    Taiwan: {
      pc: "http://www.atomy.com/tw/Home/Product/MallMain",

      m: "http://m.atomy.com/tw/shop/index",
    },

    Singapore: {
      pc: "http://www.atomy.com/sg/Home/Product/MallMain",

      m: "http://m.atomy.com/sg/shop/index",
    },

    Cambodia: {
      pc: "http://www.atomy.com/kh/Home/Product/MallMain",

      m: "http://m.atomy.com/kh/shop/index",
    },

    Philippines: {
      pc: "http://www.atomy.com/ph/Home/Product/MallMain",

      m: "http://m.atomy.com/ph/shop/index",
    },

    Malaysia: {
      pc: "http://www.atomy.com/my/Home/Product/MallMain",

      m: "http://m.atomy.com/my/shop/index",
    },

    Mexico: {
      pc: "https://www.atomy.com/mx/Home/Product/MallMain",

      m: "http://m.atomy.com/mx/shop/index",
    },

    Thailand: {
      pc: "http://www.atomy.com/th/Home/Product/MallMain",

      m: "http://m.atomy.com/th/shop/index",
    },

    Australia: {
      pc: "http://www.atomy.com/au/Home/Product/MallMain",

      m: "http://m.atomy.com/au/shop/index",
    },

    Indonesia: {
      pc: "http://www.atomy.com/id/Home/Product/MallMain",

      m: "http://m.atomy.com/id/shop/index",
    },
    Russia: {
      pc: "https://www.atomy.ru/ru/Home/Product/MallMain",
      m: "http://m.atomy.com/ru/shop/index",
    },
  };

  $(".worldwide_group").on("click", ".link-mall", function (e) {
    e.preventDefault();

    var target = $(window).width() > 768 ? "pc" : "m";

    var country = $(this).data("country");

    if (link[country]) {
      window.open(link[country][target], "_blank");
    }
  });
});

// �ㅽ겕由쏀듃
/*
 * 硫붿씤 �곸긽 ���좎뿉 css animation(main.css)�쇰줈 援ы쁽�쒕떎.
 * fadeIn, fadeOut �④낵�� jQuery濡� �쇰떒 援ы쁽��.
 */
$(function () {
  var $queue = [];

  // �좊땲硫붿씠�� �щ씪�대뱶 �대�吏� �ㅼ젙 諛� �� 珥덇린��
  $(".main_slide").each(function () {
    var $this = $(this);

    $this.css("background-image", "url(" + $this.data("image") + ")");
    $queue.push($this);
  });

  function anim() {
    // �� 留� �욎뿉 �덈뒗 �붿냼瑜� 爰쇰궦��.
    var $current = $queue.shift();

    // data-effect attribute 媛� 李멸퀬
    $current.addClass($current.data("effect"));

    setTimeout(function () {
      // �꾩옱 �붿냼�� �ㅼ쓬 �붿냼瑜� �섏씠�쒖씤�쒕떎.
      $queue[0].fadeIn(1000);

      // �꾩옱 �붿냼瑜� �섏씠�쒖븘�� �섍퀬, �앸굹硫� �대옒�� �쒓굅
      $current.fadeOut(1000, function () {
        $(this).removeClass("zoomIn zoomOut moveLeft");
      });

      $queue.push($current);

      anim();
    }, 3000);
  }

  anim();
});