// Continue To battle screen
pickerDoneButton.addEventListener('click', function (e) {
    switchWin(pokemonBattle, "Battle");
});
// return to main menu
pickerBackButton.addEventListener('click', function (e) {
    switchWin(mainMenuView);
});

// Page Carosel animation
pageCarousel2.addEventListener('touchstart', function (e) {
    var touchPos = {
        x: e.x,
        y: e.y
    };
    lastTouchPosition = e.source.convertPointToView(touchPos, pokemonPicker);
});

pageCarousel2.addEventListener('touchmove', function (e) {
    var touchPos = {
        x: e.x,
        y: e.y
    };
    var newTouchPosition = e.source.convertPointToView(touchPos, pokemonPicker);

    // Only support moving pages horizontally
    pageCarousel2.left += newTouchPosition.x - lastTouchPosition.x;

    lastTouchPosition = newTouchPosition;
});

pageCarousel2.addEventListener('touchend', function (e) {
    // Determine which view is most in the centre of the screen
    for (var i = 0; i < pages.length; i++) {

        var left = pageCarousel2.left + pages[i].left;
        var right = pageCarousel2.left + pages[i].left + pages[i].width;
        var centre = platformWidth / 2;

        if (left <= centre && right >= centre) {
            // Move this page to the centre
            var newLeft = (platformWidth - pages[i].width) / 2;

            // How much do we need to move all of the pages by?
            var deltaX = newLeft - (pageCarousel2.left + pages[i].left);

            //pageCarousel2.left += deltaX;

            var endLeft = pageCarousel2.left + deltaX;

            var animation = Titanium.UI.createAnimation({
                left: endLeft,
                curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
            });

            animation.addEventListener('complete', function (e) {
                pageCarousel2.left = endLeft;
            });

            pageCarousel2.animate(animation);
            break;
        }
    }
});

// Add event listensers to the pages that add pokemon to the box
dug.addEventListener('dblclick', function (e) {
    pokemon.push(dugImg = Titanium.UI.createView({
	backgroundImage: 'images/pokemon/dugtrio.png'
	}));
});
charz.addEventListener('dblclick', function (e) {
    pokemon.push(charzImg = Titanium.UI.createView({
	backgroundImage: 'images/pokemon/charizard.png'
	}));
});