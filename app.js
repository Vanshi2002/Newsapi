const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
// Function to sign in to enter the news website;

function auth(){
    var user=document.getElementById("User").value;
    var email=document.getElementById("Email").value;
    var password=document.getElementById("Password").value;
    if(user=="ppv" && email=="ppv@gmail.com" && password=="groupProject")
    {
        window.location.assign("index.html");
        alert("Login Successfylly");
    }
    else{
        alert("Invalid information");
    }

}