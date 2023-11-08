// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangocount: 0, bananacount: 0}

  eatMango = () => {
    this.setState(prevmango => {
      console.log(prevmango)
      return {
        mangocount: prevmango.mangocount + 1,
      }
    })
  }

  eatBanana = () => {
    this.setState(prevbanana => ({bananacount: prevbanana.bananacount + 1}))
  }

  render() {
    const {mangocount, bananacount} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          Bob ate <span>{mangocount}</span> mangoes <span>{bananacount}</span>{' '}
          bananas
        </h1>

        <div className="inner-container">
          <div className="mango">
            <img
              alt="mango"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="image"
            />
            <button className="button" type="button" onClick={this.eatMango}>
              Eat Mango
            </button>
          </div>
          <div className="banana">
            <img
              alt="banana"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="image"
            />
            <button className="button" type="button" onClick={this.eatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
