	var introVideo = Ti.UI.createWindow({
	title: 'Intro Video',
	orientationModes: (Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT)
}); 

//creates the video player and plays the video 
var videoPlayer = Ti.Media.createVideoPlayer({
	url: (Ti.Filesystem.resourcesDirectory, 'video/introVid.mp4'),
	backgroundColor: '#000',
	movieControlStyle: Ti.Media.VIDEO_CONTROL_EMBEDDED,
	scalingMode: Ti.Media.VIDEO_SCALING_ASPECT_FIT,
	fullscreen: true,
	autoplay: true
});

introVideo.add(videoPlayer);
// videoPlayer.play();]	
