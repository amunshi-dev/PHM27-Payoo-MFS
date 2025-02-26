const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const accNum = parseInt(
    document.querySelectorAll(".login-form input")[0].value
  );
  const accPin = parseInt(
    document.querySelectorAll(".login-form input")[1].value
  );
  window.location.href = "./home.html";
  console.log(accNum, accPin);
});
