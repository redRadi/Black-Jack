playerCards=0;
		playerPoints=0;
		dealerpoints=0;
		dealercards=0;
		function checkPoints() {
			if (playerPoints <= dealerpoints && dealerpoints <= 21) {
				$("#userpoints").append("<div class='lose'> You lose<div>");
			} else if (playerPoints >= dealerpoints) {
				$("#userpoints").append("<div class='win'> You Win<div>");
			}
		}
		function dealercard(){
			$("#dealercard").append("<div class='cardsclass' id='dcard"+dealercards+"'></div");
			newcardcolor=Math.floor(Math.random()*4);
				ypos=(newcardcolor)*244;
			 	yposs="-"+ypos+"px";
			 	newcardnumber=Math.floor(Math.random()*13);
			 	
			 	if(newcardnumber >9){
			 		dealerpoints=dealerpoints+10;
			 	}else if(newcardnumber>0){
			 		dealerpoints= dealerpoints+ newcardnumber+1;
			 	}else{
			 		dealerpoints=dealerpoints+11;
			 	}

			 	$("#dealerpoints").html(dealerpoints);
			 	xpos=(newcardnumber)*167.5;
			 	xposs= "-"+xpos+"px";
			 	poss=xposs+" "+yposs;
			 	$("#dcard"+dealercards).css({"background-position":poss});
			 	if(dealerpoints>21){
			 		$("#userpoints").append("<div class='win'> You Win<div>");
			 	}
			 	if(playerPoints) {
					checkPoints();
		 		}
			 	dealercards++;
		}
		$(document).ready(function(){
			$("#newcard").click(function(){
				$("#usercard").append("<div class='cardsclass' id='card"+playerCards+"'></div>");
				newcardcolor=Math.floor(Math.random()*4);
				ypos=(newcardcolor)*244;
			 	yposs="-"+ypos+"px";
			 	newcardnumber=Math.floor(Math.random()*13);
			 	if(newcardnumber >9){
			 		playerPoints=playerPoints+10;
			 	}else if(newcardnumber>0){
			 		playerPoints= playerPoints+ newcardnumber+1;
			 	}else{
			 		playerPoints=playerPoints+11;
			 	}
			 	
			 	$("#userpoints").html(playerPoints);
			 	xpos=(newcardnumber)*167.5;
			 	xposs= "-"+xpos+"px";
			 	poss=xposs+" "+yposs;
				
			 	$("#card"+playerCards).css({"background-position":poss});
			 	playerCards++;
			 	if(playerPoints>21){
			 		$("#userpoints").append("<div class='lose'> You lose<div>");
			 		$("#holdit").attr("disabled", true);
			 		$("#newcard").attr("disabled", true);
				}

			});
			dealercard();

			$("#holdit").click(function(){
		 		$("#holdit").attr("disabled", true);


				newcardcolor=Math.floor(Math.random()*4);
				ypos=(newcardcolor)*244;
			 	yposs="-"+ypos+"px";
			 	newcardnumber=Math.floor(Math.random()*13);
			 	if(newcardnumber >9){
			 		dealerpoints=dealerpoints+10;
			 	}else if(newcardnumber>0){
			 		dealerpoints= dealerpoints+ newcardnumber+1;
			 	}else{
			 		dealerpoints=dealerpoints+11;
			 	}
			 	
			 	xpos=(newcardnumber)*167.5;
			 	xposs= "-"+xpos+"px";
			 	poss=xposs+" "+yposs;

			 	$("#firscard").css({"background-position":poss});
			 	$("#dealerpoints").html(dealerpoints);
			 	$("#newcard").attr("disabled", true);

			 	if(dealerpoints >= 16) {
			 		checkPoints();
			 	} else {
			 		setTimeout(function(){ dealercard(); }, 1000);
			 		
			 	}

			});
		});