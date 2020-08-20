//OS 泥댄겕 遺덈┛媛� �꾨떖 window ��, window 湲곕컲 �쒕툝由퓈c �먯꽌 �뚯뒪�멸� �꾩슂��
function chaked_OS() {
    var device = navigator.userAgent
    var str = device.split(';')
    str = str[0].split('(')
    str = str[1].split(' ')
    var chkOS = false
    if (str[0] != 'Windows' && str[0] != 'Macintosh' && str[0] != 'compatible') {
        chkOS = true // �곗뒪�ы깙�� �꾨땺 �� true
    }
    return chkOS
}
//MSIE 9�댄븯 踰꾩쟾泥댄겕
function ms_ver() {
    if (navigator.userAgent.match('MSIE')) {
        var msie = navigator.userAgent
        var ms_ver = msie.substr(msie.lastIndexOf('MSIE')).split('MSIE')[1]
        ms_ver = Number(ms_ver.split('.')[0])
        return ms_ver
    } else {
        return null
    }
}

$(document).ready(function () {
    // �ㅽ겕濡ㅻℓ吏�
    // reverse(false)瑜� 二쇰㈃
    // �붾㈃�먯꽌 �щ씪�몃룄
    // �좉� �덈맂��.
    var controller = new ScrollMagic.Controller()
    var scene_list = '.areaScene1, .areaScene2, .areaScene3, .areaScene4, .areaScene5, .areaScene6, .areaScene7'.split(', ')
    scene_list.forEach(function (triggerElSelector) {
        var scene = new ScrollMagic.Scene({
            triggerElement: triggerElSelector,
            triggerHook: 0.8,
        })
            .setClassToggle(triggerElSelector, 'is-active')
            .reverse(false)
            .addTo(controller)
    })

    $('.title_wrap').each(function () {
        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
        })
            .setClassToggle(this, 'is-active')
            .reverse(false)
            .addTo(controller)
    })

    $('.img').each(function () {
        var tl = new TimelineMax()
        var img = $(this).find('.imgTween')
        var $_container = $('<div class="tweenImg"/>')
        if (img.length > 0) {
            $_container.append(img.eq(0))
            $(this).append($_container)
        }

        tl.fromTo(img, 1, { y: -60 }, { y: 60, ease: Linear.easeNone })
        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8,
            offset: 50,
            duration: '100%',
        })
            .setTween(tl)
            .reverse(false)
            .addTo(controller)
    })

    $('.aboutFounderDesc').each(function () {
        // $(this).find(".img").each(function(){
        // 	var tl = new TimelineMax();
        // 	//var y = $(this).data('y');
        // 	tl.to($(this), 1, {y: -75, ease: Linear.easeNone });
        // 	var scene = new ScrollMagic.Scene({
        // 		triggerElement: this,
        // 		triggerHook: "0.5",
        // 		duration: "100%"
        // 	})
        // 	.setTween(tl)
        // 	.addTo(controller);
        // });
    })
    $('.historyCnts').each(function () {
        // if(! $(this).hasClass('type3')){
        // 	$(this).find(".img_lst").each(function(){
        // 		var tl = new TimelineMax();
        // 		//var y = $(this).data('y');
        // 		tl.to($(this), 1, { y: -100, ease: Linear.easeNone });
        // 		var scene = new ScrollMagic.Scene({
        // 			triggerElement: this,
        // 			triggerHook: "0.5"
        // 			//offset: 250
        // 		})
        // 		.setTween(tl)
        // 		.addTo(controller);
        // 	});
        // }
    })

    skrollr.init({
        forceHeight: false,
        mobileCheck: function () {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera)
        },
    })

    selectDesign() // ���됲듃諛뺤뒪 �붿옄��
    languageSel() // �몄뼱�좏깮
    depthSel() // 寃쎈줈�좏깮
    snavUtil() // 怨듭쑀

    openGuide() // �ㅽ뵂媛��대뱶
    philosophy() // 寃쎌쁺泥좏븰

    mobileAtomyHub() // 紐⑤컮�� �좏꽣誘� �덈툕 �곸슜
    handleGNBAndMenusEvent() // GNB, 硫붾돱 �� �대깽�� 泥섎━
    addAtomyHubEventListener() // �좏꽣誘� �덈툕
    initAtomyHubCustomScrollbar() // �좏꽣誘명뿀釉� �ㅽ겕濡ㅻ컮

    layerPopup() // �덉씠�댄뙘��

    // �곷떒�쎌뒪
    // �곷떒�쎌뒪 二쇱꽍泥섎━�섏뼱�덉뼱 �묐찓�대쾭�� �섏삤吏� �딅뜕寃� �섏젙
    var headerOffset = $('#header').offset()
    $(window).scroll(function () {
        if ($(document).scrollTop() > headerOffset.top) {
            $('#header, .mignonHurb_wrap').addClass('fixed')
        } else {
            $('#header, .mignonHurb_wrap').removeClass('fixed')
        }
    })

    //TOP踰꾪듉
    $('.btn_top > a').on('click', function (event) {
        if ($('html').hasClass('fp-enabled')) {
            $.fn.fullpage.moveTo(1)
        } else {
            $('html,body').animate(
                {
                    scrollTop: 0,
                },
                200
            )
        }
        return false
    })

    //Brand Story
    $('.brandStory_wrap .products_lst>li>a').on('click', function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active')
        } else {
            $(this).parent().addClass('active').siblings().removeClass('active')
        }
        return false
    })
})

// �ㅽ겕濡ㅼ떆 �뱀젙�곸뿭�� �대옒��
$(window).scroll(function () {
    $('#fullpage > article').each(function () {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight()
        var bottom_of_window = $(window).scrollTop() + $(window).height() / 2
        if (bottom_of_window > bottom_of_object - $(window).height()) {
            $(this).addClass('scroll-fade')
        }
    })
})

//���됲듃諛뺤뒪 �붿옄��
/*
function selectDesign(){
	var select = $("select.info-select");
	select.siblings('label').remove().end().before('<label></label>');
	$(document).on('change', 'select.info-select', function(){
		var select_name = $(this).find('option:selected').text();
		$(this).siblings('label').text(select_name);
		$(this).parent().addClass("active");
	});
	select.trigger('change');
}
*/
function selectDesign() {
    var select = $('select.info-select')
    select
        .mousedown(function () {
            $(this).parent().addClass('active')
        })
        .change(function () {
            var select_name = $(this).find('option:selected').text()
            $(this).siblings('label').text(select_name)
            $(this).parent().removeClass('active')
        })
    select.trigger('change')
}

//�꾩껜硫붾돱, 湲�濡쒕쾶硫붾돱 �대깽��
function handleGNBAndMenusEvent() {
    // gnb 愿��� �대깽��
    addMenuHoverEventEmitter()
    addMenuOpenCloseEventListener()

    // �붾㈃ 由ъ궗�댁쫰 愿��� �대깽��
    addWindowResizeEventListener()
    addResetStateEventListener()

    // �꾨쾭嫄� 硫붾돱 愿��� �대깽��
    addHamburgerMenuEventEmitter()

    // 紐⑤컮�� 硫붾돱 愿��� �대깽��
    addMobileMenuEventListener()
}

/**
 * 硫붾돱瑜� �닿퀬 �ル뒗 �대깽�� 由ъ뒪�덈� �ㅼ젙�쒕떎.
 */
function addMenuOpenCloseEventListener() {
    $('#header').on('open-fixed', function (e) {
        var device = getCurrentDevice()
        switch (device) {
            case 'pc':
                $(this).addClass('allMenu')
                break
            case 'mobile':
                $(this).add('.mignonHurb_wrap').addClass('mobile')
                break
        }
    })

    $('#header').on('close-fixed', function (e) {
        $(this).add('.mignonHurb_wrap').removeClass('allMenu mobile')
    })
    $('#header').on('open-hover', function (e) {
        if (getCurrentDevice() === 'mobile') {
            return true
        }
        $(this).addClass('current')
    })
    $('#header').on('close-hover', function (e) {
        if (getCurrentDevice() === 'mobile') {
            return true
        }
        $(this).removeClass('current')
    })
}

/**
 * PC<->紐⑤컮�� �꾪솚�� 硫붾돱 �곹깭 珥덇린�� �대깽�� 由ъ뒪�덈� �ㅼ젙�쒕떎.
 */
function addResetStateEventListener() {
    $('#header').on('reset', function (e) {
        var device = getCurrentDevice()
        switch (device) {
            case 'pc':
                // slideUp, Down�쇰줈 �명빐 �앷릿 display �띿꽦��
                // �쒓굅�댁빞 硫붾돱媛� �щ컮瑜닿쾶 �쒖떆�쒕떎.
                $('#header .depth2_wrap').removeAttr('style')
                $('#header .th1.active').removeClass('active')
                break
            case 'mobile':
                $('#header .depth2_wrap').css('display', 'none')
                break
        }

        // �붾㈃ 諛붾�뚮㈃ 硫붾돱 臾댁“嫄� �リ린
        if ($('#header .btn_allMenu').hasClass('active')) {
            $('#header .btn_allMenu').trigger('click')
        }
    })
}

/**
 * �붾㈃ 由ъ궗�댁쫰 �먯쓣 �� �ㅻ뜑硫붾돱�곹깭 諛� �좏꽣誘명뿀釉� �곹깭瑜� 珥덇린�뷀븯�� �대깽�몃� 諛쒖깮�쒗궓��.
 */
function addWindowResizeEventListener() {
    var state = getCurrentDevice()

    $(window).on('resize', function () {
        var currentDevice = getCurrentDevice()
        // �댁쟾 �곹깭�� 媛숈쑝硫� �꾨Т寃껊룄 �섏� �딅뒗��.
        if (currentDevice === state) {
            return true
        }
        state = currentDevice

        // �ㅻ뜑硫붾돱 珥덇린 硫붿씤 �곹깭濡� 由ъ뀑
        $('#header').trigger('reset')

        // �좏꽣誘명뿀釉� 硫붾돱 �대젮�덉쑝硫� �リ린
        $('.mignonHurb_wrap').removeClass('active')
    })
}

/**
 * 硫붾돱�� 留덉슦�� �щ졇�� �� �대깽�몃� 諛쒖깮�쒗궓��.
 */
function addMenuHoverEventEmitter() {
    $('#gnavigation').on('mouseenter', function () {
        $('#header').trigger('open-hover')
    })

    $('#header').on('mouseleave', function () {
        $('#header').trigger('close-hover')
    })

    $('#gnavigation .th1').on('focusin', function () {
        $('#header').trigger('open-hover')
    })
}

/**
 * �꾨쾭嫄곕찓�� �대┃�덉쓣 �� �대깽�몃� 諛쒖깮�쒗궓��.
 */
function addHamburgerMenuEventEmitter() {
    $('.btn_allMenu').on('click', function () {
        if ($(this).hasClass('active')) {
            $('#header').trigger('close-fixed', getCurrentDevice())
        } else {
            $('#header').trigger('open-fixed', getCurrentDevice())
        }
        $(this).toggleClass('active')
    })
}

/**
 * 紐⑤컮�쇰찓��
 */
function addMobileMenuEventListener() {
    $('#header .th1').on('click', function (e) {
        var device = getCurrentDevice()
        if (device === 'pc') {
            return true
        }
        // 紐⑤컮�쇱뿉�쒕뒗 �� 硫붾돱瑜� �대┃�섎㈃ 留곹겕濡� �섏뼱媛�吏�硫� �� �쒕떎.
        e.preventDefault()
        var $currentTh1 = $(this)
        if ($currentTh1.hasClass('active')) {
            $(this).removeClass('active').next().stop(true).slideUp(300)
        } else {
            $currentTh1.addClass('active')
            $currentTh1
                .next()
                .stop(true)
                .slideDown(300, function () {
                    $('.th1.active').not($currentTh1).removeClass('active').next().stop(true).slideUp(300)
                })
        }
        //$('.mignonHurb_wrap').addClass('active');//atomy hub�ロ엳寃�
    })
}

function getCurrentDevice() {
    return $(window).width() >= 1200 ? 'pc' : 'mobile'
}

//�몄뼱�좏깮
function languageSel() {
    var languageSel_param = $('.languageSel')
    var languageSel_obj = languageSel_param.find('#languageList')
    var languageSel_btn = languageSel_param.find(' > dt > a')
    languageSel_btn.on('click', function (event) {
        event.preventDefault()
        var t = $(this)
        if (t.parent().next('#languageList').css('display') == 'none') {
            //languageSel_btn.parent().removeClass("fold");
            t.parent().addClass('fold')
            //languageSel_obj.stop(true,true).slideUp(300);
            t.parent().next('#languageList').stop(true, true).slideDown(300)
        } else {
            t.parent().removeClass('fold')
            t.parent().next('#languageList').stop(true, true).slideUp(300)
        }
        return false
    })
    /*
	languageSel_param.on("mouseleave",function(){
		languageSel_btn.parent().removeClass("fold");
		languageSel_btn.parent().next('#languageList').stop(true,true).slideUp(300);
	});
	*/
}

//寃쎈줈�좏깮
function depthSel() {
    var depthSel_param = $('#snavigation')
    var depthSel_obj = depthSel_param.find('> li > ul')
    var depthSel_btn = depthSel_param.find('> li > a')
    depthSel_btn.on('click', function (event) {
        event.preventDefault()
        var t = $(this)
        if (t.next('ul').css('display') == 'none') {
            depthSel_btn.removeClass('active')
            t.addClass('active')
            depthSel_obj.stop(true, true).slideUp(300)
            t.next('ul').stop(true, true).slideDown(300)
        } else {
            t.removeClass('active')
            t.next('ul').stop(true, true).slideUp(300)
        }
        return false
    })
    depthSel_param.on('mouseleave', function () {
        depthSel_btn.removeClass('active')
        depthSel_btn.next('ul').stop(true, true).slideUp(300)
    })
}
//怨듭쑀
function snavUtil() {
    var snavUtil_param = $('.snav_util')
    var snavUtil_obj = snavUtil_param.find('.share_wrap')
    var snavUtil_btn = snavUtil_param.find('a.share')
    snavUtil_btn.on('click', function (event) {
        event.preventDefault()
        var t = $(this)
        if (snavUtil_obj.css('display') == 'none') {
            t.addClass('active')
            snavUtil_obj.stop(true, true).slideDown(300)
        } else {
            snavUtil_obj.stop(true, true).slideUp(300)
        }
        $('#side #snavigation > li > a.th2').removeClass('active')
        $('#side #snavigation > li > a.th2').next('.depth_lst').stop(true, true).slideUp(300)
        return false
    })
    $('#snavigation').on('mouseleave', function () {
        snavUtil_btn.removeClass('active')
        snavUtil_obj.stop(true, true).slideUp(300)
    })

    $('#side .snav_util a.print').on('focusin', function (event) {
        event.preventDefault()
        snavUtil_btn.removeClass('active')
        snavUtil_obj.stop(true, true).slideUp(300)
    })
}

/**
 * �ㅻⅨ履� �섎떒�� ATOMY HUB �대┃ �대깽�몃━�ㅻ꼫瑜� �ㅼ젙�쒕떎.
 */
function addAtomyHubEventListener() {
    $('.mignonHurb_wrap .btn_wrap > a').on('click', function (e) {
        e.preventDefault()

        var $parent = $(this).closest('.mignonHurb_wrap')

        if ($parent.hasClass('active')) {
            $('.mobile #gnavigation .th1').removeClass('active') // 紐⑤컮�쇱뿉�� atomyhub瑜� �대┃�덉쓣�� �쒕툕硫붾돱 �ロ엳寃�
        }

        $parent.toggleClass('active')
    })

    // �덈툕 �대졇�� �� �リ린 踰꾪듉 �대깽�� �ㅼ젙
    $('.hub_close > a').on('click', function (e) {
        e.preventDefault()
        $('.mignonHurb_wrap').removeClass('active')
    })
}

/**
 * �좏꽣誘명뿀釉뚯뿉 mCustomScrollbar瑜� �곸슜�쒕떎.
 */
function initAtomyHubCustomScrollbar() {
    $('.mignonHurb_lst > .mignonHurblst').mCustomScrollbar()
}

/**
 * 紐⑤컮�� �좏꽣誘� �덈툕 硫붾돱瑜� 留뚮뱺��.
 */
function mobileAtomyHub() {
    var $hub = $('.mignonHurblst').eq(0).clone()

    var $li = $('<li>').addClass('only_mobile_hub')
    var $hubTitle = $('<a class="th1"><span>ATOMY HUB</span></a>')

    $li.append($hubTitle)
    $li.append($hub)

    $('#gnavigation').append($li)
}

/**
 * �꾩옱 �� �⑥닔 ���좎뿉
 * addAtomyHubEventListener,
 * initAtomyHubCustomScrollbar,
 * mobildAtomyHub
 * �⑥닔瑜� �ъ슜以묒엯�덈떎.
 */
function hurbSel() {
    var hurbSel_param = $('.mignonHurb_wrap')
    var hurbSel_btn = hurbSel_param.find(' > .btn_wrap > a')
    var hurbSel_lst = $('.mignonHurb_lst')
    var html = hurbSel_param.find('.btn_wrap').html()
    var html2 = $('.mignonHurblst').html()

    if ($(window).width() > 768) {
        $('.mignonHurb_lst > .mignonHurblst').mCustomScrollbar()
        $('.menu_atomyhurb').hide()
        hurbSel_btn.show()
        hurbSel_param.show()
        hurbSel_lst.show()
    } else {
        hurbSel_btn.hide()
        hurbSel_lst.hide()
        //$(".mignonHurb_lst > .mignonHurblst").mCustomScrollbar('destroy');
        if ($('#gnavigation li').hasClass('menu_atomyhurb')) {
            $('.menu_atomyhurb').css('display', 'block')
        } else {
            $('#gnavigation').append("<li class='menu_atomyhurb'><div class='depth2_wrap'></div></li>")
            $('#gnavigation>li.menu_atomyhurb').prepend(html)
            $('#gnavigation>li.menu_atomyhurb .depth2_wrap').append(html2)
        }

        $('.menu_atomyhurb .th1').on('click', function () {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active').next().css('display', 'block')
                $(this).parent().siblings().find('.th1').removeClass('active').next().css('display', 'none')
            } else {
                $(this).removeClass('active').next().css('display', 'none')
            }
        })
    }
}

//�띿뒪�몄븷�덈찓�댁뀡
function typeAni() {
    $('.active .typingEff').each(function () {
        var i
        var typing
        var txt = $(this)
        i = 0
        if (txt.find('em').css('opacity') == '0') {
            typing = setInterval(function () {
                i++
                i = i >= txt.find('em').length + 1 ? 0 : i
                txt.find('em')
                    .eq(i - 1)
                    .addClass('on')
            }, 130)
        }
    })
}

//寃쎌쁺泥좏븰
function philosophy() {
    var philosophy_param = $('.philosophy_wrap')
    var philosophy_obj = philosophy_param.find('.philosophy_lst')
    var philosophy_btn = philosophy_param.find(' > h2 > a')
    philosophy_btn.on('click', function (event) {
        event.preventDefault()
        var t = $(this)
        if (t.parent().next('.philosophy_lst').css('display') == 'none') {
            //philosophy_btn.parent().removeClass("active");
            t.parent().addClass('active')
            //philosophy_obj.stop(true,true).slideUp(300);
            t.parent().next('.philosophy_lst').show()
        } else {
            t.parent().removeClass('active')
            t.parent().next('.philosophy_lst').hide()
        }
        return false
    })
    philosophy_param.on('mouseleave', function () {
        //philosophy_btn.parent().removeClass("active");
        //philosophy_btn.parent().next('.philosophy_lst').stop(true,true).slideUp(300);
    })
}

//4��湲곗닠
function fourTech() {
    if ($(window).width() > 768) {
        var $list = $('.technology_lst > li')
        var currentIdx = 0
        var init = false
        var ref = null
        // �リ린 踰꾪듉
        var $closeButton = $('.techCloseBtn > a')
        var autoSlideMs = 6000
        // 留� 泥섏쓬�� 3珥� �ㅼ뿉 �щ씪�대뱶 �≪뀡�섍쾶 �명꽣踰� 嫄대떎.
        var waitTrigger = setInterval(function () {
            if (!$('#hemohim01,#theFame06,#cellActive05').hasClass('active')) {
                return
            }
            clearInterval(waitTrigger)
            ref = setInterval(intervalFunction, autoSlideMs)
        }, 500)

        // �먮룞 �щ씪�대뱶 �명꽣踰� �⑥닔
        function intervalFunction() {
            if (currentIdx >= $list.length) {
                currentIdx = 0
            }
            close()
            open.call($list.eq(currentIdx), currentIdx)
            currentIdx++
        }
        $list.each(function () {
            var $this = $(this)
            var ind = $this.index()
            var eff = $this.find('> a')
            eff.on('mouseenter', function () {
                close()
                open.call($this, ind)
                clearInterval(ref)
            })
        })
        $closeButton.on('click', close)
        function open(idx) {
            $('.technology_lst > li').removeClass('current')
            $('.technology_detail > div').removeClass('active')
            this.addClass('current')
            $('.technology_detail > div').eq(idx).addClass('active')
            $('#hemohim01').addClass('fixActive')
            $('#theFame06').addClass('fixActive')
            $('#cellActive05').addClass('fixActive')
        }
        function close() {
            $('.technology_lst > li').removeClass('current')
            $('.technology_detail > div').removeClass('active')
            $('#hemohim01').removeClass('fixActive')
            $('#theFame06').removeClass('fixActive')
            $('#cellActive05').removeClass('fixActive')
        }
    }
}
//釉뚮옖�� �곸긽
function brandVideo() {
    var $node = $('.brandVideo')
    var ratio = 16 / 9
    var width = $node.width(),
        pWidth,
        height = $node.height(),
        pHeight,
        $av = $('#brandVideo')
    if (width / ratio < height) {
        pWidth = Math.ceil(height * ratio)
        $av.width(pWidth)
            .height(height)
            .css({ left: (width - pWidth) / 2, top: 0 })
    } else {
        pHeight = Math.ceil(width / ratio)
        $av.width(width)
            .height(pHeight)
            .css({ left: 0, top: (height - pHeight) / 2 })
    }
}
function fallback(video) {
    var img = video.querySelector('img')
    if (img) video.parentNode.replaceChild(img, video)
}
//�덉씠�댄뙘��
function layerPopup() {
    var layerParam = $('#wrap')
    var layerBtn = layerParam.find("a[aria-button='layerpopup']")
    var layerClose = $('#layerpopup .btn_close > a')

    layerBtn.on('click', function (event) {
        event.preventDefault()
        if ($('#layerpopup').css('display') == 'none') {
            $('#layerpopup').stop(true, true).show()
            // $('#layerpopup').find('.layerpopup_container').stop(true,true).delay(400).slideDown(300);
        } else {
            $('#layerpopup').stop(true, true).hide()
            // $('#layerpopup').find('.layerpopup_container').stop(true,true).delay(400).slideUp(300);
        }

        if ($(this).parents('figure').hasClass('historyCnts')) {
            t = $(this)
            $('.majorActivity').hide()
            var href = t.attr('href')
            $(href).show()
        }

        // if ($(this).parents('div').hasClass('mignonHurb_wrap') || $(this).parents('.only_mobile_hub').length > 0) {
        //     t = $(this)
        //     $('.corpHub_wrap').hide()
        //     var href = t.attr('href')
        //     $(href).show()
        // }
    })

    layerClose.on('click', function (event) {
        event.preventDefault()
        var t = $(this)
        if (t.parents('#layerpopup').css('display') == 'none') {
            t.parents('#layerpopup').stop(true, true).show()
            // t.parents('.layerpopup_container').stop(true,true).delay(150).slideDown(300);
        } else {
            t.parents('#layerpopup').stop(true, true).hide()
            // t.parents('.layerpopup_container').stop(true,true).slideUp(300);
        }
    })

    $('#layerpopup .layerpopup_overlay').on('click', function (event) {
        event.preventDefault()
        var t = $(this)
        if (t.parents('#layerpopup').css('display') == 'none') {
            t.parents('#layerpopup').stop(true, true).show()
            // t.parents('.layerpopup_container').stop(true,true).delay(150).slideDown(300);
        } else {
            t.parents('#layerpopup').stop(true, true).hide()
            // t.parents('.layerpopup_container').stop(true,true).slideUp(300);
        }
    })
}
//�ㅽ뵂媛��대뱶
function openGuide() {
    var openGuideParam = $('#detail_content')
    var openGuideClose = $('.openGuide_close > a')
    openGuideClose.on('click', function (event) {
        event.preventDefault()
        var t = $(this)
        if (t.parents('.openGuide_wrap').css('display') == 'none') {
            t.parents('.openGuide_wrap').stop(true, true).slideDown(300)
            t.parents('.openGuide').stop(true, true).delay(150).slideDown(300)
        } else {
            t.parents('.openGuide_wrap').stop(true, true).delay(150).slideUp(300)
            t.parents('.openGuide').stop(true, true).slideUp(300)
        }
    })
}

//�ы쉶怨듯뿄 �명듃濡�
function socialIntro() {
    $('.contribution_lst > li').each(function () {
        var $window = $(window)
        var $windowsWidth = $window.width()
        var $this = $(this)
        var ind = $(this).index()
        var socialBtn = $(this).find('> a')
        if ($windowsWidth > 980) {
            socialBtn.on('mouseenter', function () {
                open()
            })
            socialBtn.on('mouseleave', function () {
                close()
            })
        }
        function open() {
            $('.contribution_lst').removeClass('active')
            $('.contribution_lst > li').removeClass('current')
            $this.parent().addClass('active')
            $this.addClass('current')
            setTimeout(function () {
                if ($this.hasClass('current')) {
                    $this.find('.caption_wrap').addClass('active')
                }
            }, 150)
            $('.contributionBG_lst > li').removeClass('bgActive')
            $('.contributionBG_lst > li').eq(ind).addClass('bgActive')
        }
        function close() {
            $('.contribution_lst').removeClass('active')
            $('.contribution_lst > li').removeClass('current')
            $('.contribution_lst .caption_wrap').removeClass('active')
        }
    })
}

//�댁뒪
function newsArchive() {
    var $window = $(window)
    var $windowsWidth = $window.width()
    if ($windowsWidth > 640) {
        $('.newsArchive_contents .coverStory_wrap').mCustomScrollbar({
            //theme:"rounded-dots"
        })
    }
}

// �좏꽣誘명뙆�� 鍮꾩���
function atomyparkVisualHeight() {
    var $window = $(window)
    var $windowsWidth = $window.width()
    var $windowsHeight = $window.height()
    $('.atomyparkVisual_wrap').css({ height: $windowsHeight })
}

//湲�濡쒕쾶 �좏꽣誘� �뚯썝媛���
$(document).ready(function () {
    $('.join_link').attr('href', 'https://www.atomy.kr/v2/Home/Account/MemberJoin')
    $('#corpJoin .corpHub_lst > li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.selet_box').click(function () {
        $(this).toggleClass('active')
    })

    $('#corpJoin .info-select').change(function () {
        var val = $(this).val()
        $('.join_link').attr('href', val)
    })
})

// 2020.05.11 �꾧킅誘� �앹뾽李� �섏젙

//layerpopup �곗씠�곌컪 蹂�寃�
$(document).ready(function () {
    var $shoppopup = $('#shoppopup')

    // 珥덇린��. 泥섏쓬�� 紐⑤몢 �덈낫�닿쾶 留뚮뱺��.
    $shoppopup.find('.majorActivity').css('display', 'none')

    // �앹뾽 �꾩슦湲� �대깽��
    $('.sub030102 .more').on('click', '.btn.btn-default', function (e) {
        e.preventDefault()

        var id = $(this).attr('href')

        $shoppopup.addClass('active').find(id).css('display', 'block')
    })

    // �앹뾽 �リ린 �대깽��
    $shoppopup.on('click', '.btn_close > a', function (e) {
        e.preventDefault()

        $shoppopup.removeClass('active').find('.majorActivity').css('display', 'none')
    })

    //shoppopup �대깽�� �섏젙

    $('.purchase.innerwrap .btn_wrap> a').on('click', function () {
        // if (shoppopup_btn == "shoppopup") {
        $('#shoppopup').addClass('active')
        // }
        $('.layerpopup_container .btn_close > a').on('click', function () {
            $('#shoppopup').removeClass('active')
        })
    })
})

// var shoppopup_btn = $("#fullpage .btn_wrap > a").attr("aria-button");
