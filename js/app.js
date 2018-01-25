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





////////////////////////////////////////////////////////////
    $(".owl-carousel").owlCarousel({
        items:1,
        autoHeight:true
    });
////////////////////////////////////////////////////////////


});