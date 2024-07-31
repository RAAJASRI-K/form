const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const cpassword = document.getElementById("cpassword")


form.addEventListener('submit',(e) =>{
    /*e.preventDefault();will prevent the button to submit if the input is wrong*/ 
    if (!validateInputs());/*when submit is clicked it should validate the inputs*/ 
    {
        e.preventDefault(); 
    }
})

function validateInputs(){
    const usernameval=username.value.trim()/*will get the input field value and trim the spaces*/ 
    const emailval=email.value.trim()
    const passwordval=password.value.trim()
    const cpasswordval=cpassword.value.trim()
    let success =true;

    if(usernameval ===''){
        success=false;
        setError(username,'Username is required')
    }   
    else{
        setSuccess(username)
    }
    if(emailval ===''){
        success=false;
        setError(email,'email is required')
    }
    else if (!validateemail(emailval))/**If it follows the validateemail() then no success mail is required but when it is not valid then seterror is required */
    {
        success=false;
        setError(email,'Enter a valid email')
    }
    else {
        setSuccess(email)
    }

    if (passwordval === '')
    {
        success=false;
        setError(password,'password is required')
    }
    else if (passwordval.length<8)
    {
        success=false;
        setError(password,'Maximum length of 8 password is required')
    }
    else 
    {
        setSuccess(password)
    }

    if(cpasswordval ===''){
        success=false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordval!==passwordval)
    {
        success=false;
        setError(cpassword,'password mismatched')
    }
    else 
    {
        setSuccess(cpassword)
    }

}
function setError(element,message){
    const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector(".error");

    errorElement.innerText=message;
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')
}
function setSuccess(element){
    const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector(".error");

    errorElement.innerText='';
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
}
function validateemail(email) { 
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}