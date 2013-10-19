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
function switchWin( xWinName, wLable ) 
{
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
		
		if (cWin == mainMenuView)
		{
			var text = 'Welcome ' + Ti.App.Properties.getString("PlayerName");
			Ti.App.Properties.setString('lastWindow', 'mainMenuView,' + text);
		}
		else if (cWin == battleHistory)
		switchWin(battleHistory, Ti.App.Properties.getString('lastWinLable'));
		else if (Ti.App.Properties.getString('lastWindow') == 'pokemonBattle')
		switchWin(pokemonBattle, Ti.App.Properties.getString('lastWinLable'));
		else if (Ti.App.Properties.getString('lastWindow') == 'pokemonPicker')
		switchWin(pokemonPicker, Ti.App.Properties.getString('lastWinLable'));
		else if (Ti.App.Properties.getString('lastWindow') == 'pokemonViewer')
		switchWin(pokemonViewer, Ti.App.Properties.getString('lastWinLable'));
		else if (Ti.App.Properties.getString('lastWindow') == 'settings')
		switchWin(settings, Ti.App.Properties.getString('lastWinLable'));
}
// Ti.include(pokemonBattleHistoryView.js);