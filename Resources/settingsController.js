soundSwitch.addEventListener('change', function(e){
  Ti.App.Properties.setBool('soundSwitch', soundSwitch.value);
});

saveBattlesSwitch.addEventListener('change', function(e){
  Ti.App.Properties.setBool('saveBattlesSwitch', saveBattlesSwitch.value);
});

settingsBackButton.addEventListener('click', function(e){
    switchWin(mainMenuView);
});

rewatchIntroVideo.addEventListener('click', function(e){
	switchWin(introWindow);
});