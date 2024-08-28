// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrease = () => {
    let randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  evenOddChange = () => {
    const {count} = this.state
    let status
    return (status = count % 2 === 0 ? 'Even' : 'Odd')
  }

  render() {
    const {count} = this.state
    const evenOddStatus = this.evenOddChange()
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="title"> Count {count} </h1>
          <p className="description"> Count is {evenOddStatus} </p>
          <button className="button" onClick={this.onIncrease}>
            Increment
          </button>
          <p className="bottom-description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
