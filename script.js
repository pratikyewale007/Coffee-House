function validation(){
    let name = document.getElementById("inputName").value
    let subject = document.getElementById("selectsubject").value
    let email = document.getElementById("inputEmail").value
    let mobile = document.getElementById("inputMobile").value
    let state = document.getElementById("inputState").value
    let city = document.getElementById("inputCity").value
    let message = document.getElementById("Textarea").value

    //Name validation
    if(name === ""){
        document.getElementById("nameError").innerText = "Please Enter Your Name";
        document.getElementById("nameError").style.color = "brown";
        return false;
    }
    //Subject validation
    if(subject === ""){
        document.getElementById("subjectError").innerText = "Please Select a Subject";
        document.getElementById("subjectError").style.color = "brown";
        return false;
    }
    //Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        document.getElementById("emailError").innerText = "Please Enter a Valid Email Address";
        document.getElementById("emailError").style.color = "brown";
        return false;
    }
    //Mobile validation
    let mobilePattern = /^[6-9]\d{9}$/;
    if(!mobilePattern.test(mobile)){
        document.getElementById("mobileError").innerText = "Please Enter 10 Digit Mobile Number";
        document.getElementById("mobileError").style.color = "brown";
        return false;
    }
    //State validation
    if(state === ""){
        document.getElementById("stateError").innerText ="Please Enter Your State";
        document.getElementById("stateError").style.color="brown";
        return false;
    }
    // City
    if(city===""){
        document.getElementById("cityError").innerText ="Please Enter Your State";
        document.getElementById("cityError").style.color="brown";
        return false;
    }
    alert("Thank you..!")
} 