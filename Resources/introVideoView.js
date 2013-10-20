var introVideo = Ti.UI.createWindow({
	title: 'Intro Video',
	backgroundColor: '#000000',
	orientationModes: [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT]
}); 

var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'video/introVid.mp4');

var videoPlayer = Ti.Media.createVideoPlayer({
	url: f.nativePath,
	backgroundColor: "blue",
	movieControlMode: Ti.Media.VIDEO_CONTROL_NONE,
	scalingMode: Ti.Media.VIDEO_SCALING_ASPECT_FIT,
	fullscreen: true,
	autoplay: true
});

// introVideo.add(videoPlayer);
videoPlayer.play();
