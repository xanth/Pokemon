//Magic number. Will incewmnet after each battle when app is functioning
var battlesFought = 3;

var battleHistoryData = [
	{title: 'Battle 1'},
	{title: 'Battle 2'},
	{title: 'Battle 3'}
];

var currentPickerRow = battleHistoryData[0];

var cWin;
var pWin;
var cLable;
var pLable;
function switchWin( xWinName, wLable ) {
        if ((!xWinName && !wLable) && !pWin){
        	alert ('no prior window');
        }
        else if (!xWinName && !wLable) {
        	xWinName = pWin;
        	wLable = pLable; 
		}
        if (cWin) cWin.close();
 
        xWinName.open();
        if(wLable){
        	var lable = Ti.UI.createLabel({
			backgroundImage: 'images/title.gif',
			text: ( wLable ),
			color: '#000000',
			width: 184,
			height: 44,
			textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			center: {
				x: platformWidth * 0.5,
				y: platformHeight * 0.05
			}
			});
        	xWinName.add(lable);
        }
        pWin = cWin;
        pLable = cLable;
        cWin = xWinName;
        cLable = wLable;
        
        
		// This section saves window that the window switcher switched to the lastWindow App.Properties.setString
		if (cWin == mainMenuView) {
			Ti.App.Properties.setString('lastWindow', 'mainMenuView');
			playSound('main');
			}
		else if (cWin == battleHistory)
			Ti.App.Properties.setString('lastWindow', 'battleHistory');
		
		else if (cWin == pokemonBattle)
			Ti.App.Properties.setString('lastWindow', 'pokemonBattle');
		
		else if (cWin == pokemonPicker)
			Ti.App.Properties.setString('lastWindow', 'pokemonPicker');
		
		else if (cWin == pokemonViewer)
			Ti.App.Properties.setString('lastWindow', 'pokemonViewer');
		
		else if (cWin == settings)
			Ti.App.Properties.setString('lastWindow', 'settings');
}
// Setup sound
var sound = 'main';
playIt = Ti.Media.createSound({
    url : 'audio/'+ sound +'.wav'
	});
function playSound ( sound ){
	
	playIt.volume = Ti.App.Properties.getDouble('volSlider', 50 ) * 0.01
	
	if (Ti.App.Properties.getBool('soundSwitch', true)) {
		playIt.play();
		Ti.API.log(playIt.url);
	}
}