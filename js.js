document.getElementById("actualForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.querySelector(".name").value.trim();
    let email = document.querySelector(".email").value.trim();
    let github = document.querySelector(".github-name").value.trim();
    let img = document.getElementById("img-upload").files[0];
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let githubError = document.getElementById("githubError");
    let imgError = document.querySelector(".file").querySelector("span");

    // empty field validations
    // name
    if (name === "") {
        nameError.classList.remove("hidden");
        nameError.innerText = "Please fill this input"
    }
    else {
        nameError.classList.add("hidden")

    }
    //    email

    
    //   empty field validations
    if (email === "") {
        emailError.classList.remove("hidden");
        emailError.innerText = "Please fill this input"
    }
   
    else {
        emailError.classList.add("hidden")
    }
    //    github
    if (github === "") {
        githubError.classList.remove("hidden");
        githubError.innerText = "Please fill this input"
    }
    else {
        githubError.classList.add("hidden")
    }
    //    image
    if (!img) {
        imgError.innerText = "Please upload an image";
        imgError.style.color = "red";
    }
    else {
        imgError.innerText = "";
    }







    // redirecting if all validations are passed

    if (name !== "" && email !== "" && github !== "" && !img === false) {
        window.location.href = "card.html"
    }
})



