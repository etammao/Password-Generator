// Assignment Code
var generateBtn = document.querySelector("#generate");
var myuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var mynumbers = "1234567890";
var passlength = 0;
var temppass= "";

// Write password to the #password input
function writePassword() {
  console.log('we are in the function!')
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var askuppercase = confirm("do you want uppercase characters?");
  if(askuppercase){
    temppass += myuppercase;
    console.log(temppass);
  }
  console.log(askuppercase);
  var asknumbers = confirm("do you need numbers?");
  if(asknumbers){
    temppass += mynumbers;
    console.log(temppass);
  }
  console.log(asknumbers);
  passlength = prompt("how many characters do you want? Between 8 and 128");
  console.log(passlength);  
  console.log(typeof(passlength));
  passlength =Number(passlength);
  console.log(typeof(passlength));


  if(passlength >= 8 && passlength <=128) {
    var mypassword = "";
    for(var I=0; I<=passlength-1; I++){
  var char = Math.floor(Math.random()*temppass.length);
       
   mypassword += temppass.charAt(char);
   console.log(mypassword)
    }
  
     }      
  

  passwordText.value = mypassword;
  
}

generateBtn.addEventListener("click", writePassword);








  // var isuppercase = confirm("do you want uppercase");
  // console.log(isuppercase);
  // if(isuppercase == true){

  // }
  // passwordText.value = "this is will be your password!";

 
 

  


// Add event listener to generate button