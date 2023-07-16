//  author Piers Rueb

$(document).ready(function(){ 

	//  globals
	var clientHeight = document.documentElement.clientHeight;
	var clientWidth = document.documentElement.clientWidth;
	var viewPort = Math.min(clientHeight, clientWidth) / 100;
	var tileClicked = false;
	var firstTileClicked; 
	var secondTileClicked; 
	var topPosFir = 0;
	var leftPosFir = 0;
	var topPosSec = 0;
	var leftPosSec = 0;
	var shuffle = Math.floor((Math.random() * 4) + 1);
	var tebak = Math.floor((Math.random()*20)+10);
	var moves = 0;
	var secs = 0;

	function shuffleTiles(){
		if(shuffle == 1){
			$('#piece-1').css({'top': '60vmin', 'left': '0vmin'});
			$('#piece-2').css({'top': '30vmin', 'left': '60vmin'});
			$('#piece-3').css({'top': '30vmin', 'left': '30vmin'});
			$('#piece-4').css({'top': '60vmin', 'left': '30vmin'});
			$('#piece-5').css({'top': '0vmin', 'left': '60vmin'});
			$('#piece-6').css({'top': '0vmin', 'left': '30vmin'});
			$('#piece-7').css({'top': '60vmin', 'left': '60vmin'});
			$('#piece-8').css({'top': '30vmin', 'left': '0vmin'});
			$('#piece-9').css({'top': '0vmin', 'left': '0vmin'});
		} else if(shuffle == 2){
			$('#piece-1').css({'top': '0vmin', 'left': '60vmin'});
			$('#piece-2').css({'top': '0vmin', 'left': '0vmin'});
			$('#piece-3').css({'top': '30vmin', 'left': '60vmin'});
			$('#piece-4').css({'top': '0vmin', 'left': '30vmin'});
			$('#piece-5').css({'top': '60vmin', 'left': '30vmin'});
			$('#piece-6').css({'top': '60vmin', 'left': '00vmin'});
			$('#piece-7').css({'top': '60vmin', 'left': '60vmin'});
			$('#piece-8').css({'top': '30vmin', 'left': '30vmin'});
			$('#piece-9').css({'top': '30vmin', 'left': '0vmin'});
		} else if(shuffle == 3){
			$('#piece-1').css({'top': '60vmin', 'left': '0vmin'});
			$('#piece-2').css({'top': '0vmin', 'left': '60vmin'});
			$('#piece-3').css({'top': '30vmin', 'left': '30vmin'});
			$('#piece-4').css({'top': '60vmin', 'left': '30vmin'});
			$('#piece-5').css({'top': '0vmin', 'left': '30vmin'});
			$('#piece-6').css({'top': '60vmin', 'left': '60vmin'});
			$('#piece-7').css({'top': '30vmin', 'left': '0vmin'});
			$('#piece-8').css({'top': '0vmin', 'left': '0vmin'});
			$('#piece-9').css({'top': '30vmin', 'left': '60vmin'});
		} else if(shuffle == 4){
			$('#piece-1').css({'top': '60vmin', 'left': '0vmin'});
			$('#piece-2').css({'top': '30vmin', 'left': '60vmin'});
			$('#piece-3').css({'top': '0vmin', 'left': '30vmin'});
			$('#piece-4').css({'top': '60vmin', 'left': '30vmin'});
			$('#piece-5').css({'top': '0vmin', 'left': '0vmin'});
			$('#piece-6').css({'top': '30vmin', 'left': '0vmin'});
			$('#piece-7').css({'top': '60vmin', 'left': '60vmin'});
			$('#piece-8').css({'top': '0vmin', 'left': '60vmin'});
			$('#piece-9').css({'top': '30vmin', 'left': '30vmin'});
		}
	}

	$(window).load(function(){
		setTimeout(function(){
			shuffleTiles();
			setInterval(function(){ 
				secs++ 
			}, 1000);
		}, 1000);
	});

	//  play the game

	$('.pieces').click(function(){

		if(tileClicked == false){  //  if no tile is clicked

			//  set variables
			firstTileClicked = $(this).attr('id');
			topPosFir = $(this).css('top'); 
			leftPosFir = $(this).css('left'); 

			//  highlight tile
			$(this).addClass('glow');
			tileClicked = true;

		} else{  //  if you've clicked a tile

			//  set variables
			secondTileClicked = $(this).attr('id');
			topPosSec = $(this).css('top'); 
			leftPosSec = $(this).css('left');

			//  animations
			$('#' + firstTileClicked).css({'top' : topPosSec , 'left' : leftPosSec});
			$('#' + secondTileClicked).css({'top' : topPosFir , 'left' : leftPosFir});

			//  remove the glow and reset the first tile
			$('.pieces').removeClass('glow');
			tileClicked = false;

			//  test for the win

			setTimeout(function(){
				if(
					parseInt($('#piece-1').css('left')).toString()+'px' == '0px' && $('#piece-1').css('top') == '0px' && 
					parseInt($('#piece-2').css('left')).toString()+'px' == parseInt((viewPort*30)).toString()+'px' && $('#piece-2').css('top') == '0px' &&
					parseInt($('#piece-3').css('left')).toString()+'px' == parseInt((viewPort*60)).toString()+'px' && $('#piece-3').css('top') == '0px' &&
					parseInt($('#piece-4').css('left')).toString()+'px' == '0px' && parseInt($('#piece-4').css('top')).toString()+'px' == parseInt((viewPort*30)).toString()+'px' &&
					parseInt($('#piece-5').css('left')).toString()+'px' == parseInt((viewPort*30)).toString()+'px' && parseInt($('#piece-5').css('top')).toString()+'px' == parseInt((viewPort*30)).toString()+'px' &&
					parseInt($('#piece-6').css('left')).toString()+'px' == parseInt((viewPort*60)).toString()+'px' && parseInt($('#piece-6').css('top')).toString()+'px' == parseInt((viewPort*30)).toString()+'px' &&
					parseInt($('#piece-7').css('left')).toString()+'px' == '0px' && parseInt($('#piece-7').css('top')).toString()+'px' == parseInt((viewPort*60)).toString()+'px' &&
					parseInt($('#piece-8').css('left')).toString()+'px' == parseInt((viewPort*30)).toString()+'px' && parseInt($('#piece-8').css('top')).toString()+'px' == parseInt((viewPort*60)).toString()+'px' &&
					parseInt($('#piece-9').css('left')).toString()+'px' == parseInt((viewPort*60)).toString()+'px' && parseInt($('#piece-9').css('top')).toString()+'px' == parseInt((viewPort*60)).toString()+'px' 

				){
					var p = '<a>Happy Birthday Mommy!!!<br>Emmmaah &#x1F618&#x1F618&#x1F618 Suzuu sayanggg mommy<br>Sorry suzu gak pande buat puzzlenya heheh<br><a href="https://www.google.com">Mommyy, kata dadyy suruh klik ini &#x1F607&#x1F607&#x1F607</a>'
					$('p').append(p);
					$('article').addClass('glow-2');
					moves = 0;
				}
			}, 1000);

			//  increment the move counter
			moves++

		}

	});  //  end the click function

});



