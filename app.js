var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    freeMode: false
});


$(".page-item").click(function () {
    let page = $(this).attr("page")
    $(this).addClass("active").siblings().removeClass("active")
    hideImageContent();
    $(".pages > .page").each((key, data) => {
        if ($(data).attr("page") == page) {
            $(data).show();
        }
        else {
            $(data).hide();
        }
    })
})

$(".images-flex .image-item").on("click", function () {
    let page = $(this).data("page");

    $(".image-content-item").each((key, data) => {
        if ($(data).data("page") === page) {
            $(data).show();
        }
        else {
            $(data).hide();
        }
    })
})

function hideImageContent() {
    $(".image-content-item").hide();
}