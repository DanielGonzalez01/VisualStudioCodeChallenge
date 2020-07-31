//
var currentLevel = 0;
//
document.getElementById("next-level").addEventListener("click", function() {
   //
   if (currentLevel == 0) {
       document.getElementById("level1").innerHTML = "The Duck as Self Reflection";
       currentLevel += 1;
   } else if (currentLevel == 1) {
       document.getElementById("level2").innerHTML = "Ask a Peer";
       currentLevel += 1;
   } else if (currentLevel == 2) {
       document.getElementById("level3").innerHTML = "Ask to your Coach";
       currentLevel += 1;
   } else if (currentLevel == 3) {
       document.getElementById("level4").innerHTML = "Ask at the Tech Team";
       document.getElementById("next-level").innerHTML = "Reset Triangle";
       currentLevel += 1;
   } else {
       currentLevel = 0;
       document.getElementById("level1").innerHTML = "";
       document.getElementById("level2").innerHTML = "";
       document.getElementById("level3").innerHTML = "";
       document.getElementById("level4").innerHTML = "";
       document.getElementById("next-level").innerHTML = "Click for next level of support";
   }
 
 
});
