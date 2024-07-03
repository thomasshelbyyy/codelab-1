import firebase_app from "@/libs/firebase/config"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"

const auth = getAuth(firebase_app)

const AuthContext = createContext({})


const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }