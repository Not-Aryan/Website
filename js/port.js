TweenMax.from(".stuff", .7, {
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});


TweenMax.from(".logo", .7, {
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".face", .7, {
    delay: .3,
    opacity: 0,
    y: 100,
    ease: Back.easeOut
});

TweenMax.from(".intro-words", .7, {
    delay: .3,
    opacity: 0,
    y: 100,
    ease: Back.easeOut
});


TweenMax.from(".main", .7, {
    delay: .3,
    opacity: 0,
    y: 50,
    ease: Back.easeOut
});


TweenMax.staggerFrom(".media ul li", 1, {
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, 0.2);


$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  console.log(scroll);
  scroll < 1170 ? $('#1')[0].play() : $('#1')[0].pause()
  scroll < 2170 && scroll > 1170 ? $('#2')[0].play() : $('#2')[0].pause()
  scroll < 3050 && scroll > 2170 ? $('#3')[0].play() : $('#3')[0].pause()
  scroll > 3050 ? $('#4')[0].play() : $('#4')[0].pause()
});

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     scroll > 2600 ? $('#2')[0].pause() : $('#2')[0].play()
// });


// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     scroll > 3900 ? $('#3')[0].pause() : $('#3')[0].play()
// });

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     scroll > 5200 ? $('#4')[0].pause() : $('#4')[0].play()
// });


// var myvid = $('#2')[0];
// $(window).scroll(function(){
//   var scroll = $(this).scrollTop();
//   scroll > 70 ? myvid.pause() : myvid.play()
// });

// var myvid = $('#3')[0];
// $(window).scroll(function(){
//   var scroll = $(this).scrollTop();
//   scroll > 70 ? myvid.pause() : myvid.play()
// });

// var myvid = $('#4')[0];
// $(window).scroll(function(){
//   var scroll = $(this).scrollTop();
//   scroll > 70 ? myvid.pause() : myvid.play()
// });




