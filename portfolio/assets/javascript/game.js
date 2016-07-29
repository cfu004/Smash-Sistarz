$(document).ready(function(){

var char0 = {
	name:"Saitama SANSEI",
	hp:200, 
	atk:30,
	catk:30,
	attack:function(defender){
		defender.hp = defender.hp - char0.atk;
	},
	counter_attack:function(attacker){
		attacker.hp = attacker.hp - 30;
	}
};

var char1 = {
	name:"IwannaGoHome",
	hp:100,
	atk:1,
	catk:1,
	attack:function(defender){
		defender.hp = defender.hp - char1.atk;
	},
	counter_attack:function(attacker){
		attacker.hp = attacker.hp - 1;
	}
};

var char2 = {
	name:"Jackie O Chan",
	hp:180,
	atk:36,
	catk:36,
	attack:function(defender){
		defender.hp = defender.hp - char2.atk;
	},
	counter_attack:function(attacker){
		attacker.hp = attacker.hp - 36;
	}
};

var char3 = {
	name:"Draco Malfoy",
	hp:160,
	atk:8,
	catk:8,
	attack:function(defender){
		defender.hp = defender.hp - char3.atk;
	},
	counter_attack:function(attacker){
		attacker.hp = attacker.hp - 8;
	}
};

var audio = new Audio('win.mp3');
var audio_gg = new Audio('game_over.mp3');
var audio_theme = new Audio('mario_theme_song.mp3');

//restart button
$("#restart_button").click(function(){
	location.reload();
});


// char0 === false;
// char1 === false;
// char2 === false;
// char3 === false;

// Character Selections and set ups
//character0 set up
$("#character0").click(function(){
	$("#character0").appendTo("#row4")
	$("#character1").appendTo("#first_col2").click(function(){
		
		$("#character1").appendTo("#first_col3")
		$("#character0").appendTo("#row4")

		 $("#attack_button").click(function(){
		 	

		char0.attack(char1);
        char1.counter_attack(char0);
        $("#row11").html(" you attacked " + char1.name + " for " + char0.atk + " damage!!!");
        $("#row12").html(char1.name + " attacked you back " + " for " + char1.catk + " damage!");
        $("#char0_hp").html(char0.hp - char1.catk);
        $("#char1_hp").html(char1.hp - char0.atk);
        char0.atk = char0.atk+10;
        
        if(char0.hp <= 0){
        	alert("You lose.. Game over...");
        	audio_gg.play();
        }
        else if(char1.hp <= 0){
        	$("#row11").html("Ez pz, you win!");
        	$("#row12").html("Please select another rival~");
        	$('#character1').remove();
        	audio.play();
        	
        } 

       return;
    });
	});


	$("#character2").appendTo("#second_col2").click(function(){
		$("#character2").appendTo("#first_col3")
		$("#character0").appendTo("#row4")

		$("#attack_button").click(function(){

		char0.attack(char2);
        char2.counter_attack(char0);
        $("#row11").html(" you attacked " + char2.name + " for " + char0.atk + " damage!!!");
        $("#row12").html(char2.name + " attacked you back " + " for " + char2.catk + " damage!");
        $("#char0_hp").html(char0.hp - char2.catk);
        $("#char2_hp").html(char2.hp - char0.atk);

        char0.atk = char0.atk+10;
        
        if(char0.hp <= 0){
        	alert("You lose.. Game over...");
        	audio_gg.play();
        }
        else if(char2.hp <= 0){
        	$("#row11").html("Ez pz, you win!");
        	$("#row12").html("Please select another rival~");
        	$('#character2').remove();
        	audio.play();
        } 

    });

	});

	$("#character3").appendTo("#third_col2").click(function(){
		$("#character3").appendTo("#first_col3")
		$("#character0").appendTo("#row4")

		$("#attack_button").click(function(){

		char0.attack(char3);
        char3.counter_attack(char0);
        $("#row11").html(" you attacked " + char3.name + " for " + char0.atk + " damage!!!");
        $("#row12").html(char3.name + " attacked you back " + " for " + char3.catk + " damage!");
        $("#char0_hp").html(char0.hp - char3.catk);
        $("#char3_hp").html(char3.hp - char0.atk);
        char0.atk = char0.atk+10;
        
        if(char0.hp <= 0){
        	alert("You lose.. Game over...");
        	audio_gg.play();
        }
        else if(char3.hp <= 0){
        	$("#row11").html("Ez pz, you win!");
        	$("#row12").html("Please select another rival~");
        	$('#character3').remove();
        	audio.play();
        }

    }); 
	});
});



// character1 set up 
$("#character1").click(function(){
	$("#character1").appendTo("#row4")
	$("#character0").appendTo("#first_col2").click(function(){
		$("#character0").appendTo("#first_col3")
		$("#character1").appendTo("#row4")

		 $("#attack_button").click(function(){

		char1.attack(char0);
        char0.counter_attack(char1);
        $("#row11").html(" you attacked " + char0.name + " for " + char1.atk + " damage!!!");
        $("#row12").html(char0.name + " attacked you back " + " for " + char0.catk + " damage!");
        $("#char1_hp").html(char1.hp - char0.catk);
        $("#char0_hp").html(char0.hp - char1.atk);
        char1.atk = char1.atk+1;
        
        if(char1.hp <= 0){
        	alert("You lose.. Game over...");
        	audio_gg.play();
        }
        else if(char0.hp <= 0){
        	$("#row11").html("Ez pz, you win!");
        	$("#row12").html("Please select another rival~");
        	$('#character0').remove();
        	audio.play();
        } 

    });
	});


	$("#character2").appendTo("#second_col2").click(function(){
		$("#character2").appendTo("#first_col3")
		$("#character1").appendTo("#row4")

		$("#attack_button").click(function(){

		char1.attack(char2);
        char2.counter_attack(char1);
        $("#row11").html(" you attacked " + char2.name + " for " + char1.atk + " damage!!!");
        $("#row12").html(char2.name + " attacked you back " + " for " + char2.catk + " damage!");
        $("#char1_hp").html(char1.hp - char2.catk);
        $("#char2_hp").html(char2.hp - char1.atk);
        char1.atk = char1.atk+1;
        
        if(char1.hp <= 0){
        	alert("You lose.. Game over...");
        	audio_gg.play();
        }
        else if(char2.hp <= 0){
        	$("#row11").html("Ez pz, you win!");
        	$("#row12").html("Please select another rival~");
        	$('#character2').remove();
        	audio.play();
        } 

    });

	});

	$("#character3").appendTo("#third_col2").click(function(){
		$("#character3").appendTo("#first_col3")
		$("#character1").appendTo("#row4")

		$("#attack_button").click(function(){

		char1.attack(char3);
        char3.counter_attack(char1);
        $("#row11").html(" you attacked " + char3.name + " for " + char1.atk + " damage!!!");
        $("#row12").html(char3.name + " attacked you back " + " for " + char3.catk + " damage!");
        $("#char1_hp").html(char1.hp - char3.catk);
        $("#char3_hp").html(char3.hp - char1.atk);
        char1.atk = char1.atk+1;
        
        if(char1.hp <= 0){
        	alert("You lose.. Game over...");
        	audio_gg.play();
        }
        else if(char3.hp <= 0){
        	$("#row11").html("Ez pz, you win!");
        	$("#row12").html("Please select another rival~");
        	$('#character3').remove();
        	audio.play();
        }

    }); 
	});
});

//character2 set up
$("#character2").click(function(){
	$("#character2").appendTo("#row4")
	$("#character0").appendTo("#first_col2").click(function(){
		$("#character0").appendTo("#first_col3")
		$("#character2").appendTo("#row4")

		 $("#attack_button").click(function(){

		char2.attack(char0);
        char0.counter_attack(char2);
        $("#row11").html(" you attacked " + char0.name + " for " + char2.atk + " damage!!!");
        $("#row12").html(char0.name + " attacked you back " + " for " + char0.catk + " damage!");
        $("#char2_hp").html(char2.hp - char0.catk);
        $("#char0_hp").html(char0.hp - char2.atk);
        char2.atk = char2.atk+12;
        
        if(char2.hp <= 0){
        	alert("You lose.. Game over...");
        }
        else if(char0.hp <= 0){
        	$("#row11").html("Ez pz, you win!");
        	$("#row12").html("Please select another rival~");
        	$('#character0').remove();
        	audio.play();
        } 

    });
	});


	$("#character1").appendTo("#second_col2").click(function(){
		$("#character1").appendTo("#first_col3")
		$("#character2").appendTo("#row4")

		$("#attack_button").click(function(){

		char2.attack(char1);
        char1.counter_attack(char2);
        $("#row11").html(" you attacked " + char1.name + " for " + char2.atk + " damage!!!");
        $("#row12").html(char1.name + " attacked you back " + " for " + char1.catk + " damage!");
        $("#char2_hp").html(char2.hp - char1.catk);
        $("#char1_hp").html(char1.hp - char2.atk);
        char2.atk = char2.atk+12;
        
        if(char2.hp <= 0){
        	alert("GG, you lose!");
        }
        else if(char1.hp <= 0){
        	$("#row11").html("Ez pz, you win!");
        	$("#row12").html("Please select another rival~");
        	$('#character1').remove();
        	audio.play();
        } 

    });

	});

	$("#character3").appendTo("#third_col2").click(function(){
		$("#character3").appendTo("#first_col3")
		$("#character2").appendTo("#row4")

		$("#attack_button").click(function(){

		char2.attack(char3);
        char3.counter_attack(char2);
        $("#row11").html(" you attacked " + char3.name + " for " + char2.atk + " damage!!!");
        $("#row12").html(char3.name + " attacked you back " + " for " + char3.catk + " damage!");
        $("#char2_hp").html(char2.hp - char3.catk);
        $("#char3_hp").html(char3.hp - char2.atk);
        char2.atk = char2.atk+12;
        
        if(char2.hp <= 0){
        	alert("You lose.. Game over...");
        }
        else if(char3.hp <= 0){
        	$("#row11").html("Ez pz, you win!");
        	$("#row12").html("Please select another rival~");
        	$('#character3').remove();
        	audio.play();
        }

    }); 
	});
});




//character3 set up
$("#character3").click(function(){
	$("#character3").appendTo("#row4")
	$("#character0").appendTo("#first_col2").click(function(){
		$("#character0").appendTo("#first_col3")
		$("#character3").appendTo("#row4")

		 $("#attack_button").click(function(){

		char3.attack(char0);
        char0.counter_attack(char3);
        $("#row11").html(" you attacked " + char0.name + " for " + char3.atk + " damage!!!");
        $("#row12").html(char0.name + " attacked you back " + " for " + char0.catk + " damage!");
        $("#char3_hp").html(char3.hp - char0.catk);
        $("#char0_hp").html(char0.hp - char3.atk);
        char3.atk = char3.atk+8;
        
        if(char3.hp <= 0){
        	alert("You lose.. Game over...");
        }
        else if(char0.hp <= 0){
        	$("#row11").html("Ez pz, you win!");
        	$("#row12").html("Please select another rival~");
        	$('#character0').remove();
        	audio.play();
        } 

    });
	});


	$("#character1").appendTo("#second_col2").click(function(){
		$("#character1").appendTo("#first_col3")
		$("#character3").appendTo("#row4")

		$("#attack_button").click(function(){

		char3.attack(char1);
        char1.counter_attack(char3);
        $("#row11").html(" you attacked " + char1.name + " for " + char3.atk + " damage!!!");
        $("#row12").html(char1.name + " attacked you back " + " for " + char1.catk + " damage!");
        $("#char3_hp").html(char3.hp - char1.catk);
        $("#char1_hp").html(char1.hp - char3.atk);
        char3.atk = char3.atk+8;
        
        if(char3.hp <= 0){
        	alert("You lose.. Game over...");
        }
        else if(char1.hp <= 0){
        	$("#row11").html("Ez pz, you win!");
        	$("#row12").html("Please select another rival~");
        	$('#character3').remove();
        	audio.play();
        } 

    });

	});

	$("#character2").appendTo("#third_col2").click(function(){
		$("#character2").appendTo("#first_col3")
		$("#character3").appendTo("#row4")

		$("#attack_button").click(function(){

		char3.attack(char2);
        char2.counter_attack(char3);
        $("#row11").html(" you attacked " + char2.name + " for " + char3.atk + " damage!!!");
        $("#row12").html(char2.name + " attacked you back " + " for " + char2.catk + " damage!");
        $("#char3_hp").html(char3.hp - char2.catk);
        $("#char2_hp").html(char2.hp - char3.atk);
        char3.atk = char3.atk+8;
        
        if(char3.hp <= 0){
        	alert("You lose.. Game over...");
        }
        else if(char2.hp <= 0){
        	$("#row11").html("Ez pz, you win!");
        	$("#row12").html("Please select another rival~");
        	$('#character2').remove();
        	audio.play();
        }

    }); 
	});
});





 audio_theme.play();

});



   


// pseudocode
// set 4 var, assign object and value.
// .click - selected var will become "Your Character" using .detach & appendTo functions moving to the next row.
// rest characters go to "Your Rivals", using .detach & appendTo again moving 1 selected char to Defender div.

// break attack function into 3 parts:
// .click {
// 	if ( attacker hp=0 )
// 		show game over, restart button.
// 	else if ( defender hp=0)
// 		detach char defender.
// 	else ( health -- for both attacker and defender, store the values)
// 		print out battle info, 
// }

// $(function(char1.attack))
// attack.function(someObj){
// 	if (someObj.health == 0){
// 		console.log("You weak b***! Game OVER!");
// 	}else{
// 		someObj.health--;
// 	}
// 	alert("You win!");
// }