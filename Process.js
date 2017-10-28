function grab(flag){
  var index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

//console.log(greeting);
//console.log(user);

if (!user || !greeting){
  console.log("Hellow normal User!");
}else {
  console.log(`Welcome ${user}, ${greeting}`);
}



Code  Issues 0  Pull requests 0  Pulse
C_03_4-timers.js

var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;

//console.log("Wait for it ");

/*
Secondly this code added to get the function into a variable
*/
var interval = setInterval(function () {
/*
Bottom code is the first code. since it cannot be STOP the set interval, then get
them into the variable & then stop it using the command of 'clearInterval()'
*/
//setInterval(function () {
  currentTime += waitInterval;
}, waitInterval);


setTimeout(function(){
  clearInterval(interval);  //clear the setInterval function
  console.log("done");
}, waitTime);
