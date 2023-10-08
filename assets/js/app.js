// Navbar 

$(".menu-bar .open i").on('click',function(){
    $("header .responsive-menu").addClass('active');
    $(".menu-bar .open").addClass('active');
    $(".menu-bar .close").addClass('active');
})

$(".menu-bar .close i").on('click',function(){
    $("header .responsive-menu").removeClass('active');
    $(".menu-bar .open").removeClass('active');
    $(".menu-bar .close").removeClass('active');
})