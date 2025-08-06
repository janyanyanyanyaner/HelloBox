let username;

document.getElementById("submit-btn").onclick = function(){
    username = document.getElementById("username").value;
    if(username == "") {
        document.getElementById("greet-message").textContent = `You forgot to enter your username!!`
    }
    else{
        document.getElementById("greet-message").textContent = `Hello ${username}!`
    }
}

