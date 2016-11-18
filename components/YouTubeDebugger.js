// const React = require('react')
//
// class YouTubeDebugger extends React.Component {
//   constructor(){
//     super();
//
//     this.state = {
//       errors: [],
//       user: null,
//       settings: {
//         bitrate: 8,
//         video: {
//           resolution: '1080p'
//         }
//       }
//     }
//
//     this.setBitrate = this.setBitrate.bind(this)
//     this.setResolution = this.setResolution.bind(this)
//   }
//
//   setBitrate(){
//     this.setState({
//       settings: Object.assign({}, this.state.settings, {
//         bitrate: 12
//       }),
//     });
//   }
//
//   setResolution(){
//     this.setState({
//       settings: Object.assign({}, this.state.settings, {
//       video: Object.assign({}, this.state.settings.video, {
//         resolution:'720p'
//       })
//     }),
//   });
//   }
//
//   render(){
//     return(
//       <div>
//         <button class="bitrate" onClick={this.setBitrate}>Change bitrate</button>
//         <button class="resolution" onClick={this.setResolution}>Change resolution</button>
//       </div>
//     );
//   }
// }
//
// module.exports = YouTubeDebugger

const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };

    this.handleChangeBitrate = this.handleChangeBitrate.bind(this);
    this.handleChangeResolution = this.handleChangeResolution.bind(this);
  }

  handleChangeBitrate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  handleChangeResolution() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      }),
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleChangeBitrate}>Change bitrate</button>
        <button className="resolution" onClick={this.handleChangeResolution}>Change resolution</button>
      </div>
    );
  }
}

module.exports = YouTubeDebugger;
