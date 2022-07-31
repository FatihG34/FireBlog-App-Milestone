import React, { createContext, useEffect, useState } from 'react'
import { userObserver } from '../helpers/authFunctions';


export const AuthUserContext = createContext();

const AuthContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        userObserver(setCurrentUser)
    }, []);


    return (
        <AuthUserContext.Provider value={{ currentUser }}>
            {children}
        </AuthUserContext.Provider>
    )
}

export default AuthContext