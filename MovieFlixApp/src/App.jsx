import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider, useSearchParams} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import MoviePage from './pages/MoviePage'
import MovieDetailPage from './pages/MovieDetailPage'
import './App.css'
import './MediaQuery.css'

function App(){
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout></RootLayout>}>
      <Route index element={<MoviePage></MoviePage>}></Route>
      <Route path='/detail/:imdbID' element={<MovieDetailPage></MovieDetailPage>}></Route>
    </Route>
  ))
  return (
    <div className='appParentElement'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App