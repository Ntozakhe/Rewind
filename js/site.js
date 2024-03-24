//Get the string from the page
//controller function
function getValue() {
    document.querySelector('#alert').classList.add('invisible');
    let userString = document.querySelector('#userString').value;

    let revString = reverseString(userString);

    displayString(revString);

}

//Reverse the String
//Logic function
function reverseString(userString) {
let revString =[];

//reverse a string using a for loop
for(let i = userString.length -1; i >= 0; i--){
    revString += userString[i];
}
return revString;
}
//Display our reversed string tp the user.
//View Function
function displayString(revString) {
   //write to the page
document.querySelector('#msg').innerHTML = `Your string reversed is: <strong>${revString}</strong>`;

//show the alert box
document.querySelector('#alert').classList.remove('invisible');

}