  introDoneButton.addEventListener('click', function(e){
	Ti.App.Properties.setString("PlayerName", playerNameField.value);
	name = playerNameField.value; 
	switchWin(mainMenuView, ('Welcome '+ name +' '));
 });