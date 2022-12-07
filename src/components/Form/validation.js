

export default function validation(userData){
    let errors={}
    const regexUsername = /\S+@\S+\S+/;
    const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;
    
    if(!userData.username) errors.username = 'Debe escribir un usuario'
    else if(userData.username.length > 35) errors.username = 'No puedes superar los 35 caracteres';
    else if(!regexUsername.test(userData.username)) errors.username = 'Usuario no valido';
    
    if(userData.password.length < 6 && userData.password.length > 10) errors.password = 'El password debe tener entre 6 y 10 caracteres'
    else if(!regexPassword.test(userData.password)) errors.password ='Password no válido'
   

    return errors;
}