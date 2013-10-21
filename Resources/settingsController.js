soundSwitch.addEventListener('change', function(e){
	switchVals = [soundSwitch.value, saveBattlesSwitch.value]
	Ti.App.Properties.setList('switchVals', switchVals);
});

volSlider.addEventListener('change', function(e) {
    Ti.App.Properties.setDouble('volSlider', volSlider.value);
});

saveBattlesSwitch.addEventListener('change', function(e){
	switchVals = [soundSwitch.value, saveBattlesSwitch.value]
	Ti.App.Properties.setList('switchVals', switchVals);
});

settingsBackButton.addEventListener('click', function(e){
    switchWin(mainMenuView);
});

rewatchIntroVideo.addEventListener('click', function(e){
	introVideo.open();
});