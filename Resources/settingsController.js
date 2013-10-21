soundSwitch.addEventListener('change', function(e){
  Ti.App.Properties.setBool('soundSwitch', soundSwitch.value);
});

volSlider.addEventListener('change', function(e) {
    Ti.App.Properties.setDouble('volSlider', volSlider.value);
});

saveBattlesSwitch.addEventListener('change', function(e){
  Ti.App.Properties.setBool('saveBattlesSwitch', saveBattlesSwitch.value);
});

settingsBackButton.addEventListener('click', function(e){
    switchWin(mainMenuView);
});

rewatchIntroVideo.addEventListener('click', function(e){
	introVideo.open();
});