//POKEMON VIEWER
var pokemonViewer = Ti.UI.createWindow({
	title: 'Pokemon Viewer',
	backgroundImage: 'images/background.jpg'
});

var viewerBackButton = Ti.UI.createButton({
	backgroundImage: 'images/button/back.png',
	width: 143,
	height: 52,
	center: {
		x: platformWidth * 0.8,
		y: platformHeight * 0.85
	}
});

var pageCarousel = Titanium.UI.createView({
	top: 0,
	left: 0
});

// Create image views
var pages = [];

pages.push(Titanium.UI.createView({
	backgroundImage: 'images/pokemonL/lPkmn01.png'
}));

pages.push(Titanium.UI.createView({
	backgroundImage: 'images/pokemonL/lPkmn02.png'
}));

// Setup their positions and add to window
var imageWidth = 250; // 250 pixels wide
var imageHeight = 329; // 390 pixels high
for (var i = 0; i < pages.length; i++)
{
	// How much to offset images to ensure they are centred
	var centreOffset = (platformWidth - imageWidth) / 2;
	pages[i].left = centreOffset + i * imageWidth;
	pages[i].width = imageWidth;
	pages[i].height = imageHeight;
	
	// Add view to Page Carousel
	pageCarousel.add(pages[i]);
}

pokemonViewer.add(pageCarousel);
pokemonViewer.add(viewerBackButton);
