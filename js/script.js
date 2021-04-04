
$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
			
		}

	});
    
    $('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");

		if ($('#menu-icon').hasClass('svg-inline--fa fa-bars fa-w-14')){
			$('.menu-btn svg').toggleClass("fa fa-times");
		} else {
			$('.menu-btn svg').toggleClass("fas fa-bars");
		}
	});


});

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode")
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode")
});


