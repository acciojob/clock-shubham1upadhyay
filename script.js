 var timer = document.getElementById("timer");
 function updateTimer()
 {
	 var currentDate = new Date();
     timer.textContent = currentDate.toLocaleString();
 }
updateTimer();
setInterval(updateTimer, 1000);