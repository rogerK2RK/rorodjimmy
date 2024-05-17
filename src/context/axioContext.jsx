import {useState, createContext} from 'react'


export const AuthContext = createContext()

export const AuthProvider = (props) => {

    const [movies, setMovies] = useState([])

    return(
        <AuthContext.Provider>
            {props}
        </AuthContext.Provider>
    )
}