  introDoneButton.addEventListener('click', function(e){
	
	Ti.App.Properties.setString("PlayerName", playerNameField.value);
	Ti.App.Properties.setBool('introWatched', false);
	
	name = playerNameField.value; 
	switchWin(mainMenuView, ('Welcome '+ name +' '));
	introWindow.close();
 });