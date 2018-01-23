require('../scss/main.scss');

$(document).ready(function(){
////////////////////////////////////////////////////////////
    $('.navbar-menu-hamburger').click(function(){
        $(this).toggleClass('open');
        let windowWidth = $(window).width();
        if (windowWidth < 768){
            $('.navbar-menu-list').css("transition","left .5s ease-in-out");
            if(!this.classList.contains('open')){
                $('.navbar-menu-list').css("left","100%");

            }else{
                $('.navbar-menu-list').css("left","0%");

            }
        }else{
            $('.navbar-menu-list').css("transition","none");
            $('.navbar-menu-list').css("left","0%");
        }
    });
////////////////////////////////////////////////////////////


    $(window).scroll(function (e) {
        console.log($(window).scrollTop());
        if($(window).scrollTop() > 0){
            $('#navbar').css("height","66px !important");
            $('navbar-menu .navbar-menu-list li').css("height","calc((66px - 14px) / 2) 5px !important");

        }else{
            $('#navbar').css("height","100px");
            $('.navbar-menu .navbar-menu-list li').css("height","calc((100px - 14px) / 2) 5px");
        }
    })





////////////////////////////////////////////////////////////
    $(".owl-carousel").owlCarousel({
        items:1,
        autoHeight:true
    });
////////////////////////////////////////////////////////////


});