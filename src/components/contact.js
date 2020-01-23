import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Gabriella Farrell</h2>
            <img className = "avatar"
              src="images/me.png"
              alt="avatar"
              style={{height: '250px'}}
               />

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Roboto'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    Mobile: 083 416 3033
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Roboto'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                  Email: gabby.farrell202@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Arial'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                  <a href = "https://www.linkedin.com/in/gabriella-farrell-tud/" target="_blank">Linkedin</a>
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
