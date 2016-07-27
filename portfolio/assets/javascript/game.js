$(document).ready(function(){


var char0 = {
	health:200, 
	attack:10,
	counter_attack:30,
	attack:function(enemyObj){
		enemyObj.hp = enemyObj.hp - 30;
	}
};

var char1 = {
	hp:100,
	attack_p:1,
	counter_attack:1,
	attack:function(enemyObj){
		enemyObj.hp = enemyObj.hp - 1;
	}
};

var char2 = {
	hp:180,
	attack_p:15,
	counter_attack:36,
	attack:function(enemyObj){
		enemyObj.hp = enemyObj.hp - 36;
	}
};

var char3 = {
	hp:160,
	attack_p:8,
	counter_attack:8,
	attack:function(enemyObj){
		enemyObj.hp = enemyObj.hp - 8;
	}
};

// var someObj = $("#row");
// Character Selections
$("#character0").click(function(){
	$(this).appendTo("#row4")
	$("#character1").appendTo("#first_col2").prev("div").attr("#character1", "#character1_n")
	$("#character2").appendTo("#second_col2")
	$("#character3").appendTo("#third_col2")
});



$("#character1").click(function(){
	$(this).appendTo("#row4")
	$("#character0").appendTo("#first_col2")
	$("#character2").appendTo("#second_col2")
	$("#character3").appendTo("#third_col2")
});

$("#character2").click(function(){
	$(this).appendTo("#row4")
	$("#character0").appendTo("#first_col2")
	$("#character1").appendTo("#second_col2")
	$("#character3").appendTo("#third_col2")
});

$("#character3").click(function(){
	$(this).appendTo("#row4")
	$("#character0").appendTo("#first_col2").
	$("#character1").appendTo("#second_col2")
	$("#character2").appendTo("#third_col2")
});


$("#character1_n").click(function(){
	$(this).appendTo("#first_col3")


})

//defender selection

// $("#character0").click(function(){
// 	$(this).appendTo("#first_col3")
	
// });

// $("#character0").click(function(){
// 	$(this).appendTo("#first_col3")
	
// });


// $("#row4").click(function(){
// 	document.getElementById("someObj")
// 	document.getElementById("").innerHTML = someObj;
// })



//  $("#attack_button").click(function(){
//         char0.attack(char1);
//         console.log(char1);
//     })

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