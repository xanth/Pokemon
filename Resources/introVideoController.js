videoPlayer.addEventListener('complete', function(e){
	if (e.reason == 0) {
		introVideo.hide(),
		// introVideo = null,
		switchWin(introWindow);
	}
	Ti.App.Properties.setBool('introWatched', true);
});
