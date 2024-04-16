$(document).ready(function(){
        $('.fa-bars').click(function(){
             $(this).toggleClass('fa-times');
             $('.navbar').toggleClass('nav-toggle');
        });
    
        $(window).on('scroll load', function(){
            $('.navbar').removeClass('nav-toggle');
            $('.fa-bars').removeClass('fa-times');
    
            if ($(window).scrollTop() > 30) {
                $('header').addClass('header-active');
            } else {
                $('header').removeClass('header-active');
            }
    
            $('section').each(function(){
                var top = $(window).scrollTop();
                var id = $(this).attr('id');
                var height = $(this).height();
                var sectionTop = $(this).offset().top - 200; // Corrected variable name
                if (top >= sectionTop && top < height + sectionTop) { // Corrected condition
                    $('.navbar ul li a').removeClass('active');
                    $('.navbar').find('[href="#' + id +'"]').addClass('active'); // Removed extra space
                }
            }); // Added closing parenthesis
        });
    });
    