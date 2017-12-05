window.onload = function(){
	
	var timerId =
  countdown(
    new Date(2019, 7, 1, 9, 0, 0),
    function(ts) {
      document.getElementById('pageTimer').innerHTML = ts.toHTML("strong");
    },
    countdown.YEARS|countdown.MONTHS|countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS|countdown.MILLISECONDS);
  console.log(new Date(2019, 7, 1, 9, 0, 0));
}