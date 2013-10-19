//MAIN MENU
var mainMenuView = Titanium.UI.createWindow({  
	backgroundImage:'background.jpg',
});

var battleButton = Titanium.UI.createButton({
	backgroundImage: 'images/button/battle.png',
	width: 277,
	height: 52,
	center: {
		x: platformWidth * 0.5,
		y: platformHeight * 0.2
	}
});

var battleHistoryButton = Titanium.UI.createButton({
	backgroundImage: 'images/button/battleHistory.png',
	width: 277,
	height: 52,
	center: {
		x: platformWidth * 0.5,
		y: platformHeight * 0.4
	}
});

var pokemonButton = Titanium.UI.createButton({
	backgroundImage: 'images/button/pokemon.png',
	width: 277,
	height: 52,
	center: {
		x: platformWidth * 0.5,
		y: platformHeight * 0.6
	}
});

var settingsButton = Titanium.UI.createButton({
	backgroundImage: 'images/button/settings.png',
	width: 277,
	height: 52,
	center: {
		x: platformWidth * 0.5,
		y: platformHeight * 0.8
	}
});

//aaaamainMenuView.add(menuTitle);
//mainMenuView.add(welcomeLabel);
mainMenuView.add(battleButton);
mainMenuView.add(pokemonButton);
mainMenuView.add(battleHistoryButton);
mainMenuView.add(settingsButton);