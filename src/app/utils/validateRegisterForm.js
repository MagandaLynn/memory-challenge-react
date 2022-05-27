export const validateRegisterForm = (values) =>{
    const errors={}
    const {firstName, email,password, confirmPassword} = values;
    
    const emailTest = /(.+)@(.+){2,}\.(.+){2,}/i;
    if(!firstName){
        errors.firstName="First name required"
    }

    if(!emailTest.test(email)){
        errors.email="Please enter a valid email"
    }
    if(!password){
        errors.password="Password required"
    }
    if(password!==confirmPassword){
        errors.confirmPassword="Passwords must match"
    }
    return errors;
}