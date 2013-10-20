//SETTINGS
var settings = Ti.UI.createWindow({
	title: 'Settings Window',
	backgroundImage: 'images/background.jpg'
});

var soundImage = Ti.UI.createImageView({
  image:'images/audio-setting.gif',
  	center: {
		x: platformWidth * 0.5,
		y: platformHeight * 0.2
	}
});

var soundSwitch = Ti.UI.createSwitch({
  value:Ti.App.Properties.getBool('soundSwitch', true),
  center: {
		x: platformWidth * 0.5,
		y: platformHeight * 0.3
	}
});

var volSlider = Titanium.UI.createSlider({
    min: 0,
    max: 100,
    width: '75%',
    center: { 
		x: platformWidth * 0.5,
		y: platformHeight * 0.36 },
    value: Ti.App.Properties.getDouble('volSlider', 50 )
    });

var saveImage = Ti.UI.createImageView({
  image:'images/save-setting.gif',
  	center: {
		x: platformWidth * 0.5,
		y: platformHeight * 0.46
	}
});

var saveBattlesSwitch = Ti.UI.createSwitch({
  value:Ti.App.Properties.getBool('saveBattlesSwitch', true),
  center: {
		x: platformWidth * 0.5,
		y: platformHeight * 0.56
	}
});

var rewatchIntroVideo = Ti.UI.createButton({
	backgroundImage: 'images/button/rewatch.png',
	width: 250,
	height: 52,
	center: {
		x: platformWidth * 0.5,
		y: platformHeight * 0.7
	}
});

var settingsBackButton = Ti.UI.createButton({
	backgroundImage: 'images/button/back.png',
	width: 143,
	height: 52,
	center: {
		x: platformWidth * 0.8,
		y: platformHeight * 0.85
	}
});

settings.add(soundImage);
settings.add(saveImage);
settings.add(soundSwitch);
settings.add(saveBattlesSwitch);
settings.add(settingsBackButton);
settings.add(rewatchIntroVideo);
settings.add(volSlider);