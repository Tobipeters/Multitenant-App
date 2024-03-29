import React from 'react'
import ProfileAvatar from '../../../../assets/images/user-avatar_.png'

class profileImage extends React.Component {
    constructor(props) {
      super(props);
      this.state = { file: ProfileAvatar };
      this.onChange = this.onChange.bind(this);
      this.resetFile = this.resetFile.bind(this);
    }
    onChange(event) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      });
      console.log(this.state.file)
    } 
  
    resetFile(event) {
      event.preventDefault();
      this.setState({ file: ProfileAvatar });
    }
    render() {
      return (
        <div>
          
          {this.state.file && (
            <div style={{ textAlign: "center" }}>
              <button className="close-btn" onClick={this.resetFile}>X</button>
            </div>
          )}
              <img className="profile-user-img img-responsive img-circle" alt="Userpicture" src={this.state.file} />
              <input type="file" onChange={this.onChange} title="click to upload picture"/>
              <button className="btn btn-info waves-effect waves-light btn save-image"><i className="far fa-save"></i></button>
        </div>
      );
    }
  }
  
  export default profileImage
  //ReactDOM.render(<App />, document.getElementById("root"));