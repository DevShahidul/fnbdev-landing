(function($){
    $(function(){
        
    })// End ready function
    
    $(window).on('load', function(){
        var heroBg = $('.bg-layer'),
            siteLogo = $('.logo');
       TweenMax.to(heroBg, .8,{opacity:1, scale: 1});   
       TweenMax.to(siteLogo, .8,{opacity:1, scale: 1, delay: .8});   
       TweenMax.to($('h1'), .5,{opacity:1, y: 0, delay: 1});   
       TweenMax.to($('h4'), .5,{opacity:1, y: 0, delay: 1.2});   
       TweenMax.to($('p'), .4,{opacity:1, y: 0, delay: 1.4});   
       TweenMax.to($('.contact-item figure img'), .7,{rotation: 0, opacity: 1, scale: 1, delay: 1.8});   
       TweenMax.to($('.contact-item .info a'), .6,{ x: 0, delay: 1.8});   
    });
})(jQuery);