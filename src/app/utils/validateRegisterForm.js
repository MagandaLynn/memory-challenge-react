export const validateRegisterForm = (values) =>{
    const errors={}
    const {firstName,lastName, email,password, confirmPassword} = values;
    
    const emailTest = /(.+)@(.+){2,}\.(.+){2,}/i;
    if(!firstName){
        errors.firstName="First name required"
    }
    if(!lastName){
        errors.lastName="Last name required"
    }

    if(!emailTest.test(email)){
        errors.email="Please enter a valid email"
    }
    if(!password){
        errors.password="Required"
    }
    if(password!==confirmPassword){
        errors.confirmPassword="Passwords must match"
    }
    return errors;
}