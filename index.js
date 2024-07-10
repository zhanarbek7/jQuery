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
// .before() adds element before given
// .after() adds element after given
// .prepend() adds element before the content of the given element
// .append() adds element after the content of the given element
// $("h1").before("<button>New added button</button>")
// $(document).remove("button")


// 5) Website Animations
// hide() makes element to be not displayed
// toggle() makes element element to hide and unhide if listener was repeatedly triggered
// fadeOut() smoothly makes element to be not displayed
// fadeIn() smoothly makes visisble element which is not displayed
// fadeToggle() combination of fadeOut() and fadeIn()
// slideUp() slides up the element, makes it not visible
// slideDown() slides down the element, makes it visible
// animate() - here you can use only those styles which use numbers
// slideUp().slideDown().animate({margin-top:20}) - we can make a sequence of animations
$("button").on("click", function(){
    $("h1").animate({opacity: 0.5});
});

