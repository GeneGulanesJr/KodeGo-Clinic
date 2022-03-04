
// function submitChecker(){
//
//    //if validateForm and validateFormPassword return true, then submit
//    if(validateForm() && validateFormPassword()){
//       document.getElementById("loginForm").submit();
//    }else{
//        return false;
//    }
// }





function validateForm() {
    const UserName = document.getElementById('UserNameHelper');
    UserName.textContent = '';
    let x = document.forms["loginForm"]["UserName"].value;
    if ( x.length <= 4) {
        UserName.innerHTML = `<span style="background-color: red">Must Be Equal or Longer than 5 characters</span>`;
        validateChecker(null);



    }else{
        UserName.innerHTML = `<span style="background-color: green">Valid</span>`;
        validateChecker(1);
    }

}

function validateFormPassword(){
    const Password = document.getElementById('PasswordHelper');
    Password.textContent = '';
    let x = document.forms["loginForm"]["password"].value;
    //regex for password
    // 1 uppercase 1 lowercase and 1 number
    // at least 8 characters
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    //text x if it passes the regex
    if (x.match(regex)) {
        Password.innerHTML = `<span style="background-color: green">Valid</span>`;
        validateChecker(2);
    }
    else {
        Password.innerHTML = `<span style="background-color: red">Must Contain at least 1 uppercase, 1 lowercase and 1 number and is 8 characters long</span>`;
        validateChecker(null);
    }


}
