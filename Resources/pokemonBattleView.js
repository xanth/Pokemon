//Pokemon Battle
var pokemonBattle = Ti.UI.createWindow({
	title: 'Pokemon Battle',
	backgroundImage: 'background.jpg'
});

//creates an image serving as a battle placeholder
var battleArena = Titanium.UI.createImageView({
	image: 'images/moves/battle.png',
	top: 200,
	left: 100
});

var nextPokemon = Titanium.UI.createImageView({
	image: 'images/moves/next.png',
	top: 450,
	left: 250
});

//Adds the pokemon moves to the battle window
var pokemonMoveTackle = Ti.UI.createButton({
	backgroundImage: 'images/moves/Tackle.png',
	width: 150,
	height: 52,
	center: {
		x: platformWidth * 0.75,
		y: platformHeight * 0.65
	}
});

var pokemonMoveFly = Ti.UI.createButton({
	backgroundImage: 'images/moves/Fly.png',
	width: 150,
	height: 52,
	center: {
		x: platformWidth * 0.25,
		y: platformHeight * 0.65
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

pokemonBattle.add(nextPokemon);
pokemonBattle.add(battleArena);
pokemonBattle.add(pokemonMoveTackle);
pokemonBattle.add(pokemonMoveFly);
pokemonBattle.add(battleDoneButton);
pokemonBattle.add(battleBackButton);