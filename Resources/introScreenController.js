  introDoneButton.addEventListener('click', function(e){
	Ti.App.Properties.setString("PlayerName", playerNameField.value);
	Ti.App.Properties.setBool('introWatched', true);
	name = playerNameField.value; 
	switchWin(mainMenuView, ('Welcome '+ name +' '));
 });