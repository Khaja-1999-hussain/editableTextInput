import {Component} from 'react'
import './index.css'

class Edit extends Component {
  state = {
    isButtonClicked: false,
    input: '',
  }

  onClickBtn = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  onChangeInput = event => {
    this.setState({
      input: event.target.value,
    })
  }

  render() {
    const {isButtonClicked, input} = this.state
    const editButton = isButtonClicked ? 'Edit' : 'Save'
    return (
      <div className="app-container">
        <div className="container">
          <div className="text-container">
            <h1 className="heading">Editable Text Input</h1>
            <div className="input-container">
              <p>{input}</p>
              <input
                className="input"
                onChange={this.onChangeInput}
                type="text"
              />
              <button
                className="button"
                onClick={this.onClickBtn}
                type="button"
              >
                {editButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Edit
