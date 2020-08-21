import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/common/NavBar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cheeses/:id" component={CheeseShow} />
        <Route path="/cheeses" component={CheeseIndex} />
      </Switch> */}
    </BrowserRouter>
  )
}

export default App
