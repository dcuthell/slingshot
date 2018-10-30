import React, { Component } from 'react';
import './styles.css';

class FBEmbedFrame extends Component {

  constructor(props){
    super(props);
    this.state = {
      width: ((window.innerWidth > 576) ? 500 : 340),
      height: ((window.innerHeight > 576) ? (parseInt(window.innerHeight * .65, 10)) : 400), // 10 is for radix
      mobile: (((window.innerWidth > 576) && (window.innerHeight > 576)) ? false : true)
    }
  }

  render() {
    return(
      <iframe
        title="FBiframe"
        src={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F" + this.props.account + "&tabs=" + this.props.data + "&width=" + this.state.width + "&height=" + this.state.height + "&small_header=" + this.state.mobile + "&adapt_container_width=false&hide_cover=false&show_facepile=" + (!this.state.mobile)}
        width={this.state.width}
        height={this.state.height}
        scrolling="no"
        frameBorder="0"
        allow="encrypted-media">
      </iframe>
      );
    }
}

FBEmbedFrame.defaultProps = {
  data: "timeline",
  account: "TheStardayTavern",
}

export default FBEmbedFrame;
