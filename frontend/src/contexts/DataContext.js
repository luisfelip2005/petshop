import { createContext, useState, useEffect } from "react"

export const DataContext = createContext()

export function DataProvider({ children }) {
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    useEffect(() => {

    }, [])

    return (
        <DataContext.Provider
            value={{ 
                userLoggedIn,
                setUserLoggedIn
             }}>
            { children }
        </DataContext.Provider>
    )
}