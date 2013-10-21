//Pokemon Battle
var pokemonBattle = Ti.UI.createWindow({
	title: 'Pokemon Battle',
	backgroundImage: 'background.jpg'
});

var battleArena = Titanium.UI.ImageView({
	image: 'images/battle.png',
	center: {
		x: platformWidth * 0.5,
		y: platformHeight * 0.35
	}
});

var battleDoneButton = Ti.UI.createButton({
	backgroundImage: 'images/button/done.png',
	width: 143,
	height: 52,
	center: {
		x: platformWidth * 0.2,
		y: platformHeight * 0.85
	}
});

var battleBackButton = Ti.UI.createButton({
	backgroundImage: 'images/button/back.png',
	width: 143,
	height: 52,
	center: {
		x: platformWidth * 0.8,
		y: platformHeight * 0.85
	}
});

pokemonBattle.add(battleArena);
pokemonBattle.add(battleDoneButton);
pokemonBattle.add(battleBackButton);