// return to home screen
historyBackButton.addEventListener('click', function(e){
    switchWin(mainMenuView);
});

goButton.addEventListener('click', function(e){
	switchWin(pokemonBattle, "Battle");
});

shareButton.addEventListener('click', function(e){
	emailDialog.open();
});

emailDialog.addEventListener('complete',function(e) {
    if (e.result == emailDialog.SENT) {
        alert("message was not sent");
        }
    else {
        alert("message was not sent. result = " + e.result);
    	}
});