import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import Home from './components/table'
function App() {
  return (
    <Router>
      <div className="App">
        <div className="box">
          <div className="col-md-5 inner-box">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/login-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/table" element={<Home/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App;