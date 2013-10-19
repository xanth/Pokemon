// return to home screen
historyBackButton.addEventListener('click', function(e){
    switchWin(mainMenuView);
});

goButton.addEventListener('click', function(e){
	switchWin(pokemonBattle, "Battle");
});

