$("document").ready(function(){
    $("#cart-btn").click(function(){
       $(".card-items-container").toggleClass("show");
       $(".navbar").removeClass('show');
       $(".search-form").removeClass("show-searchBlock");
    })

    $("#menu-btn").click(function(){
        $(".navbar").toggleClass("show");
        $(".card-items-container").removeClass("show");
        $(".search-form").removeClass("show-searchBlock");
    })

    $("#search-btn").click(function(){
        $(".search-form").toggleClass('show-searchBlock');
        $(".card-items-container").removeClass("show");
        $(".navbar").removeClass("show")
    })
})



