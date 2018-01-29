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
    $(".owl-home").owlCarousel({
        items:1,
        autoHeight:true,
        dots:true,
        dotData: true,
        pagination: true
    });
////////////////////////////////////////////////////////////

    $('.our-team-carousel').owlCarousel({

        responsive:{
          0:{
              items: 1,

          },
            768:{
              items: 2,
                center: true,
                margin: -25
          },
            1200:{
              items: 3,

            }
        }
    })
    ////////////////////////////////////////////////////////////
    $(".happy-clients-carousel").owlCarousel({
        items:1,
        dots:true,
    });



    // AIzaSyDMLe_vZ1ssLw9SyUm2wyKOrheMo_Ui93o googlemaps api key



});