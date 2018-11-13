import React, { Component } from 'react';

class IGFrame extends Component {

  constructor(props){
    super(props);
    this.state = {
      width: ((window.innerWidth > 576) ? 500 : parseInt(window.innerWidth*.75, 10)),
      height: ((window.innerHeight > 576) ? (parseInt(window.innerHeight * .65, 10)) : 400), // 10 is for radix
      mobile: (((window.innerWidth > 576) && (window.innerHeight > 576)) ? false : true)
    }
  }

  render() {
    return(
      <iframe
        src={"http://instagram.com/p/" + this.props.source + "/embed"}
        width={this.state.width}
        height={this.state.height}
        frameborder="0"
        scrolling="no"
        allowtransparency="true">
      </iframe>
      );
    }
}

IGFrame.defaultProps = {
  data: "timeline",
  source: "Bl4m0xInwQl",
}

export default IGFrame;
