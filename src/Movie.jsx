import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'

const Movie = () => {
    const userID = useParams()
    console.log(userID)
    
    const fetchShowDetail = async () => {
        try {
          const response = await axios(`https://api.disneyapi.dev/character`)
          console.log(response.data.data)
        } 
        catch (err) {
          console.error(err);
        }
    }

    useEffect(() => {
        fetchShowDetail()
    }, [])


    return (
        <>
            <h1>User component</h1>
        </>
    )
}

export default Movie