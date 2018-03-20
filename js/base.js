$(document).ready(function(){    
    init();
});

function init() {

    ////////////////////////////////
    //                            //
    //                            //
    //       SMOOTH SCROLL        //
    //                            //
    //                            //
    ////////////////////////////////

    $('a').click(function(){  
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            return false;
        });

    ////////////////////////////////
    //                            //
    //                            //
    //        GSAP ANIMTION       // 
    //                            //
    //                            //
    ////////////////////////////////
    
    //site id and logo
    var siteLogo = $('#site_logo');
    var siteID = $('.site_id_text');
    
    var a = new TimelineMax({paused: true});
    a.to(siteLogo, 0.05, {scale:0.8});
    a.staggerFrom(siteID, 0.1, {opacity: 0, ease: Back.easeOut}, 0.2);
    a.staggerTo(siteID, 0.1, {opacity: 0.5, ease: Back.easeOut, css:{color:'#fff308'}}, 0.2,);
    
    $(siteLogo).mouseenter(function() {
        a.play();
    });
    
    $(siteLogo).mouseleave(function() {
        a.reverse();
    });
//    $(siteLogo).mouseenter(function() {
//        TweenMax.to(siteID, 0.08, {opacity:0.5});
//    });
    
    //header animation
    var headerT1 = new TimelineMax();
    var titleH1 = $('#first_header span');
    var titleOF = $('#of span');
    var titleName = $('#second_header');
    var mouse = $('#mouseDown');
    var introFox = $('#introFOX');
    headerT1.staggerFrom(titleH1, 0.3, { opacity:0, ease: Back.easeOut },0.1);
    headerT1.staggerFrom(titleOF, 0.3, { opacity:0, ease: Back.easeOut },0.1);
    headerT1.from(titleName, 0.5, {opacity:0, transform:'translateY(-300px)'});
    headerT1.from(introFox, 1, {opacity:0, transform:'translateY(500px)', ease: Elastic.easeOut.config(1, 0.75)});
    headerT1.from(mouse, 2, {opacity:0, ease: Power3.easeOut});


    
    //animation
    //mouseScroll
    var mouseDown = $('.mouse_c');
    var mouseDown2 = $('.mouse_b');
    var mouseColor = $('.mouse_d');
    TweenMax.from(mouseDown, 1, {transform: 'translateY(-10px)',repeat:-1, yoyo:true});
    TweenMax.to(mouseDown2, 1, {transform: 'translateY(10px)',repeat:-1, yoyo:true});
    TweenMax.to(mouseColor, 1, {transform: 'translateY(5px)',stroke:'#d82d2d', repeat:-1, yoyo:true});
    
    //section1
    var rightRuler = $('#ruler_hover');
    var foxBody = $('.whole_fox');
    var foxShadow = $('.name_fox_shadow');
    var tail_right = $('#tail_right');
    var speed = $('#speed');
    var sec1_foxHead = $('#name_fox_head');
    
    
    var sec1_t1 = new TimelineMax();
    
    sec1_t1
        .from(rightRuler, 1, {opacity:0, transform: 'translateY(-500px)'})
        .to(rightRuler,1, {transform: 'translateY(8px)', repeat:-1, yoyo:true, ease: Back.easeOut})
        .from(foxBody, 1, {opacity:0, transform:'translateY(200px)', ease: Back.easeOut})
        .from(foxShadow, 1, {opacity:0, delay:0.05, transform:'translateY(-600px)'})
        .to(tail_right, 5, {rotation:-200 ,transformOrign:'50% 50%', ease: Power1.easeOut, repeat:-1, yoyo:true});
    

    var oops = $('#oops');
    var sec1_head_sink = new TimelineMax({paused: true});
    sec1_head_sink
        .to(sec1_foxHead, 0.3, {scale:0.95})
        .from(oops, 0.05, {scale:0.55, opacity:0, ease: Power4.easeOut});
    
    $(sec1_foxHead).mouseenter(function() {
        sec1_head_sink.play();
    });
    $(sec1_foxHead).mouseleave(function() {
        sec1_head_sink.reverse();
    });
    
    var rulerT1 = new TimelineMax({paused: true});
    var foxHeight = $('#height');
    
    rulerT1.to(foxHeight, 0.5, {css:{fontWeight:'700', color:'#d82d2d', fontSize:'2em'}});
    
    $(rightRuler).mouseenter(function() {
        rulerT1.play();

    });
    
    $(rightRuler).mouseleave(function() {
        rulerT1.reverse();
    });
    
    var speedZoom =  new TimelineMax({paused: true});
    
    speedZoom.to(speed, 0.5, {css:{fontWeight:'700', color:'#d82d2d', fontSize:'2.5em'}});
     $(tail_right).mouseenter(function() {
        speedZoom.play();
         
    });
    $(tail_right).mouseleave(function() {
        speedZoom.reverse();
        sec1_t1.play();
    });
    
    //map
    var ab = $('#abMap');
    var abText = $('#text_ab');
    var sk = $('#skMap');
    var skText = $('#text_sk');
    
 
    var mapGuide = new TimelineMax();
    mapGuide
        
        .from(ab, 0.3, {opacity:1, scale:1})
        .to(ab, 1, {scale:1.03 , repeat:-1, ease: Back.easeOut, yoyo:true})
        .from(sk, 0.3, {opacity:1, scale:1})
        .to(sk, 1, {scale:1.05 , repeat:-1, ease: Back.easeOut, yoyo:true});
    

    
    var mapT1 = new TimelineMax({paused: true});
        mapT1.to(abText, 0.01, {css:{color:'#fff308',fontWeight:'700', fontSize:'2em'}});
        
    var mapT2 = new TimelineMax({paused: true});
        mapT2.to(skText, 0.01, {css:{color:'#ff8d24', fontWeight:'700', fontSize:'2em'}});


    $(ab).mouseenter(function() {
        mapT1.play();
    });
    $(ab).mouseleave(function() {
        mapT1.reverse();
    });
     $(sk).mouseenter(function() {
        mapT2.play();
    });
    $(sk).mouseleave(function() {
        mapT2.reverse();
    });

    // land use
    var tree = $('.tree');
    
    var truck = $('.truck');
    
    var sm_smoke = $('.sm_smoke');
    var smoke = $('.smoke');
    var stock = $('.farm_stock');
    var redHouse = $('.redHouse');
    
    var landTween = new TimelineMax({delay:0.3});
    
    landTween
        .staggerTo(tree, 1, {opacity:0, transform:'translateY(200px)', ease: Power3.easeOut}, 0.5)
        
        .from(redHouse, 1, {opacity:0})
        .staggerFrom(stock, 1, {opacity:0, transform:'translateY(200px)'}, 0.5)
        .from(smoke, 1, {opacity:0})
        .from(sm_smoke, 1, {opacity:0})
        
        
    var truckScroll= new TimelineMax({dalay:0.2});
    
    truckScroll
        .set(truck, {transform:'translateX(-80px)'})
        .to(truck, 0.04, {transform:'translateX(290px)', ease: Power1.easeOut, yoyo:true});
        
    
    // save the fox, section4, animation
    var fox_gp = $('.fox_com');
    var fox_group_scene =  new TimelineMax();
    
    fox_group_scene.staggerFrom(fox_gp, 0.5, {opacity:0, transform:'translateY(200px)', ease: Back.easeOut}, 1);
    
    ////////////////////////////////
    //                            //
    //                            //
    //           EYES             //  
    //                            //
    //                            //
    ////////////////////////////////
    
    //https://codepen.io/Lavve/pen/NPwpjX
    var delay = false,
    $eye = $('#eye_move'),x;

    document.addEventListener('mousemove', function(e) { 
      if (delay) {
        if (x !== undefined) window.clearTimeout(x);
        x = window.setTimeout(function () {
          $(e.target).trigger('mousemoveend', [e.x, e.y]);
        }, 1000);
      } else {
        $(e.target).trigger('mousemoveend', [e.x, e.y]);
      }
    }, false);

    function eye() {
        $('#index').on('mousemoveend', function (e, x, y) {
            var eyeSize = $eye[0].getBBox().width,
            tmp = eyeSize/10,
            nx = (x/eyeSize/4) - tmp, ny = (y/eyeSize/3) - tmp;
            // console.log($eye[0].getBBox().width);
            $eye.attr('transform', 'translate(' + nx + ', ' + ny + ')');
            

        });
    }
    eye();
    
    ////////////////////////////////
    //                            //
    //                            //
    //       SCROLL MAGIC         //
    //                            //
    //                            //
    ////////////////////////////////

    //nav bar trigger!!!
    var navController = new ScrollMagic.Controller({globalSceneOptions:{triggerHook: 0, triggerHook: 'onCenter', reverse: true}});
    
    function createScene() {
        new ScrollMagic.Scene({triggerElement:'#index', duration: $('.content').height()})
            .setClassToggle('#nav_one','dotnav_active')
            .addTo(navController);
        new ScrollMagic.Scene({triggerElement:'#name', duration: '100%'})
            .setClassToggle('#nav_two','dotnav_active')
            .addTo(navController);
        new ScrollMagic.Scene({triggerElement:'#map', duration: '100%'})
            .setClassToggle('#nav_three','dotnav_active')
            .addTo(navController);
        new ScrollMagic.Scene({triggerElement:'#loss', duration: '100%'})
            .setClassToggle('#nav_four','dotnav_active')
            .addTo(navController);
        new ScrollMagic.Scene({triggerElement:'#action', duration:'100%'})
            .setClassToggle('#nav_five','dotnav_active')
            .addTo(navController);
        new ScrollMagic.Scene({triggerElement:'#wwf', duration: $('.content').height()})
            .setClassToggle('#nav_six','dotnav_active')
            .addTo(navController);    
        new ScrollMagic.Scene({triggerElement:'footer', duration: '100%'})
            .setClassToggle('#nav_seven','dotnav_active')
            .addTo(navController);   
    }
    createScene();

    $(window).resize(function() {
        createScene();
    });
  

    
    ////////////////////////////////
    //                            //
    //                            //
    //         SCROLLMAGIN        //
    //          ANIMATION         //
    //                            //
    //                            //
    ////////////////////////////////

    var sec1_Controller = new ScrollMagic.Controller();
    var sec1_scene = new ScrollMagic.Scene({triggerElement:'#name', triggerHook: 'onEnter', offset: 800})
        .setTween(sec1_t1)
        .addTo(sec1_Controller);
    
    var sec3_Controller = new ScrollMagic.Controller();
    var sec3_scene = new ScrollMagic.Scene({triggerElement:'.sec3_text', triggerHook: 'onEnter'})
        .setTween(landTween)
        .addTo(sec3_Controller);
    
    var sec3_TruckT = new ScrollMagic.Controller();
    var truckScene = new ScrollMagic.Scene({triggerElement:'#sec3_svg', duration:900, offset: 180, triggerHook: 'onEnter'})
        .setTween(truckScroll)
        .addTo(sec3_TruckT);
    
    var sec4_Controller = new ScrollMagic.Controller();
    var scene4 = new ScrollMagic.Scene({triggerElement:'#action', duration:900, offset: 180, triggerHook: 'onEnter'})
        .setTween(fox_group_scene)
        .addTo(sec4_Controller);



}