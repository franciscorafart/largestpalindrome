// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers
//is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

//Calling the function and login the result.
let res = arrayOfProdNeg();
console.log(res);

//This function returns the greatest palindrome that is the product of two 3-digit numbers
function arrayOfProdNeg(){
  let largest = 0;
  //Two nested for loops to evaluate 3 digit multiplications.
  for(let i=999;i>99;i--){
    for(let k=999;k>99;k--){

      let mult = i*k;
      //turn the multiplication into a string to evaluate if it's a palindrome
      let thisString = ""+mult;
      //Here we evaluate if the multiplication is a palindrome and if its larger than the previous palindrome.
      //If it's a larger palindrome, we store it in the 'largest variable'.
      if(isPalindrome(thisString)&&(mult>largest)){
          largest=mult;
      }
    }
  }
  return largest;
}

//Function to evaluate if string is a Palindrome
//Takes a string as an argument and compares last element with the first element and returns a boolean

function isPalindrome(s){
  let length = s.length;
  //Here we define which is the middle character of the string.
  //In case of an odd length, we keep the index before the middle one,as the middle character doesn't determine if it's a palindrome
  let midIndex = Math.floor(s.length/2);
  //Loop to compare the characters in each extreme and inwards
  for (let i = 0; i<midIndex; i++){
    if(s.charAt(i)!=s.charAt(length-i-1)){
      return false;
    }
  }
    return true;
}
