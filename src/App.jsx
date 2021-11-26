import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Test from './pages/Test'
import Login from './pages/login'
import Signup from './pages/signup'
import IsiWallet from './pages/IsiWallet'
import TollCalculator from './pages/Toll Calculator'
import Home from './pages/Home'
import Plates from './pages/Plates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Switch>
        <Route exact path={["/home"]} component={Home}/>
        <Route exact path={["/signup"]} component={Signup}/>
        <Route exact path={["/", "/login"]} component={Login}/>
        <Route exact path={["/wallet"]} component={IsiWallet}/>
        <Route exact path={["/plates"]} component={Plates}/>
        <Route exact path={["/toll-calculator"]} component={TollCalculator}/>
      </Switch>
    </div>
  )
}

export default App
