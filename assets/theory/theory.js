// {
//     $("body").scrollTop($("[attr=attr1]").offset().top)
// }

// {
//     console.log(window.anchor);
//     $("body").scrollTop($(`[anchor=${window.anchor}]`).offset().top)

// }

{
    anchor = localStorage.getItem("anchor");
    $("body").scrollTop($(`[anchor=${anchor}]`).offset().top - 20)
}
