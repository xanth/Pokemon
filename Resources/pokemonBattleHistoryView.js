var battleHistory = Ti.UI.createWindow({
	title: 'Battle History',
	backgroundImage: 'images/background.jpg'
});

var historyBackButton = Ti.UI.createButton({
	backgroundImage: 'images/button/back.png',
	width: 143,
	height: 52,
	center: {
		x: platformWidth * 0.8,
		y: platformHeight * 0.85
	}
});

var battleHistoryData = [];
battleHistoryData[0] = Ti.UI.createPickerRow({title: 'Battle 1'});
battleHistoryData[1] = Ti.UI.createPickerRow({title: 'Battle 2'});
battleHistoryData[2] = Ti.UI.createPickerRow({title: 'Battle 3'});


var pickerLabel = Ti.UI.createLabel({
	text: 'Pick a battle!',
	font: {fontSize: 30},
	color: 'white',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	backgroundImage: 'images/labelBackground.png',
	center: {
		y: platformHeight * 0.2
	},
	width: 250,
	height: 52
});

var historyPicker = Ti.UI.createPicker({
	top: 201,
	selectionIndicator: true
});

var goButton = Ti.UI.createButton({
	backgroundImage: 'images/labelBackground.png',
	title: "Go!",
	color: 'white',
	width: 150,
	height: 52,
	center: {
		y: platformHeight* 0.5
	}
});

var shareButton = Ti.UI.createButton({
	backgroundImage: 'images/labelBackground.png',
	title: "Share",
	color: 'white',
	width: 150,
	height: 52,
	center: {
		y: platformHeight* 0.7
	}
});

var emailDialog = Titanium.UI.createEmailDialog();
emailDialog.setSubject('I just played The Pokémon Battle App');
emailDialog.setToRecipients(['']);
emailDialog.setMessageBody('Play The Pokémon Battle App its the best game ever! \n http://app.pokemon.com/');

historyPicker.add(battleHistoryData);
battleHistory.add(pickerLabel);
battleHistory.add(historyPicker);
battleHistory.add(goButton);
battleHistory.add(shareButton);
battleHistory.add(historyBackButton);
