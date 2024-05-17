import {Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import Movie from './Movie.jsx'


const MyRouter = () => {
    return (
        <> 
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/movie/:id' element={<Movie />} />
                <Route path='*' element={<h1>404 page not found</h1>} />
            </Routes>
        </>
    )
}


export default MyRouter