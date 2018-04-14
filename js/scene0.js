(function ($) {

	var US = $('#_0US'),
		architect = $('#_0architect'),
		highschool = $('#_0hs'),
		fp1 = $('#_0fp1'),
		fp2 = $('#_0fp2'),
		fp3 = $('#_0fp3'),
		fp4 = $('#_0fp4'),
		fp5 = $('#_0fp5'),
		fp6 = $('#_0fp6'),
		fp7 = $('#_0fp7'),
		t1 = $('#_0tx1'),
		t2 = $('#_0tx2'),
		t3 = $('#_0tx3');

	// Simple Tween
	$('g:not(#_0hs)').css({
		visibility: "hidden"
	});
	$('#fp').css({
		visibility: "visible"
	});
	var tl0 = new TimelineLite({
		paused: false
	});
	tl0.timeScale(2); 
	tl0.from(fp1, 1, {
			autoAlpha: 0
		})
		.from(t1, 1, {
			y: -100,
			autoAlpha: 0
		},'-=0.7')
		.from(fp2, 1, {
			autoAlpha: 0
		})
		.from(US, 1, {
			autoAlpha: 0
		},'-=0.7')
		.from(fp3, 1, {
			autoAlpha: 0
		})
		.from(t2, 1, {
			y: -100,
			autoAlpha: 0
		},'-=0.7')
		.from(fp4, 1, {
			autoAlpha: 0
		})
		.from(architect, 1, {
			autoAlpha: 0
		},'-=0.7')
		.from(fp5, 1, {
			autoAlpha: 0
		})
		.from(t3, 1, {
			y: -100,
			autoAlpha: 0
		})

		.from(fp6, 1, {
			autoAlpha: 0
		})
		.from(fp7, 1, {
			autoAlpha: 0
		});

})(jQuery);
