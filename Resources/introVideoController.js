videoPlayer.addEventListener('complete', function(e){
	if (e.reason == 0) {
		introVideo.close(),
		videoPlayer.close(),
		introWindow.open();
	}
});
