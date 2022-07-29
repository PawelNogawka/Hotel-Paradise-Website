
$('.swiper-wrapper').slick({
    arrows:false,
    autoplay:true,
    mobileFirst:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    spaceBetween:0,
    responsive:[
        {
            breakpoint:480,
            settings:{
                slidesToShow: 2,
            }
        },
        {
            breakpoint:768,
            settings:{
                slidesToShow: 3,
            }
        },

        {
            breakpoint:992,
            settings:{
                slidesToShow: 4,
            }
        }
    ]
  });

  $(".swiper-wrapper").mouseover(
     $(".swiper-wrapper").css("cursor","grab")
  )

  



  