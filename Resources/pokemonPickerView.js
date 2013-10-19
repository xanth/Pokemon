//Pokemon Picker
var pokemonPicker = Ti.UI.createWindow({
	title: 'Pokemon Picker',
	backgroundImage: 'images/background.jpg'
});

var pickerDoneButton = Ti.UI.createButton({
	backgroundImage: 'images/button/done.png',
	width: 143,
	height: 52,
	center: {
		x: platformWidth * 0.2,
		y: platformHeight * 0.85
	}
});

var pickerBackButton = Ti.UI.createButton({
	backgroundImage: 'images/button/back.png',
	width: 143,
	height: 52,
	center: {
		x: platformWidth * 0.8,
		y: platformHeight * 0.85
	}
});

var pageCarousel2 = Titanium.UI.createView({
	top: 0,
	left: 0
});

// Create image views
var pages = [];

pages.push(page1 = Titanium.UI.createView({
	backgroundImage: 'images/pokemonL/lPkmn01.png'
}));

pages.push(page2 = Titanium.UI.createView({
	backgroundImage: 'images/pokemonL/lPkmn02.png'
}));

// Setup their positions and add to window
var imageWidth = 250; // 250 pixels wide
var imageHeight = 329; // 390 pixels high
for (var i = 0; i < pages.length; i++){
	// How much to offset images to ensure they are centred
	var centreOffset = (platformWidth - imageWidth) / 2;
	pages[i].left = centreOffset + i * imageWidth;
	pages[i].width = imageWidth;
	pages[i].height = imageHeight;
	
	// Add view to Page Carousel
	pageCarousel2.add(pages[i]);
}

pokemonPicker.add(pageCarousel2);
pokemonPicker.add(pickerDoneButton);
pokemonPicker.add(pickerBackButton);