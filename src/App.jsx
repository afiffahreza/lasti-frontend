import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Test from './pages/Toll Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Switch>
        <Route exact path={["/", "/test"]} component={Test}/>
      </Switch>
    </div>
  )
}

export default App
