const form=document.querySelector("form")
form.addEventListener("submit",function(event){
    event.preventDefault();
    const username=document.getElementById("username").value
    const password=document.getElementById("password").value
    if(username=="mangal" && password==="1234"){
        alert("user login")
        console.log({username,password})

    }
    else{
        alert("password wrong")
    }
});