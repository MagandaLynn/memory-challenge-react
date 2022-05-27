export const validateLoginForm = (values) =>{
    const errors={}
    const {email,password} = values;
    
    const emailTest = /(.+)@(.+){2,}\.(.+){2,}/i;
    if(email!=='guest' && !emailTest.test(email)){
        errors.email="Please enter a valid email"
    }
    if(!password){
        errors.password="Password required"
    }
    return errors;
}