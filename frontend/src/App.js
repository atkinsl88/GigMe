import React from 'react'
// import axios from 'axios'

// class App extends React.Component {

//   // async componentDidMount() {

//   //   try {
//   //     const res = await axios.get('localhost:4000/queens')
//   //     console.log(res.data)
//   //   } catch (err) {
//   //     console.log(err)
//   //   }
//   // }
  
//   render() {
//     return <h1>Hello World</h1>
//   }
// }

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cheeses/:id/edit" component={CheeseEdit}/>
        <Route path="/cheeses/new" component={CheeseNew} />
        <Route path="/cheeses/:id" component={CheeseShow} />
        <Route path="/cheeses" component={CheeseIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch> */}
    </BrowserRouter>
  )
}

export default Navbar

export default App