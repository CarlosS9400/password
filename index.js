let myRangeEl = document.getElementById("myRange-el")
let sliderValueEl = document.getElementById("sliderValue-el")

let AreaA = document.getElementById("area-a")
let AreaB = document.getElementById("area-b")
let AreaC = document.getElementById("area-c")
let AreaD = document.getElementById("area-d")

let index = 0
let newPassword = []

let passwordAll = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
                "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "{", "}", ":", "<", ">", "?" 

]

//generate passwords

function createPassword() {
    let password = ""
   newPassword = []
    
    //Get the elements from the passwordAll
    for (let i = 0; i < myRangeEl.value; i++) {
     
         index = Math.floor(Math.random()*passwordAll.length)
         
         newPassword.unshift(passwordAll[index])
        
    }

    //Combine all the elements and assignt them to password
    
    for (let i=0; i<newPassword.length; i++) {

      password += newPassword[i]
      
    }
    
    return password
      
}


function generatePassword() {
   //Each area call the creaatePassword function individually
   AreaA.textContent=createPassword()
   AreaB.textContent=createPassword()
   AreaC.textContent=createPassword()
   AreaD.textContent=createPassword()

}
   
   
function copy(sign) {
   if (sign==="a") {
      navigator.clipboard.writeText(AreaA.textContent);
      alert("Copied the text: " + AreaA.textContent);
   } 
   if (sign==="b") {
      navigator.clipboard.writeText(AreaB.textContent);
      alert("Copied the text: " + AreaB.textContent);
   } 
   if (sign==="c") {
      navigator.clipboard.writeText(AreaC.textContent);
      alert("Copied the text: " + AreaC.textContent);
   } 
   if (sign==="d") {
      navigator.clipboard.writeText(AreaD.textContent);
      alert("Copied the text: " + AreaD.textContent);
   } 

}


function setValue() {
   
  sliderValueEl.textContent=""
  sliderValueEl.textContent= "NUMBER OF CHARACTERS (MIN: 8 CHARS): " + myRangeEl.value

  
}

