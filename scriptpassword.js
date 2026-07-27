function sendLink() {

    let email = document.getElementById("email").value.trim();

    if(email===""){
        alert("Please enter your email.");
        return;
    }

    // Show Success Message
    document.getElementById("successMessage").style.display="flex";

    // Disable Email Field
    document.getElementById("email").disabled=true;

    // Change Button
    const btn=document.getElementById("resetBtn");

    btn.innerHTML="Reset Link Sent ✓";
    btn.disabled=true;

}