import { BrowserRouter, Route, Routes } from "react-router-dom"
import Netflix from "./pages/Netflix"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Player from "./pages/Player"
import Movies from "./pages/Movies"
import TVShows from "./pages/TVShows"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/player' element={<Player />} />
        <Route exact path='/tv' element={<TVShows />} />
        <Route exact path='/movies' element={<Movies />} />
        <Route exact path='/' element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// <Route exact path='/player' element={<Player />} />
// <Route exact path='/tv' element={<TVShows />} />
// <Route exact path='/movies' element={<MoviePage />} />
// <Route exact path='/new' element={<Player />} />
// <Route exact path='/mylist' element={<UserListedMovies />} />
