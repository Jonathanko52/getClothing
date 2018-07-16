function getClothing(isCold){
  if(isCold){
    var freezing = 'Grab a jacket!';
  } else { 
    var hot = "It's a short kind of day."
    console.log(freezing)
  }

}

getClothing(false)
/*
I anticipate that the result will be undefined.

1) getClothing will recieve the boolean value "false" as an argument and attempt to run with it.
When it is brought into the "if" statement at line 2, it will evaluate as "false", and therefore enter
the else statement. There, we will define the variable hot as having the valuse of 
"It's a short kind of day." and then attempt to console log the value of the variable 'freezing'.
However, since the if statement evaluated as false, we never entered line 3, and never 
defined the variable freezing or set the value, so console.log(freezing) in line 6 will print out 
"undefined" in the console.

2) Also this function lacks a return statement. It will not return any value, and so will
evaluate as undefined no matter what else this function will do.

*/