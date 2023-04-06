// Write your code here
/* Write your CSS here */
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="counter-heading">
          the button clicked
          <br />
          <span className="counter-value">{count}</span>
        </h1>
        <p className="description">click button</p>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.onIncrementCount}
          >
            click me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
