var introWindow = Titanium.UI.createWindow({  
	title:'Intro',
	backgroundImage:'images/welcome-background.jpg'
});
//The background is different from other windows, as it is a placeholder for the video

var introDoneButton = Ti.UI.createButton({
	backgroundImage: 'images/button/done.png',
	width: 143,
	height: 52,
	center: {
		x: platformWidth * 0.8,
		y: platformHeight * 0.8
	}
});

var playerNameField = Ti.UI.createTextField({
	backgroundColor: 'white',
	opacity: 0.75,
	width: 280,
	height: 60,
	hintText: "Enter player name",
	center: {
		x: platformWidth * 0.52,
		y: platformHeight * 0.72
	}
});
var name;
introWindow.add(introDoneButton);
introWindow.add(playerNameField);
