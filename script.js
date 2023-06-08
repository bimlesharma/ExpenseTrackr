
var emailVerificationBtn = document.getElementById("email-verification-btn");
var phoneVerificationBtn = document.getElementById("phone-verification-btn");
var emailVerification = document.getElementById("email-verification");
var phoneVerification = document.getElementById("phone-verification");
var verificationCode = document.getElementById("verification-code");

emailVerificationBtn.addEventListener("click", function() {
  emailVerification.style.display = "block";
  phoneVerification.style.display = "none";
  verificationCode.style.display = "none";
});

phoneVerificationBtn.addEventListener("click", function() {
  emailVerification.style.display = "none";
  phoneVerification.style.display = "block";
  verificationCode.style.display = "none";
});
