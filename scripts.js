console.log('hello');

function runAbc(iframe) {
	console.log('abc iframe loaded');
	console.log(iframe);
	var abc = iframe.contentWindow;
	console.log(abc);
	abc.ABC.IVIEW.video.loadJWVideo(videoParams.href);

	// iview-main.js
	// $('body.program-detail .play-button').click(function() {
	// 	var apiRef = videoParams.href;
	// 	ABC.IVIEW.video.loadJWVideo(apiRef);
	// 	$('#fullscreenPlayerOuter').css('display','block');
	// 	$('#fullscreenPlayerOuter').fullscreen();
	// });
}