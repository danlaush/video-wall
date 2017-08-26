console.log('hello');

var videos = document.querySelectorAll('.video__overlay');

for (video of videos) {
	video.addEventListener('click', function(e) {
		console.log(e.target.parentNode);
		var active = document.querySelector('.video--active');
		if(active) {
			active.classList.remove('video--active');
			if(!active.isSameNode(e.target.parentNode))
				e.target.parentNode.classList.add('video--active');
		} else {
			e.target.parentNode.classList.add('video--active');
		}

	});
}

function runAbc(iframe) {
	// console.log('abc iframe loaded');
	// console.log(iframe);
	// var abc = iframe.contentWindow;
	// console.log(abc);
	// abc.ABC.IVIEW.video.loadJWVideo(videoParams.href);

	// iview-main.js
	// $('body.program-detail .play-button').click(function() {
	// 	var apiRef = videoParams.href;
	// 	ABC.IVIEW.video.loadJWVideo(apiRef);
	// 	$('#fullscreenPlayerOuter').css('display','block');
	// 	$('#fullscreenPlayerOuter').fullscreen();
	// });
}