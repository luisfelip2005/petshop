import { createContext, useState, useEffect } from "react"

export const DataContext = createContext()

export function DataProvider({ children }) {
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [user_id, setUserId] = useState()

    useEffect(() => {

    }, [])

    return (
        <DataContext.Provider
            value={{ 
                userLoggedIn,
                setUserLoggedIn,
                user_id, 
                setUserId
             }}>
            { children }
        </DataContext.Provider>
    )
}