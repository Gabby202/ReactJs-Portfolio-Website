import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>

            <div className="banner-text">
            <img className = "avatar"
              src="images/me.png"
              alt="avatar"
              style={{height: '250px'}}
               />
              <h1>Gabriella Farrell</h1>

              <h3>1.1 Computer Science Graduate</h3>
              <h3>Project Portfolio</h3>

            <hr/>

          <p>Java | Python | JavaScript | C# | Unity | NodeJS | Android | React</p>

        <div className="social-links">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/gabriella-farrell-tud/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          {/* Github */}
          <a href="https://github.com/Gabby202" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
