$(function(){
	$('.banner').fullpage({
		navigation:true,
	    navigationPosition:'right',
      	onLeave:function(index,next,dir){
      		$('.section').eq(next).find('span').html('');
	    	if(index == 2){
	    		$('.speechBubble').ready(function(){clearTimeout(bOne)}).removeClass('move').addClass('moveOut');
	    		$(".bubble1").ready(function(){clearTimeout(bubbleOne)}).removeClass("fadeIn").addClass("fadeOut");
				$(".bubble2").ready(function(){clearTimeout(bubbleTwo)}).removeClass("fadeIn").addClass("fadeOut");
				$(".bubble3").ready(function(){clearTimeout(bubbleThree)}).removeClass("fadeIn").addClass("fadeOut");
				$(".bubble4").ready(function(){clearTimeout(bubbleFour)}).removeClass("fadeIn").addClass("fadeOut");
	    	}
	    	if(index == 3){
	    		$(".paper1").ready(function(){clearTimeout(paperOne)}).removeClass("fadeIn").addClass("fadeOut");
				$(".paper2").ready(function(){clearTimeout(paperTwo)}).removeClass("fadeIn").addClass("fadeOut");
				$(".paper3").ready(function(){clearTimeout(paperThree)}).removeClass("fadeIn").addClass("fadeOut");
				$(".paper4").ready(function(){clearTimeout(paperFour)}).removeClass("fadeIn").addClass("fadeOut");
	    	}
	    	if(index == 4){
	    		$(".twoscreens").ready(function(){clearTimeout(screenOne)}).removeClass("move").addClass("moveOut");
				$(".screen2").ready(function(){clearTimeout(screenTwo)}).removeClass("bounceIn").addClass("bounceOut");
				$(".screen3").ready(function(){clearTimeout(screenThree)}).removeClass("bounceIn").addClass("bounceOut");
				$(".screen4").ready(function(){clearTimeout(screenFour)}).removeClass("bounceIn").addClass("bounceOut");
	    	}
	    	if(index == 5){
	    		$('.right-container').ready(function(){clearTimeout(rightOne)}).removeClass('move').addClass('moveOut');
	    		$('.folder1-front').ready(function(){clearTimeout(folderOne)}).removeClass('ac');
	    		$('.folder1-back').ready(function(){clearTimeout(folderTwo)}).removeClass('ac');
	    		$('.document-1').ready(function(){clearTimeout(documentOne)}).removeClass('moveUpDown').addClass('moveback');
	    		$('.folder-logo').ready(function(){clearTimeout(folderThree)}).removeClass("bounceIn").addClass("bounceOut");
	    	}
	    	if(index == 6){
	    		$('.results-container').ready(function(){clearTimeout(resultsOne)}).removeClass('fadejin').addClass('fadechu');
	    	}
	    	if(index == 7){
	    		$('.nikitouxiang').ready(function(){clearTimeout(nikiOne)}).removeClass('fadeleft').addClass('fadeleftout');
	    		$('.drewtouxiang').ready(function(){clearTimeout(drewOne)}).removeClass('faderight').addClass('faderightout');
	    	}
      	},
	    afterLoad:function(name,index){
	        if(index == 2){
	        	$('.section').eq(index-1).find('.speechBubble div').addClass('ac');
	        	$('.section')
	        	.eq(index-1)
	        	.find('span')
	        	.typed({
				   	strings: ["CONVERSATION"],
				    typeSpeed: 100,
				    startDelay: 400,
				})
				var bubble = $('.speechBubble');
					bOne = setTimeout(function(){
						bubble.stop().removeClass('moveOut').addClass('animated-1').addClass('move');
					},200)
	        	var bubble1 = $(".bubble1");
					bubbleOne = setTimeout(function() {
						bubble1.stop().removeClass("hidden fadeOut").addClass("animated-1").addClass("fadeIn");
					}, 333);
				var bubble2 = $(".bubble2");
					bubbleTwo = setTimeout(function() {
						bubble2.stop().removeClass("hidden fadeOut").addClass("animated-3").addClass("fadeIn");
					}, 555);
				var bubble3 = $(".bubble3");
					bubbleThree = setTimeout(function() {
						bubble3.stop().removeClass("hidden fadeOut").addClass("animated-2").addClass("fadeIn");
					}, 444);
				var bubble4 = $(".bubble4");
					bubbleFour = setTimeout(function() {
						bubble4.stop().removeClass("hidden fadeOut").addClass("animated-4").addClass("fadeIn");
					}, 666);
	        }
	        if(index == 3){
	        	$('.section')
	        	.eq(index-1)
	        	.find('span')
	        	.typed({
				   	strings: ["PLAN"],
				    typeSpeed: 100,
				    startDelay: 400,
				})
	        	var paper1 = $(".paper1");
					paperOne = setTimeout(function() {
						paper1.stop().removeClass("hidden fadeOut").addClass("animated-1").addClass("fadeIn");
					}, 333);
				var paper2 = $(".paper2");
					paperTwo = setTimeout(function() {
						paper2.stop().removeClass("hidden fadeOut").addClass("animated-2").addClass("fadeIn");
					}, 444);
				var paper3 = $(".paper3");
					paperThree = setTimeout(function() {
						paper3.stop().removeClass("hidden fadeOut").addClass("animated-3").addClass("fadeIn");
					}, 555);
				var paper4 = $(".paper4");
					paperFour = setTimeout(function() {
						paper4.stop().removeClass("hidden fadeOut").addClass("animated-3").addClass("fadeIn");
					}, 1000);
	        }
	        if(index == 4){
	        	$('.section')
	        	.eq(index-1)
	        	.find('span')
	        	.typed({
				   	strings: ["PRODUCE"],
				    typeSpeed: 100,
				    startDelay: 400,
				})
				var screen = $('.twoscreens');
					screenOne = setTimeout(function(){
						screen.stop().removeClass('moveOut').addClass('animated-1').addClass('move');
					})
	        	var screen2 = $(".screen2");
					screenTwo = setTimeout(function() {
						screen2.stop().removeClass("hidden bounceOut").addClass("animated-2").addClass("bounceIn");
					}, 333);
				var screen3 = $(".screen3");
					screenThree = setTimeout(function() {
						screen3.stop().removeClass("hidden bounceOut").addClass("animated-3").addClass("bounceIn");
					}, 666);
				var screen4 = $(".screen4");
					screenFour = setTimeout(function() {
						screen4.stop().removeClass("hidden bounceOut").addClass("animated-3").addClass("bounceIn");
					}, 999);
	        }
	        if(index == 5){
	        	$('.section')
	        	.eq(index-1)
	        	.find('span')
	        	.typed({
				   	strings: ["DELIVER"],
				    typeSpeed: 100,
				    startDelay: 400,
				})
				var right = $('.right-container');
					rightOne = setTimeout(function(){
						right.stop().removeClass('moveOut').addClass('animated-1').addClass('move');
					},200);
				var folderF = $('.folder1-front');
					folderOne = setTimeout(function(){
						folderF.stop().addClass('ac');
					},200);
				var folderB = $('.folder1-back');
					folderTwo = setTimeout(function(){
						folderB.stop().addClass('ac');
					},200);
				var document1 = $('.document-1');
					documentOne = setTimeout(function(){
						document1.stop().removeClass('moveback').addClass('moveUpDown');
					},200);
				var folderLogo = $('.folder-logo');
					folderThree = setTimeout(function(){
						folderLogo.stop().removeClass('hidden bounceOut').addClass('animated-5').addClass('bounceIn');
					},3500);
	        }
	        if(index == 6){
	        	$('.section')
	        	.eq(index-1)
	        	.find('span')
	        	.typed({
				   	strings: ["RESULTS"],
				    typeSpeed: 100,
				    startDelay: 400,
				})
				var results = $('.results-container');
					resultsOne = setTimeout(function(){
						results.stop().removeClass('fadechu').addClass('animated-5').addClass('fadejin');
					},200);
	        }
	        if(index == 7){
	        	$('.section')
	        	.eq(index-1)
	        	.find('span')
	        	.typed({
				   	strings: ["TALK"],
				    typeSpeed: 100,
				    startDelay: 400,
				})
	        	var niki = $('.nikitouxiang');
	        		nikiOne = setTimeout(function(){
	        			niki.stop().removeClass('fadeleftout').addClass('animated-5').addClass('fadeleft');
	        		},200);
	        	var drew = $('.drewtouxiang');
	        		drewOne = setTimeout(function(){
	        			drew.stop().removeClass('faderightout').addClass('animated-5').addClass('faderight');
	        		},200)

	        }
      	},
	});
	$('.nav-holder').on('click',function(){
		$(this).toggleClass('active')
	});
	$('.animateWord0').typed({
	    strings: ["UNABRIDGED SOFTWARE"],
	    typeSpeed: 100,
	});
	var span = $('#fp-nav ul li a span');
	span.addClass('hover-text');
	var arr = ['INTRODUCTION','CONVERSATION','PLAN','PRODUCE','DELIVER','RESULTS','TALK'];
	for(var i=0; i<arr.length; i++){
		$(span).eq(i).html(arr[i]);
	}
})