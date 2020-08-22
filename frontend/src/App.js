import React from 'react'
import { BrowserRouter, Switch , Route  } from 'react-router-dom'

import Navbar from './components/common/NavBar'
import Home from './components/common/Home'
import Community from './components/common/Community'
import GigIndex from './components/gigs/GigIndex'
import GigShow from './components/gigs/GigShow'
import GigCalendar from './components/gigs/GigCalendar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
// import React from 'react'
import axios from 'axios'

class App extends React.Component{
  state = {
    gigs: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:3000/api/events')
      // console.log(res.data)
      this.setState({ gigs: res.data })
      // console.log(this.state.gigs)
    } catch (err) {
      console.log(err)
    }
  }

render(){

  console.log(this.state.gigs) //data from API

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        //! Please make sure if sending props that are all named uniquely here
        <Route exact path="/" render={(props) => <Home homeProps={this.state.gigs}/>}/>
        <Route exact path="/gigs/:id" render={(props) => <GigShow singleGigProps={this.state.gigs}/>}/>
        <Route exact path="/gigs" render={(props) => <GigIndex gigprops={this.state.gigs}/>}/>
        <Route exact path="/community" component={Community}/>
        <Route path="/register" component={Register} />
        <Route path="/gigcalendar" component={GigCalendar} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}
}

export default App
