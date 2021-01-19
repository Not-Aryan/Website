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

TweenMax.staggerFrom(".media ul li", 1, {
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, 0.2);


var typed = new Typed('.element', {
    strings: [
          "<style>.element{color: #ea2340}</style>passionate", 
          "<style>.element{color: #ea2340}</style>practical", 
          "<style>.element{color: #ea2340}</style>mindful",
          "<style>.element{color: #ea2340}</style>resourceful"
    ],
    typeSpeed: 55,
    backSpeed: 40,
    startDelay: 0,
    loop: true,
});

var typed = new Typed('.element1', {
    strings: [
          "<style>.element{color: #ea2340}</style>passionate", 
          "<style>.element{color: #ea2340}</style>practical", 
          "<style>.element{color: #ea2340}</style>mindful",
          "<style>.element{color: #ea2340}</style>resourceful"
    ],
    typeSpeed: 55,
    backSpeed: 40,
    startDelay: 2,
    loop: true,
});
