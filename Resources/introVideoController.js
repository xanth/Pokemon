videoPlayer.addEventListener('complete', function(e){
	introWindow.open();
	if (e.reason == 0) {
		introVideo.hide(),
		// introVideo = null,
		introWindow.open();
	}
});
