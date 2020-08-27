import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'

import { withHeaders, getSingleUser } from '../../lib/api'

class UserShow extends React.Component {

  state = {
    user: null,
  }

  async componentDidMount() {
    
    try {
      const userId = this.props.match.params.id
      const res = await getSingleUser(userId)
      this.setState({ user: res.data })
      console.log(this.state.user)
    } catch (err) {

      console.log(err)
    }
  }

  render(){
    return(
      <h1> hello</h1>
    )
}
}
export default UserShow