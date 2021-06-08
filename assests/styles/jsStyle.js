AOS.init({
    duration: 1000
});
$('#snowspawner').letItSnow({
    // color of the snowflakes
    color: '#fff',

    // max / min size
    size_min: 1,
    size_max: 5,

    // z-index
    zindex: 99,

    // max amount of snowflakes
    maxcount: 10,

    // horizontal movement of snowflakes
    wind: 50,

    // easing effects
    easing_x: "easeInBack",
    easing_y: "easeInCubic",

    // aniamtion speed
    fall_time: 100
});
$(document).on('mousemove',function (eventOb){
    $('#star').css({
        'position':'absolute',
        'left':eventOb.pageX,
        'top':eventOb.pageY
    });
});
$('#wholeThing').on('click',function(){
    $('#star').val();
});
const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',(e)=>{
        cursor.style.left=e.pageX+'px';
        cursor.style.top=e.pageY+'px';
    }
);
function toggleCheck() {
    if(document.getElementById("myCheckbox").checked === true){
        document.getElementById("wholeThing").style.background = "#ecf0f1";
        document.getElementById("leftSideDiv").style.background = "#ecf0f1";
        document.getElementById("rightSideDiv").style.background = "#ecf0f1";
        document.getElementById("soial").style.background = "#ecf0f1";
        document.getElementById("AboutMe").style.background = "#ecf0f1";
        document.getElementById("Skills").style.background = "#ecf0f1";
        document.getElementById("wholeThing").style.background = "#ecf0f1";
        document.getElementById("all").style.background = "#ecf0f1";
        document.getElementById("projects").style.background = "#ecf0f1";
        document.getElementById("education").style.background = "#ecf0f1";
        document.getElementById("Assignments").style.background = "#ecf0f1";
        document.getElementById("row").style.background = "#ecf0f1";
        document.getElementById("row").style.background = "#ecf0f1";
        document.getElementById("ccc").style.background = "#ecf0f1";
        document.getElementById("pro").style.background = "#ecf0f1";
        document.getElementById("text").style.background = "#ecf0f1";
        document.getElementById("text1").style.background = "#ecf0f1";
    }
    else {
        document.getElementById("wholeThing").style.background = "#20202A";
        document.getElementById("AboutMe").style.background = "#20202A";
        document.getElementById("all").style.background = "#20202A";
        document.getElementById("Skills").style.background = "#20202A";
        document.getElementById("projects").style.background = "#20202A";
        document.getElementById("pro").style.background = "#20202A";
        document.getElementById("h4AboutMe").style.color = "#A0AAB3";
        document.getElementById("SAchini").style.color = "#A0AAB3";
        document.getElementById("leftSideDiv").style.background = "#20202A";
        document.getElementById("rightSideDiv").style.background = "#20202A";
        document.getElementById("education").style.background = "#20202A";
        document.getElementById("Assignments").style.background = "#20202A";
        document.getElementById("text").style.background = "#20202A";
        document.getElementById("text1").style.background = "#20202A";
        document.getElementById("footer").style.background = "#20202A";
        document.getElementById("ccc").style.background = "#20202A";
        document.getElementById("row").style.background = "#20202A";
        document.getElementById("soial").style.background = "#20202A";
    }
}
$(window).on('load',function(){
    setTimeout(function(){ // allowing 3 secs to fade out loader
        $('.page-loader').fadeOut('slow');
    },3500);
});
// ===================================================================================
