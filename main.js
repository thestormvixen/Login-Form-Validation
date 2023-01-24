// DOM Elements
const loginContainer = document.querySelector(".login-container");
const loginForm = document.getElementById("loginForm");
const loginUsername = document.getElementById("loginUsername");

const loginPassword = document.getElementById("loginPassword");
const showPasswordIcon = document.querySelector("i.fa-eye");

showPasswordIcon.addEventListener("click", showPassword);

// Show/Hide Password with Eye Icon
function showPassword() {

 // Click icon, hides password - turns red
 if (loginPassword.type === "password") {
  loginPassword.type = "text";
  showPasswordIcon.style.color = "red";

  // Click icon again, shows password - reverts color
 } else {
  loginPassword.type = "password";
  showPasswordIcon.style.color = "#ddd";
 }
}

// Simple Validation
loginForm.addEventListener("submit", submitValidation);

function submitValidation(event) {
 event.preventDefault();

 // Username Validation
 if (loginUsername.value === "" || loginUsername.value.length < 3) {
  showError(loginUsername, "Username cannot be empty & must have at least 3 characters");

 } else {
  showSuccess(loginUsername);
 }

 // Password Validation
 if (loginPassword.value === "" || loginPassword.value.length < 6) {
  showError(loginPassword, "Password cannot be empty or less than 6 characters");

 } else {
  
  showSuccess(loginPassword);
 }
}
 
// Show Error Message for Username/Password input
function showError(input, message) {
 const formField = input.parentElement;
 // Changes Class name
 formField.className = "form-field error";
 if ((formField.className = "form-field error")) {
  const alert_message = formField.querySelector(".alert-message");
  alert_message.style.visibility = "visible";
  alert_message.style.color = "red";
  alert_message.innerText = message;
 }
}

// Show Success Message for Username/Password input
function showSuccess(input) {
 const formField = input.parentElement;
 // Changes Class name
 formField.className = "form-field success";
 if ((formField.className = "form-field success")) {
  const alert_message = formField.querySelector(".alert-message");
  alert_message.style.visibility = "hidden";
 }
}

// Request Form
const requestForm = document.querySelector(".form-request");

requestForm.style.display = "none";

const showRequestForm = document.querySelector(".reset-password");

// Show/Hide E-mail Request input
showRequestForm.addEventListener('click', function(event) {
 event.preventDefault();
 if (requestForm.style.display !== "block") {
  //Update Height when clicked & Email active
  loginContainer.style.minHeight = "650px";
  requestForm.style.display = "block";
 } else {
  //Returns to default height & removes Email input
  requestForm.style.display = "none";
  loginContainer.style.minHeight = "initial";
 }
});

// Display E-mail Request message
requestForm.addEventListener("submit", request);

function request(e) {
 e.preventDefault();

 if (requestForm.style.display === "block") {
  const requestEmail = document.getElementById("requestEmail");

  //Display error if E-mail NOT entered
  if (requestEmail.value === "") {
   showError(requestEmail, "E-mail cannot be empty");

  } else {
   showSuccess(requestEmail);
  }
 }
}