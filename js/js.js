var app = new Vue({
    el: '.ext',
    data: {
        message: 'Have your meal delivered from your fevorite resutaurant',
        msg:'Anything, anywhere, anytime. We deliver.'
    }
})





$(".glyph").on('click',function(e){
    e.preventDefault();
    if ($(this).hasClass('food')){
        $('#food').addClass("fa fa-check-circle fa-2x");
        $("#clean").removeClass("fa fa-check-circle fa-2x");
        $("#shop").removeClass("fa fa-check-circle fa-2x");
        $("#laundry").removeClass("fa fa-check-circle fa-2x");
    } 
    else if ($(this).hasClass('clean')) {
        $('#clean').addClass("fa fa-check-circle fa-2x");
        $("#food").removeClass("fa fa-check-circle fa-2x");
        $("#shop").removeClass("fa fa-check-circle fa-2x");
        $("#laundry").removeClass("fa fa-check-circle fa-2x");
    }
    else if ($(this).hasClass('shop')) {
        $('#shop').addClass("fa fa-check-circle fa-2x");
        $("#food").removeClass("fa fa-check-circle fa-2x");
        $("#clean").removeClass("fa fa-check-circle fa-2x");
        $("#laundry").removeClass("fa fa-check-circle fa-2x");
     }
     else if ($(this).hasClass('laundry')) {
         $('#laundry').addClass("fa fa-check-circle fa-2x");
        $("#food").removeClass("fa fa-check-circle fa-2x");
        $("#clean").removeClass("fa fa-check-circle fa-2x");
        $("#shop").removeClass("fa fa-check-circle fa-2x");
     }
     else{
        $("#food").removeClass("fa fa-check-circle fa-2x");
        $("#clean").removeClass("fa fa-check-circle fa-2x");
        $("#shop").removeClass("fa fa-check-circle fa-2x");
        $("#laundry").removeClass("fa fa-check-circle fa-2x");
     }
});



$('.btn-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).find('.btn').toggleClass('active');

    if ($(this).find('.btn-primary')) {
        $(this).find('.btn').toggleClass('btn-primary');
    }

    $(this).find('.btn').toggleClass('btn-default');

});


