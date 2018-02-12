// 按鈕的js
$(document).ready(() => {
    let $button0 = $('#button0');
    let $button1 = $('#button1');
    let $button2 = $('#button2');
    let $button3 = $('#button3');
    let $button4 = $('#button4');
    let $button5 = $('#button5');
    let $button6 = $('#button6');
    let $button7 = $('#button7');
    let $button8 = $('#button8');
    let $page0 = $('#page0');
    let $page1 = $('#page1');
    let $page2 = $('#page2');
    let $page3 = $('#page3');
    let $page4 = $('#page4');
    let $page5 = $('#page5');
    let $page6 = $('#page6');
    let $page7 = $('#page7');
    let $page8 = $('#page8');
    let $head = $('#head');
    $page1.hide();
    $page2.hide();
    $page3.hide();
    $page4.hide();
    $page5.hide();
    $page6.hide();
    $page7.hide();
    $page8.hide();

    $button0.on('click', () => {
        $head.show();
        $page0.show();
        $page1.hide();
        $page2.hide();
        $page3.hide();
        $page4.hide();
        $page5.hide();
        $page6.hide();
        $page7.hide();
        $page8.hide();
    })

    $button1.on('click', () => {
        $head.show();
        $page1.show();
        $page0.hide();
        $page2.hide();
        $page3.hide();
        $page4.hide();
        $page5.hide();
        $page6.hide();
        $page7.hide();
        $page8.hide();
    })

    $button2.on('click', () => {
        $head.show();
        $page2.show();
        $page0.hide();
        $page1.hide();
        $page3.hide();
        $page4.hide();
        $page5.hide();
        $page6.hide();
        $page7.hide();
        $page8.hide();
    })

    $button3.on('click', () => {
        $page3.show();
        $head.hide();
        $page0.hide();
        $page1.hide();
        $page2.hide();
        $page4.hide();
        $page5.hide();
        $page6.hide();
        $page7.hide();
        $page8.hide();
    })

    $button4.on('click', () => {
        $page4.show();
        $head.hide();
        $page0.hide();
        $page1.hide();
        $page2.hide();
        $page3.hide();
        $page5.hide();
        $page6.hide();
        $page7.hide();
        $page8.hide();
    })

    $button5.on('click', () => {
        $page5.show();
        $head.hide();
        $page0.hide();
        $page1.hide();
        $page2.hide();
        $page3.hide();
        $page4.hide();
        $page6.hide();
        $page7.hide();
        $page8.hide();
    })

    $button6.on('click', () => {
        $page6.show();
        $head.hide();
        $page0.hide();
        $page1.hide();
        $page2.hide();
        $page3.hide();
        $page4.hide();
        $page5.hide();
        $page7.hide();
        $page8.hide();
    })

    // $button7.on('click', () => {
    //     $page7.show();
    //     $page0.hide();
    //     $page1.hide();
    //     $page2.hide();
    //     $page3.hide();
    //     $page4.hide();
    //     $page5.hide();
    //     $page6.hide();
    //     $page8.hide();
    // })

    // $button8.on('click', () => {
    //     $page8.show();
    //     $page0.hide();
    //     $page1.hide();
    //     $page2.hide();
    //     $page3.hide();
    //     $page4.hide();
    //     $page5.hide();
    //     $page6.hide();
    //     $page7.hide();
    // })
})
// 第二頁的按鈕的js
    $(document).ready(() => {
        let $button2_1 = $('#button2_1');
        let $button2_2 = $('#button2_2');
        let $page2_1 = $('#page2_1');
        let $page2_2 = $('#page2_2');
        $page2_2.hide();

        $button2_1.on('click', () => {
            $page2_1.show();
            $page2_2.hide();
        })

        $button2_2.on('click', () => {
            $page2_1.hide();
            $page2_2.show();
        })
    })

// 第三頁的按鈕的js
    $(document).ready(() => {
        let $button3_0 = $('#button3_0');
        let $button3_1 = $('#button3_1');
        let $button3_2 = $('#button3_2');
        let $button3_3 = $('#button3_3');
        let $button3_4 = $('#button3_4');
        let $button3_5 = $('#button3_5');
        let $button3_6 = $('#button3_6');
        let $button3_7 = $('#button3_7');
        let $page0 = $('#page0');
        let $head = $('#head');
        let $page3 = $('#page3');
        let $page3_1 = $('#page3_1');
        let $page3_2 = $('#page3_2');
        let $page3_3 = $('#page3_3');
        let $page3_4 = $('#page3_4');
        let $page3_5 = $('#page3_5');
        let $page3_6 = $('#page3_6');
        let $page3_7 = $('#page3_7');
        $page3_2.hide();
        $page3_3.hide();
        $page3_4.hide();
        $page3_5.hide();
        $page3_6.hide();
        $page3_7.hide();


        $button3_1.on('click', () => {
            $page3_1.fadeIn();
            $page3_2.hide();
            $page3_3.hide();
            $page3_4.hide();
            $page3_5.hide();
            $page3_6.hide();
            $page3_7.hide();
        })

        $button3_2.on('click', () => {
            $page3_2.fadeIn();
            $page3_1.hide();
            $page3_3.hide();
            $page3_4.hide();
            $page3_5.hide();
            $page3_6.hide();
            $page3_7.hide();
        })

        $button3_3.on('click', () => {
            $page3_3.fadeIn();
            $page3_1.hide();
            $page3_2.hide();
            $page3_4.hide();
            $page3_5.hide();
            $page3_6.hide();
            $page3_7.hide();
        })

        $button3_4.on('click', () => {
            $page3_4.fadeIn();
            $page3_1.hide();
            $page3_2.hide();
            $page3_3.hide();
            $page3_5.hide();
            $page3_6.hide();
            $page3_7.hide();
        })
        $button3_5.on('click', () => {
            $page3_5.fadeIn();
            $page3_1.hide();
            $page3_2.hide();
            $page3_3.hide();
            $page3_4.hide();
            $page3_6.hide();
            $page3_7.hide();
        })
        $button3_6.on('click', () => {
            $page3_6.fadeIn();
            $page3_1.hide();
            $page3_2.hide();
            $page3_3.hide();
            $page3_4.hide();
            $page3_5.hide();
            $page3_7.hide();
        })
        $button3_7.on('click', () => {
            $page3_7.fadeIn();
            $page3_1.hide();
            $page3_2.hide();
            $page3_3.hide();
            $page3_4.hide();
            $page3_5.hide();
            $page3_6.hide();
        })
    })

// 第五頁的按鈕的js
$(document).ready(() => {
    let $button5_1 = $('#button5_1');
    let $button5_2 = $('#button5_2');
    let $button5_3 = $('#button5_3');
    let $button5_4 = $('#button5_4');
    let $page5_1 = $('#page5_1');
    let $page5_2 = $('#page5_2');
    let $page5_3 = $('#page5_3');
    let $page5_4 = $('#page5_4');
    $page5_2.hide();
    $page5_3.hide();
    $page5_4.hide();

    $button5_1.on('click', () => {
        $page5_1.show();
        $page5_2.hide();
        $page5_3.hide();
        $page5_4.hide();
    })

    $button5_2.on('click', () => {
        $page5_2.show();
        $page5_1.hide();
        $page5_3.hide();
        $page5_4.hide();
    })

    $button5_3.on('click', () => {
        $page5_3.show();
        $page5_1.hide();
        $page5_2.hide();
        $page5_4.hide();
    })

    $button5_4.on('click', () => {
        $page5_4.show();
        $page5_1.hide();
        $page5_2.hide();
        $page5_3.hide();
    })
})

// 第六頁的按鈕的js
$(document).ready(() => {
    let $button6_1 = $('#button6_1');
    let $button6_2 = $('#button6_2');
    let $button6_3 = $('#button6_3');
    let $button6_4 = $('#button6_4');
    let $page6_1 = $('#page6_1');
    let $page6_2 = $('#page6_2');
    let $page6_3 = $('#page6_3');
    let $page6_4 = $('#page6_4');
    $page6_2.hide();
    $page6_3.hide();
    $page6_4.hide();

    $button6_1.on('click', () => {
        $page6_1.show();
        $page6_2.hide();
        $page6_3.hide();
        $page6_4.hide();
    })

    $button6_2.on('click', () => {
        $page6_2.show();
        $page6_1.hide();
        $page6_3.hide();
        $page6_4.hide();
    })

    $button6_3.on('click', () => {
        $page6_3.show();
        $page6_1.hide();
        $page6_2.hide();
        $page6_4.hide();
    })

    $button6_4.on('click', () => {
        $page6_4.show();
        $page6_1.hide();
        $page6_2.hide();
        $page6_3.hide();
    })
})

// 網站banner0
    let swiper0 = new Swiper('#swiper-container0', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1200,
        followFinger: false,
        autoplay: {
            delay: 3300,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
// 網站banner1
    let swiper1 = new Swiper('#swiper-container1', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1200,
        followFinger: false,
        autoplay: {
            delay: 3300,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
  
// scroll smooth    
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 600, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });     
   