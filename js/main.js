


const hamburger = document.querySelector(".menu-navigation");
const navMenu = document.querySelector(".nav-list"); 

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open-mobile-menu"); 
} 

$(document).ready(function(){
    $('.slider-wrapper').slick({
        arrows:true, 
        dots:true,
      
        variableWidth: true,
        slidesToShow:3, 
		prevArrow: $('.buttons-castom__prev'),
		nextArrow: $('.buttons-castom__next'),
		
          responsive:[{
            breakpoint:768,
            settings:{
                slidesToShow:2,
            },
           
            breakpoint:480,
            settings:{
                slidesToShow:1,
            }
          }],

         
    });
  });
  
		  


		  
