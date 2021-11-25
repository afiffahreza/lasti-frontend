import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Test from './pages/Test'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Switch>
        <Route exact path={["/", "/signup"]} component={Signup}/>
      </Switch>
    </div>
  )
}

export default App
