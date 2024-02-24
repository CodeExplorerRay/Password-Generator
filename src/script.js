function generatePassword() {
  const length = 12; // Set your desired password length
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  document.getElementById("generatedPassword").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("generatedPassword");
  
  if (passwordField.value !== "") {
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  }
}
