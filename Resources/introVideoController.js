videoPlayer.addEventListener('complete', function(e){
	if (e.reason == 0) {
		introVideo.hide(),
		// introVideo = null,
		introWindow.open();
	}
});
