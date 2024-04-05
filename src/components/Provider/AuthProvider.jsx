import { createContext } from 'react'
export const AuthContext = createContext()
import { getAuth } from "firebase/auth";
import app from '../../utils/firebase.config';
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const user = {
        name: "kaisar"
    }
    const authInfo = { user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider