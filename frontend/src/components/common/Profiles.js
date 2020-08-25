import React from 'react'
import axios from 'axios'


class Profile extends React.Component{

  state = {
    profiles: [{}]
  }

  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:3000/api/profiles')
      this.setState({ profiles: res.data })
      console.log(res.data)
    } catch (err) {
      // this.props.history.push('/notfound')
      console.log(err)
    }
  }

  render(){

    return(
      <>
      <h1>CRIKEY!</h1>
      <h2>{this.state.profiles[0].username}</h2>
      </>
    )
  }
}


export default Profile