$(document).ready(function() {

    $(".sidebar-nav-menu ul li a").click(function(){
        $(".sidebar-nav-menu ul li a").removeClass("active-parent");
        $(this).toggleClass("active");
    });

    $("button.slide-btn").click(function(){
        $(".full-category").toggleClass("active");
        $(".full-sidebar").toggleClass("active");
    });

    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass:true,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
                dots: false,
            }
        }
    });


    // var count_particles, stats, update;
    // stats = new Stats;
    // stats.setMode(0);
    // stats.domElement.style.position = 'absolute';
    // stats.domElement.style.left = '0px';
    // stats.domElement.style.top = '0px';
    // document.body.appendChild(stats.domElement);
    // count_particles = document.querySelector('.js-count-particles');
    // update = function() {
    //     stats.begin();
    //     stats.end();
    //     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    //     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    //     }
    //     requestAnimationFrame(update);
    // };
    // requestAnimationFrame(update);


});  

