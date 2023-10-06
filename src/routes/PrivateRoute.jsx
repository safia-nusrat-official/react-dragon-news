import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Login } from '../pages/Login'

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    if (user){
        return children
    }else{return <Login></Login>}
}

export default PrivateRoute