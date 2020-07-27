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

