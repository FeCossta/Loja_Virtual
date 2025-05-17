import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorMessage from './pages/ErrorMessage'
import CompressoresPage from './pages/CompressoresPage'


const App = () => {
  return (
    <Router>    
      <Routes>
      <Route exact path="/" element={<HomePage />} > </Route>
      <Route path="/error" element={<ErrorMessage/>} > </Route>
      <Route path="/contato" element={<Contato/>} > </Route>
      <Route path="/compressores" element={<CompressoresPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App