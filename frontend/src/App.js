import React from 'react'
// import axios from 'axios'
import { BrowserRouter, Switch , Route  } from 'react-router-dom'

import Navbar from './components/common/NavBar'
import Home from './components/common/Home'
import Community from './components/common/Community'
import Profiles from './components/common/Profiles'
import GigIndex from './components/gigs/GigIndex'
import GigShow from './components/gigs/GigShow'
import GigCalendar from './components/gigs/GigCalendar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Footer from './components/common/Footer'
import Maps from './components/gigs/Maps'

class App extends React.Component{
  // state = {
  //   gigs: []
  // }

  // async componentDidMount() {
  //   try {
  //     const res = await axios.get('http://localhost:3000/api/events')
  //     console.log(res.data)
  //     this.setState({ gigs: res.data })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

render(){

  // console.log(this.state.gigs) //data from API

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/gigs/map" component={Maps}/>
        <Route exact path="/gigs/:id" component={GigShow}/>
        <Route exact path="/gigs" component={GigIndex}/>
        <Route exact path="/community" component={Community}/>
        <Route exact path="/profiles" component={Profiles}/>
        <Route path="/register" component={Register} />
        <Route path="/gigcalendar" component={GigCalendar} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
}

export default App
