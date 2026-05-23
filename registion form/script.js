const form = document.querySelector("form")

//add event 
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    if (name == "" || email == "" || password == "") {
        alert("please fill detail")
    }
    else {
        alert("register successful")
        console.log(name)
        console.log(email)
        console.log(password)
    }
})
