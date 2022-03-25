import './App.css'
import Header from './components/Header'
import Home from './containers/Home'
import Single from './containers/Single'
import Write from './containers/Write'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:postId' element={<Single />} />
          <Route path='/write' element={<Write />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
