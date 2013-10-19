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
	top: -225,
	left: 0
});

// Create image views
var pages = [];

pages.push(dug = Titanium.UI.createView({
	backgroundImage: 'images/pokemonL/lPkmn01.png'
}));

pages.push(charz = Titanium.UI.createView({
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
// Pokemon Box 
var pickerBox = Ti.UI.createButton({
	backgroundImage: 'images/box.png',
	width: 230,
	height: 84,
	center: {
		x: platformWidth * 0.5,
		y: platformHeight * 0.7
	}
});
// users pokemon to play in the battle
var pokemon = [];
// box layout
var pickerBox = Titanium.UI.createView({
	center: {
		x: platformWidth * 0.5,
		y: platformHeight * 0.7
	}
});

var pkmnImageWidth = 64; 
var pkmnImageHeight = 64; 
for (var i = 0; i < pokemon.length; i++){
	// How much to offset images to ensure they are centred
	var centreOffset = (platformWidth - pkmnImageWidth) / 2;
	pokemon[i].left = centreOffset + i * pkmnImageWidth;
	pokemon[i].width = pkmnImageWidth;
	pokemon[i].height = pkmnImageHeight;
	
	// Add view to Page Carousel
	pageCarousel2.add(pokemon[i]);
}
pokemonPicker.add(pickerBox);
pokemonPicker.add(pageCarousel2);
pokemonPicker.add(pickerDoneButton);
pokemonPicker.add(pickerBackButton);