$(function () { 
	var _0hs = $('#_0hs'),
		_0US = $('#_0US'),
		_0arch = $('#_0arch'),
		_0fp1 = $('#_0fp1'),
		_0fp2 = $('#_0fp2'),
		_0fp3 = $('#_0fp3'),
		_0fp4 = $('#_0fp4'),
		_0fp5 = $('#_0fp5'),
		_0fp6 = $('#_0fp6'),
		_0fp7 = $('#_0fp7'),
		_0fp8 = $('#_0fp8'),
		_0t1 = $('#_0tx1'),
		_0t2 = $('#_0tx2'),
		_0t3 = $('#_0tx3'),
		_0library = $('#_0library'),
		_0wheel = $('#_0wheel');
	
	var _1hs = $('#_1hs'),
		_1bevo = $('#_1bevo'),
		_1maga = $('#_1maga'),
		_1wall = $('#_1wall'),
		_1fp1 = $('#_1fp1'),
		_1fp2 = $('#_1fp2'),
		_1fp3 = $('#_1fp3'),
		_1fp4 = $('#_1fp4'),
		_1fp5 = $('#_1fp5'),
		_1fp6 = $('#_1fp6'),
		_1fp7 = $('#_1fp7'),
		_1fp8 = $('#_1fp8'),
		_1fp9 = $('#_1fp9'),
		_1fp10 = $('#_1fp10'),
		_1fp11 = $('#_1fp11'),
		_1fp12 = $('#_1fp12'),
		_1t1 = $('#_1tx1'),
		_1t2 = $('#_1tx2'),
		_1t3 = $('#_1tx3'),
		_1tower = $('#_1tower'),
		_1plane = $('#_1plane');

	var _2belo = $('#_2belo'),
		_2Japan = $('#_2Japan'),
		_2marry = $('#_2marry'),
		_2casper = $('#_2casper'),
		_2media = $('#_2media'),
		_2fp1 = $('#_2fp1'),
		_2fp2 = $('#_2fp2'),
		_2fp3 = $('#_2fp3'),
		_2fp4 = $('#_2fp4'),
		_2fp5 = $('#_2fp5'),
		_2fp6 = $('#_2fp6'),
		_2fp7 = $('#_2fp7'),
		_2fp8 = $('#_2fp8'),
		_2fp9 = $('#_2fp9'),
		_2fp10 = $('#_2fp10'),	
		_2cp1 = $('#_2cp1'),
		_2cp2 = $('#_2cp2'),
		_2cp3 = $('#_2cp3'),
		_2cp4 = $('#_2cp4'),
		_2cp5 = $('#_2cp5'),
		_2cp6 = $('#_2cp6'),
		_2cp7 = $('#_2cp7'),
		_2cp8 = $('#_2cp8'),
		_2cp9 = $('#_2cp9'),
		_2cp10 = $('#_2cp10'),
		_2cp11 = $('#_2cp11'),
		_2cp12 = $('#_2cp12'),
		_2cp13 = $('#_2cp13'),
		_2t1 = $('#_2tx1'),
		_2t2 = $('#_2tx2'),
		_2t3 = $('#_2tx3'),
		_2t4 = $('#_2tx4');

	
	var flightpath = {
			entry : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 300,	y: 280},
						{x: 400,	y: 310}
					]
			},
			looping : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 510,	y: 360},
						{x: 620,	y: 240},
						{x: 500,	y: 200},
						{x: 380,	y: 320},
						{x: 500,	y: 360},
						{x: 580,	y: 320},
						{x: 620,	y: 315}
					]
			},
			leave : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 660,	y: 320},
						{x: 800,	y: 430},
						{x: $(window).width() + 800,	y: 500},
					]
			}
		};
		var controller = new ScrollMagic.Controller();
		var slides = new TimelineMax()

			.to("#slideContainer", 0.5, {z: -150})		
			.to("#slideContainer", 1,   {x: "-25%"})	
			.to("#slideContainer", 0.5, {z: 0})	

			.from(_0t1, 1, {y: -100,autoAlpha: 0})
			.from(_0fp1, 1, {autoAlpha: 0},'-=0.5')
			.from(_0fp2, 1, {autoAlpha: 0},'-=0.5')
			.from(_0US, 1, {autoAlpha: 0})
			.from(_0t2, 1, {y: -100,autoAlpha: 0})
			.from(_0fp3, 1, {autoAlpha: 0},'-=0.5')
			.from(_0fp4, 1, {autoAlpha: 0},'-=0.5')
			.from(_0fp5, 1, {autoAlpha: 0},'-=0.5')
			.from(_0arch, 1, {y: -100, autoAlpha: 0})
			.from(_0t3, 1, {y: -100,autoAlpha: 0})
			.from(_0fp6, 1, {autoAlpha: 0},'-=0.5')
			.from(_0fp7, 1, {autoAlpha: 0},'-=0.5')
			.from(_0fp8, 1, {autoAlpha: 0},'-=0.5')
		
			.from(_0library, 1, {autoAlpha: 0})
			.from(_0wheel, 1, {autoAlpha: 0})
		
			.to("#slideContainer", 0.5, {z: -150, delay: 1})
			.to("#slideContainer", 1,   {x: "-50%"})
			.to("#slideContainer", 0.5, {z: 0})

			.from(_1t1, 1, {y: -100,autoAlpha: 0})
			.from(_1maga, 1, {autoAlpha: 0})	
			.from(_1fp1, 1, {autoAlpha: 0},'-=0.5')
			.from(_1fp2, 1, {autoAlpha: 0},'-=0.5')
			.from(_1fp3, 1, {autoAlpha: 0},'-=0.5')
			.from(_1t2, 1, {y: -100,autoAlpha: 0})
			.from(_1fp4, 1, {autoAlpha: 0},'-=0.5')
			.from(_1fp5, 1, {autoAlpha: 0},'-=0.5')
			.from(_1fp6, 1, {autoAlpha: 0},'-=0.5')
			.from(_1t3, 1, {y: -100,autoAlpha: 0})
			.from(_1bevo, 1, {autoAlpha: 0})
			.from(_1fp7, 1, {autoAlpha: 0},'-=0.2')
			.from(_1fp8, 1, {autoAlpha: 0},'-=0.2')
			.from(_1fp9, 1, {autoAlpha: 0},'-=0.2')
			.from(_1fp10, 1, {autoAlpha: 0},'-=0.2')
			.from(_1fp11, 1, {autoAlpha: 0},'-=0.2')
			.from(_1fp12, 1, {autoAlpha: 0},'-=0.2')
		
			.from(_1wall, 1, {autoAlpha: 0})
			.to(_1hs, 1, {autoAlpha: 0})
			.from(_1tower, 1, {autoAlpha: 0})
		
			.from(_1plane, 1, {autoAlpha: 0})
			.to(_1plane, 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut})
			.to(_1plane, 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut})
			.to(_1plane, 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut})
	
			.to("#slideContainer", 0.5, {z: -150, delay: 1})
			.to("#slideContainer", 1,   {x: "-75%"})
			.to("#slideContainer", 0.5, {z: 0})

			.from(_2t1, 1, {y: -100,autoAlpha: 0})
			.from(_2Japan, 1, {autoAlpha: 0})
			.from(_2fp1, 1, {autoAlpha: 0},'-=0.5')
			.from(_2fp2, 1, {autoAlpha: 0},'-=0.5')
			.from(_2t2, 1, {y: -100,autoAlpha: 0})
			.from(_2fp3, 1, {autoAlpha: 0},'-=0.5')
			.from(_2fp4, 1, {autoAlpha: 0},'-=0.5')
			.from(_2casper, 1, {autoAlpha: 0})
			.from(_2cp1, 1, {autoAlpha: 0},'-=0.5')
			.from(_2cp2, 1, {autoAlpha: 0},'-=0.5')
			.from(_2fp5, 1, {autoAlpha: 0},'-=0.5')	
			.from(_2cp3, 1, {autoAlpha: 0},'-=0.5')
			.from(_2cp4, 1, {autoAlpha: 0},'-=0.5')
			.from(_2t3, 1, {y: -100,autoAlpha: 0})
			.from(_2marry, 1, {autoAlpha: 0})
			.from(_2fp6, 1, {autoAlpha: 0},'-=0.5')
			.from(_2cp5, 1, {autoAlpha: 0},'-=0.5')
			.from(_2fp7, 1, {autoAlpha: 0},'-=0.5')
			.from(_2cp6, 1, {autoAlpha: 0},'-=0.5')
			.from(_2cp7, 1, {autoAlpha: 0},'-=0.5')
			.from(_2fp8, 1, {autoAlpha: 0},'-=0.5')
			.from(_2t4, 1, {y: -100,autoAlpha: 0})	
			.from(_2cp8, 1, {autoAlpha: 0},'-=0.5')
			.from(_2cp9, 1, {autoAlpha: 0},'-=0.5')
			.from(_2cp10, 1, {autoAlpha: 0},'-=0.5')
			.from(_2media, 1, {autoAlpha: 0})
			.from(_2fp9, 1, {autoAlpha: 0},'-=0.5')
			.from(_2fp10, 1, {autoAlpha: 0},'-=0.5')
			.from(_2cp11, 1, {autoAlpha: 0},'-=0.5')
			.from(_2cp12, 1, {autoAlpha: 0},'-=0.5')
			.from(_2cp13, 1, {autoAlpha: 0},'-=0.5');

		var scene = new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "400%"
			})
			.setPin("#pinContainer")
			.setTween(slides)
			.addTo(controller);
	});
