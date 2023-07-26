import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameHidden: true, isLastNameHidden: true}

  hideFistNameButton = () => {
    this.setState(prevState => ({
      isFirstNameHidden: !prevState.isFirstNameHidden,
    }))
  }

  hideLastNameButton = () => {
    this.setState(prevState => ({
      isLastNameHidden: !prevState.isLastNameHidden,
    }))
  }

  renderContainer1 = () => {
    const {isFirstNameHidden} = this.state
    if (isFirstNameHidden === true) {
      return <p className="name-container">Joe</p>
    }
    return null
  }

  renderContainer2 = () => {
    const {isLastNameHidden} = this.state
    if (isLastNameHidden === true) {
      return <p className="name-container">Jonas</p>
    }
    return null
  }

  render() {
    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="main-container">
            <div className="show-hide-container">
              <button
                type="button"
                className="btn"
                onClick={this.hideFistNameButton}
              >
                Show/Hide Firstname
              </button>
              {this.renderContainer1()}
            </div>

            <div className="show-hide-container">
              <button
                type="button"
                className="btn"
                onClick={this.hideLastNameButton}
              >
                Show/Hide Lastname
              </button>
              {this.renderContainer2()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
