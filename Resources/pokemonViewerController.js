viewerBackButton.addEventListener('click', function(e){
	switchWin(mainMenuView);
});

// Page Carosel 
pageCarousel.addEventListener('touchstart', function(e){
	var touchPos = {x: e.x, y: e.y};
	lastTouchPosition = e.source.convertPointToView(touchPos, pokemonViewer);
});

pageCarousel.addEventListener('touchmove', function(e){
	var touchPos = {x: e.x, y: e.y};
	var newTouchPosition = e.source.convertPointToView(touchPos, pokemonViewer);

	// Only support moving pages horizontally
	pageCarousel.left += newTouchPosition.x - lastTouchPosition.x;
	
	lastTouchPosition = newTouchPosition;
});

pageCarousel.addEventListener('touchend', function(e){
	// Determine which view is most in the centre of the screen
	for (var i = 0; i < pages.length; i++)
	{
		var left = pageCarousel.left + pages[i].left;
		var right = pageCarousel.left + pages[i].left + pages[i].width;
		var centre = platformWidth / 2;
		
		if (left <= centre && right >= centre)
		{
			// Move this page to the centre
			var newLeft = (platformWidth - pages[i].width) / 2;
			
			// How much do we need to move all of the pages by?
			var deltaX = newLeft - (pageCarousel.left + pages[i].left);
			
			//pageCarousel.left += deltaX;
			
			var endLeft = pageCarousel.left + deltaX;
			
			var animation = Titanium.UI.createAnimation({
				left: endLeft,
				curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
			});
			
			animation.addEventListener('complete', function(e){
				pageCarousel.left = endLeft;
			});
			
			pageCarousel.animate(animation);
			break;
		}
	}
});