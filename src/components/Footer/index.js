import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
  render() {
    return(
      <div className="Footer"
        style={{backgroundColor: this.props.background, color: this.props.text}}>
        <style>
          {`
            .Footer a:hover {
              border-bottom: 1px ` + this.props.hovercolor + ` solid;
              color: ` + this.props.hovercolor + `!important;
            }
          `}
        </style>
        <p>
          Site and design © 2018 Grailsoft Technical Solutions
          <a href='https://www.linkedin.com/company/grailsoft-technologies-llc/' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-linkedin-square"></span></a>
          <a href='https://github.com/GrailsoftTechnologies' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-github-square"></span></a>
          <a href='https://twitter.com/GrailsoftTech' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-twitter-square"></span></a>
        </p>
      </div>
    );
  }
}

Footer.defaultProps = {
  background: 'black',
  text: 'white',
  hovercolor: 'grey'
}

export default Footer;
