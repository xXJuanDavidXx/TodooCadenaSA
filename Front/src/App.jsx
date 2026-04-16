import './App.css'
import Nav from './components/Nav/Nav'
import Form from './components/Form/Form'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Edit from './components/Edit/Edit'


function App() {


  return (
  <>
    
    <header>
      <Nav />
    </header>
  
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/crear" element={<Form />} />
      <Route path="/editar/:id" element={<Edit />} />
    </Routes>

  </>
  )
}

export default App
