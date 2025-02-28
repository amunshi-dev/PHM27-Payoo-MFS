const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", (e) => {
 e.preventDefault();
 const accNum = parseInt(
  document.querySelectorAll(".login-form input")[0].value
 );
 const accPin = parseInt(
  document.querySelectorAll(".login-form input")[1].value
 );
 const validatedAcc = validateAccNum(accNum)
 const validatedPin = validatePinNum(accPin)
 if (!validatedAcc || !validatedPin) {
  if (!validatedAcc) {
   console.log('Account number not valid.')
  } else {
   console.log('Pin number not valid.')
  }
 } else {
  window.location.href = './home.html'
 }
});


function validateAccNum(n) {
 n = String(n)
 const isFullDigit = n.length == 10;
 if (isFullDigit) {
  return true
 } else {
  return false
 }
}

function validatePinNum(p) {
 if (p == 1234) {
  return true
 } else {
  return false
 }
}