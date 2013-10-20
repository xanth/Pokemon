Titanium.UI.setBackgroundImage('images/background.jpg');

var platformWidth = Ti.Platform.displayCaps.platformWidth;
var platformHeight = Ti.Platform.displayCaps.platformHeight;

//A function to make switching windows and adding lables easier

Ti.include("globalModel.js");
Ti.include("pickerModel.js");

Ti.include("introScreenView.js");
Ti.include("mainMenuView.js");
Ti.include("pokemonBattleView.js");
Ti.include("pokemonBattleHistoryView.js");
Ti.include("pokemonPickerView.js");
Ti.include("pokemonViewerView.js");
Ti.include("settingsView.js");

Ti.include("introScreenController.js");
Ti.include("mainMenuController.js");
Ti.include("pokemonBattleController.js");
Ti.include("pokemonPickerController.js");
Ti.include("pokemonViewerController.js");
Ti.include("pokemonBattleHistoryController.js");
Ti.include("settingsController.js");

//This opens the last window that the user was on
if(Ti.App.Properties.getBool('introWatched')){
	if (Ti.App.Properties.getString('lastWindow') == 'mainMenuView'){
		var text = 'Welcome ' + Ti.App.Properties.getString("PlayerName");
		switchWin(mainMenuView, text);
		playSound(main);
	}
	else if (Ti.App.Properties.getString('lastWindow') == 'battleHistory')
		switchWin(battleHistory, 'Battle History');
	
	else if (Ti.App.Properties.getString('lastWindow') == 'pokemonBattle')
		switchWin(pokemonBattle, 'Battle');
	
	else if (Ti.App.Properties.getString('lastWindow') == 'pokemonPicker')
		switchWin(pokemonPicker, 'Pokemon Picker');
	
	else if (Ti.App.Properties.getString('lastWindow') == 'pokemonViewer')
		switchWin(pokemonViewer, 'Pokemon Viewer');
	
	else if (Ti.App.Properties.getString('lastWindow') == 'settings')
		switchWin(settings, 'Settings');
}
// This opens the start screen if the app has never been run before or if the app settings have been wiped 
if(!Ti.App.Properties.getBool('introWatched')){
	switchWin(introWindow);
}