

//get the string from the page.
//controller function


function getValue(){
    document.getElementById("alertID").classList.add("invisible"); // ensres that the alert remains invisible when the function starts running
let userString = document.getElementById("reverseInputID").value;
let revString = reverseString(userString); 

displayString(revString);
}

//reverse the strin
//logic function
function reverseString(userString){
let revString = [];
//we'll reverse a string using a for loop.
for(let i = userString.length - 1; i >= 0; i--){
    revString += userString[i];
    
}
return revString;
}

//display our message with our reverse string to the user.
 
function displayString(revstring){

//write the message t the page.
document.getElementById("message").innerHTML = `Your string reversed is: ${revstring}`;

//show the alert box

document.getElementById("alertID").classList.remove("invisible");
}