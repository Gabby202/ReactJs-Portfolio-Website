import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>

        <Grid className="landing-grid-about">
          <Cell col={12}>

            <div className="banner-text-about">
            <h1>About Me</h1>
            <div class = "about-text">
            <h5>
              I am a recent Computer Science graduate ready to kickstart my career. During my time in University, I maintained very high grades across all modules, ahieving
              a 1.1 First Class Honours Bachelor degree in Computing Level 8. I am a traditional and digital art hobbiest, and have an excellent capacity for learning. I am a very competent programmer that
              shines in multi media game design, frontend & backend programming as well as mobile app building.
            </h5>
            <h5>
              If you are looking for a strong programmer with a creative flair, consider hiring me. You won't regret it!.
            </h5>
            </div>
            <img
              src="https://i.postimg.cc/J7T9tWSr/recursion.png"
              alt="avatar"
              width="50%"
              />
              <br/>
              <i>Myself (left) and my colleague (right) presenting an award-winning android app at Recursion Tech Seminar. Find out more in the 'Accomplishments' section on my <a href= "https://www.linkedin.com/in/gabriella-farrell-tud/">Linkedin</a></i>
              <br/>
            </div>
          </Cell>
        </Grid>


      </div>

    )
  }
}

export default About;
