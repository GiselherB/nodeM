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

