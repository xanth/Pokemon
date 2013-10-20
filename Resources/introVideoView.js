var introVideo = Ti.UI.createWindow({
	title: 'Intro Video',
	backgroundColor: '#000000',
	orientationModes: (Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT)
}); 

//A fix to play the video I found on StackOverflow
var videoURL = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'video/introVid.mp4');

//creates the video player and plays the video 
var videoPlayer = Ti.Media.createVideoPlayer({
	url: videoURL.nativePath,
	backgroundColor: "blue",
	movieControlMode: Ti.Media.VIDEO_CONTROL_NONE,
	scalingMode: Ti.Media.VIDEO_SCALING_ASPECT_FILL,
	fullscreen: true,
	autoplay: true
});

introVideo.add(videoPlayer);
// videoPlayer.play();]	
