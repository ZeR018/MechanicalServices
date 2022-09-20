{



    // $(".menu__list > li").on({
    //     "mouseover": function () {
    //         $(this).find(".sub-menu__list").addClass("_active")
    //     },
    //     "mouseout": function () {
    //         $(this).find(".sub-menu__list").removeClass("_active")
    //     }
    // })

    // $(".sub-menu__list > li").on({
    //     "mouseover": function () {
    //         $(this).find(".sub-sub-menu__list").addClass("_active")
    //     },
    //     "mouseout": function () {
    //         $(this).find(".sub-sub-menu__list").removeClass("_active")
    //     }
    // })

    // $(".sub-sub-menu__list > li").on({
    //     "mouseover": function () {
    //         $(this).find(".sub-sub-sub-menu__list").addClass("_active")
    //     },
    //     "mouseout": function () {
    //         $(this).find(".sub-sub-sub-menu__list").removeClass("_active")
    //     }
    // })

    $("ul>li").on({
        "mouseover": function () {
            $(this).children("ul").addClass("_active")
        },
        "mouseout": function () {
            $(this).children("ul").removeClass("_active")
        }
    })


    $('a[anchor]').on('click', function (e) {
        e.preventDefault();
        localStorage.setItem("anchor", $(this).attr('anchor'));
        window.location.href = $(this).attr('href')
    })

    $('a[mode]').on('click', function (e) {
        e.preventDefault();
        localStorage.setItem("mode", $(this).attr('mode'));
        window.location.href = $(this).attr('href')
    })

    $('#exit').on('click', () => {
        require('nw.gui').App.quit()
    })




}




