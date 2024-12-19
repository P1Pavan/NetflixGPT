import React from 'react'

const Checkvalidate = (name,email,password) => {
    const isNameValid = /^[a-zA-Z\\s]*$/.test(name)
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid && !isPasswordValid) {
        return "Email ID and Passoword Both Invalid"
    }
    else if (!isEmailValid ) {
        return "Email Id is not valid"
    }
    else if (!isPasswordValid) {
        return "Password is not valid"
    }
    else if (!isNameValid) {
        return "Name is not valid"
    }
    else {
        return null;
    }



  
}

export default Checkvalidate;
