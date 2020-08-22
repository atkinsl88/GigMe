import React from 'react'
// import { getAllGigs } from '../../../../lib/api'
import GigCard from './GigCard'

class GigIndex extends React.Component {

  // async componentDidMount() {
  //   try {
  //     const res = await getAllGigs()
  //     this.setState({ gigs: res.data })
  //   } catch (err) {
  //     this.props.history.push('/notfound')
  //   }
  // }

  render() {

console.log(this.props.gigprops) //data from the API here

    return (
      <section>

        <div className="hero-gigs">
          <div className="hero-gigs-txt">
            <h1>Gigs</h1>
          </div>
        </div>

        {/* <div className="container">
          <div className="columns is-multiline">
            {this.props.gigprops.map(gig => (
              <GigCard key={gig._id} {...gig}/>
            ))}
          </div>
        </div> */}

      </section>
    )
  }
}

export default GigIndex