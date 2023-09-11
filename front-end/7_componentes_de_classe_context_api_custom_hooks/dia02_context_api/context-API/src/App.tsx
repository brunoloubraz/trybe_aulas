import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ThemeProvider from './context/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Footer/>
    </ThemeProvider>
  )
}

export default App
