// $('#snowspawner').letItSnow();
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