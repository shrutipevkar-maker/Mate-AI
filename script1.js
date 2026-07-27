function guestLogin(){

    alert("Guest Login Successful!");

}

document.querySelector(".signin").addEventListener("click",function(){

    let username=document.getElementById("username").value.trim();
    let email=document.getElementById("email").value.trim();
    let password=document.getElementById("password").value.trim();

    if(username==="" || email==="" || password===""){
        alert("Please fill all fields.");
        return;
    }

    alert("Login Successful!\n\nWelcome " + username);

});