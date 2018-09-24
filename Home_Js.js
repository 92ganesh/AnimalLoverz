console.log("hi ");

 window.onload = function() {
    /*  document.getElementById("login").onclick = function() {
         alert("You will be redirected to next page");
      };
	  */
	  printTime();
   };
   
  
 function printTime()
 {	console.log("hi ");
	var sys_time = new Date().toLocaleTimeString();
	document.getElementById("sysTime").innerHTML = sys_time;
    var t = setTimeout(printTime, 500);
 }
 
 function mouseOnImage(idOfImg)
 {	document.getElementById(idOfImg).style.opacity = 0.7; 
 }
 
  function mouseOutImage(idOfImg)
 {	document.getElementById(idOfImg).style.opacity = 1; 
 }
 
 function logIn_call(){
         alert('You will be redirected to next page');
		 window.open("login.html");
      };
	  
function signup_call(){
         alert('You will be redirected to next page');
		 window.open("signup.html");
      };