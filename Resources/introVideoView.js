var introVideo = Ti.UI.createWindow({
title: 'Intro Video',
orientationModes: [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT]
}); 

//creates the video player and plays the video 
var videoPlayer = Ti.Media.createVideoPlayer({
	url: (Ti.Filesystem.resourcesDirectory, 'video/introVid.mp4'),
	backgroundColor: '#000',
	mediaControlStyle: Ti.Media.VIDEO_CONTROL_DEFAULT,
	scalingMode: Ti.Media.VIDEO_SCALING_ASPECT_FIT,
	fullscreen: true,
	autoplay: true
});
Ti.App.Properties.setBool('introWatched', true);
introVideo.add(videoPlayer);
// videoPlayer.play();]	