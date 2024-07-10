// 1) jQuery
// Adding class
// $("h1").addClass("big-title margin-50");

// // Adding text
// $("button").text("Don't click me")

// // Adding HTML, could be text only also
// $("button").html("<em>Hey</em>");

// // Printing a value of the attribute of img
// console.log($("img").attr("src"));

// // Setting a value for the attribute of img
// $("a").attr("href", "https://www.yahoo.com");

// 2) Addig CSS
// $("h1").css("color","green");

// 3) EventListeners
// Adding click Event Listener
// $("h1").on("click",function(){
//     $("h1").css("color","purple");
//     console.log("You clicked the button)");
// });

// // Adding Event Listener to multiple elements
// $("button").on("click", function(){
//     $("a").css("color","blue");
//     $("a").css("font-size","3rem");
// });

// Triggering change of the value of h1 tag
// $("body").on("keypress", function(event){
//     $("h1").text(event.key);
// });

// 4) Adding and Removing elements with jQuery
$("h1").before("<button>New added button</button>")
$(document).remove("h1")