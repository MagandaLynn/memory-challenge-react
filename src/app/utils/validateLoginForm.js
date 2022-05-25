export const validateLoginForm = (values) =>{
    const errors={}
    const {email,password} = values;
    
    const emailTest = /(.+)@(.+){2,}\.(.+){2,}/i;

    if(!emailTest.test(email)){
        errors.email="Please enter a valid email"
    }
    if(!password){
        errors.password="Required"
    }
    return errors;
}