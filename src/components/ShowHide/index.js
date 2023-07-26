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

  render() {
    const {isFirstNameHidden, isLastNameHidden} = this.state
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
              {isFirstNameHidden ? <p className="name-container">Joe</p> : null}
            </div>

            <div className="show-hide-container">
              <button
                type="button"
                className="btn"
                onClick={this.hideLastNameButton}
              >
                Show/Hide Lastname
              </button>
              {isLastNameHidden ? (
                <p className="name-container">Jonas</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
