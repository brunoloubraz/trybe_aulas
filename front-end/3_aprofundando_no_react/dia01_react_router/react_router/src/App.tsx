import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CoffeeList from './components/CoffeList'
import Coffee from './components/Coffe'
import NotFound from './pages'
import Layout from './pages/layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route path='/' element={ <Home /> } />
          <Route path='/coffees' element={ <CoffeeList /> } />
          <Route path='/coffees/:coffee' element={ <Coffee /> } />
        </Route>
        <Route path='/*' element={ <NotFound />} />
      </Routes>
    </>
  )
}

export default App
