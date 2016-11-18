const React = require('react');

class DigitalClicker extends React.Component {
  constructor(){
    super();

    this.state = {timesClicked: 0}

    this.handleclick = this.handleclick.bind(this)
  }

  handleclick() {
    this.setState({
      timesClicked: ++this.state.timesClicked
    });
  }

  render(){
    return(
      <div>
        <button onClick={this.handleclick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

module.exports = DigitalClicker
