// create account
function regiter(){
    //1. fetch the values from html pages
    //  from inputbox values pass to js in string 
    //username - userName   
    //email- email
    // password-password
    user = userName.value;
    email = email.value;
    pswd=password.value;
    balance=2000;
    //2. acountdetails store in a object- because  not replace the value
    //crete object
    acDetails={
        user,
        email,
        pswd,
        balance
    }
    //3. check acno in present in localstorege -  no present il bd then store the value otherise if present the value then skip 
    if(user in localStorage){
        alert("accout already exist, please login");

    }
    else{
        localStorage.setItem(email,JSON.stringify(acDetails));
        alert("registration process compleated:",user);
        window.location.href="#";
    }
}

function signin(){
    //1.fetch the values from the html
    user = usName.value;
    paswd= paswd.value;
    alert(user);
    alert(paswd);
    // 2.check acc in localstorage
    if(user in localStorage){
        userDetails = JSON.parse(localStorage.getItem(user)) ;
        alert("paswd:"+paswd);
        alert('userDetails["pswd"]'+userDetails["pswd"]);
        //compare
        if(paswd==userDetails.pswd){
            alert("login successful");
            window.location.href="https://www.onlinesbi.com";
            // window.location.href="home.html";

        }
        else{
            alert("incorrect password")
        }

    }
    else{
        alert("Invalid account number");
        
    }

}