function formV(){
    var fname = document.getElementsById("fname").value;
    var lname = document.getElementsById("lname").value;
    var email = document.getElementsById("email").value;
    var mobile = document.getElementsById("mobile").value;
    var password = document.getElementsById("password").value;

    var phonePattern = /(\+88)?-?01[3-9]\d{8}/
    var passwordPattern = /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()?><])).{8,20}/
    var emailPattern = /(cse|eee|law|eng)_\d{10}@lus.ac.bd/
    
    var cpassword = document.getElementById("confirm-password").value;
    var namePattern = /[a-z A-Z._]/


    /*---First Name-----*/

    if(fname.length < 3 || fname.length > 20){
        document.getElementById("fname").innerHTML = "length 3-20";
        return false;
    }
    else if(!fname.match(namePattern)){
        document.getElementById("fname").innerHTML = "Enter Characters";
        return false;
    }
    else{
        document.getElementById("fname").innerHTML = " ";
    }

    /*---Last Name-----*/

    if(lname.length < 3 || lname.length > 20){
        document.getElementById("lname").innerHTML = "length 3-20";
        return false;
    }
    else if(!lname.match(namePattern)){
        document.getElementById("lname").innerHTML = "Enter Characters";
        return false;
    }
    else{
        document.getElementById("lname").innerHTML = " ";
    }

    /*---Email-----*/

    if(email.length == ""){
        document.getElementById("email").innerHTML = "Enter Email";
        return false;
    }
    else if(!email.match(emailPattern){
        document.getElementById("email").innerHTML = "Enter correct Email";
        return false;
    }
    else{
        document.getElementById("email").innerHTML = " ";
    }

    /*---Mobile-----*/

    if(!mobile.match(phonePattern)){
        document.getElementById("number").innerHTML = "Invalid Number";
        return false;
    }
    else{
        document.getElementById("number").innerHTML = " ";
    }

    /*---Password-----*/

    if(password.length<8||password.length>20){
        document.getElementById("password").innerHTML = "Enter 8-20 digit";
        return false;
    }
    else if(!password.match(passwordPattern)){
        document.getElementById("password").innerHTML = "Enter a strong password";
        return false;
    }
    else{
        document.getElementById("password").innerHTML = " ";
    }

    /*---Confirm Password-----*/

    if(!cpassword.match(cpassword)){
        document.getElementById("cpassword").innerHTML = "Didn't match";
        return false;
    }
    else{
        document.getElementById("cpassword").innerHTML = " ";
    }
}