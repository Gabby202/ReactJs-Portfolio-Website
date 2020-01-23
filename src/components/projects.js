import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/gc1fJ302/octad.png) center / cover'}} >OCTAD - Text Adventure</CardTitle>
            <CardText>
              This game is was inspired by the older text based adventure games. Building this game allowed me to explore player interactions with NPC's, questing and exploration without the need for an intricate UI.
              The objective of the game is to find the appropriate ship parts to repair your crashed vessel on an alien planet. You will need to fight off monsters and prefirn some tasks for NPC's to accomplish this.
            </CardText>
            <CardActions border>
              <a href = "https://github.com/Gabby202/OCTAD-Text-Adventure" target="_blank"><Button colored>Github</Button></a>
              <a href = "octad.html" target="_blank"><Button colored>Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/05fdbsnX/2020-01-22-17-45-31-Unity-Web-GL-Player-Pizza-Punk.png) center / cover' }} >Pizza Punk</CardTitle>
            <CardText>
              This is a top-down 2D game. It involves the player getting and delivering pizzas to customers, while fighting off pesky enemies. The style very much post-apocolyptic,
              along with appropriate music!. Most of the sprites were edited and designed by me, excluding some background tiles. All animations were also done manually by
              creating different poses for each sprite, and looping them in a state machine. This was My first experience using a 3rd party untiy map builder called "Tiled".
              This game recieved an A grade in my second year of University. If you try it out, be sure to visit the pizza man in the top left purple building and talk to him using [Space]!
            </CardText>
            <CardActions border>
            <a href = "https://github.com/Gabby202/PizzaPunk" target="_blank"><Button colored>Github</Button></a>
            <a href = "pizzapunk.html" target="_blank"><Button colored>Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/hPBrPRwh/gaze1.png) center / cover'}} >Head Tracking Research Thesis</CardTitle>
            <CardText>
            This was my 4th year thesis research project where I explored webcam head/gaze tracking and how it could be utilized as an accessible
            tool for video game input. The implementation was demonstrated by developing a Unity WebGL game
            named ”Drive-On” that relies on the movement of your head/eyes with no input from your hands. This
            game involved the user navigating a race-track by controlling a car with their head tilts. The
            foundation of this project involved developing a Javascript API serve head tracking data to a server
            deployed by Node.js. This data was then queried by the Unity game aforementioned and
            formatted to usable controller code for the unity C# controller script. More information on this can be found in my Thesis by clicking below.
            </CardText>
            <CardActions border>
            <a href = "https://github.com/Gabby202/Gaze-Tracking-Research-Thesis-Software" target="_blank"><Button colored>Github</Button></a>
               <a href="https://drive.google.com/file/d/1b76VKw6XvbnGFJU17bNB79wQTO1KIfoL/view" target = "_blank"> <Button colored>Thesis</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/9QwKZpLk/2020-01-22-18-12-49-Mozilla-Firefox.png) center / cover'}} >Data Driven Controller</CardTitle>
            <CardText>
              This Game is more of a tech demo of a development technique. This technique involves coupling the UI to a data driven backend. This allows for in depth unit testing.
              By clicking "Demo" below, you will see a gif demonstrating this coupling. Notice how the console is representing the sprites in the game by using letters and characters.
              The underscores are represented by background sprites int he front-end, 'P' is represented by the player sprite, 'M' is represented by the monster sprite. This allows for
              very efficient scalable level buiding. The only manual level building that you need to do is type the appropriate characters in the code, and the sprites with be selected dynamically.
            </CardText>
            <CardActions border>
            <a href = "https://github.com/Gabby202/Data-Driven-Unity-Demo" target="_blank"><Button colored>Github</Button></a>
              <a href = "datagame.html" target="_blank"><Button colored>Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) { //java
      return (
        <div className="projects-grid">


          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/Nfm2b2LJ/2020-01-22-22-57-34-Photos.png) center / cover'}} >Celular Automata Visualization</CardTitle>
            <CardText>
            The aim of this project was to show the advantages of parallel computing over serial computing.
            The project is meant to illustrate the spread of the Ebola virus over Africa,
            using the cellular automaton method. The method of the CA is used to describe the state of
            entities in the space over time visualization of Ebola virus. The C programming language was used for this, with the Pthread library.
            The visualization shown here is written in java. Click below to view a gif of the result!
            </CardText>
            <CardActions border>
              <a href = "https://github.com/Gabby202/Celular_Automata_Simulation_Adapter" target="_blank"><Button colored>Github</Button></a>
              <a href = "ca.html" target="_blank"><Button colored>Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/y6MyVS5B/fuzzy.png) center / cover'}} >Fuzzy Controller - Temperature</CardTitle>
            <CardText>
            In this project i designed a fuzzy logic controller to monitor and change the temperature on a virtual thermostat. I also designed a visualization
            using a Java GUI which shows a realtime graph of the temperature being changed. Visit the repository on Github for more information.
            </CardText>
            <CardActions border>
              <a href = "https://github.com/Gabby202/Fuzzy-Controller-AirCon" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>

      )
    } else if(this.state.activeTab === 2) { //js
      return (
        <div className="projects-grid">


          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/wBvhWxC1/angular2.png) center / cover'}} >Angular Restaurant finder</CardTitle>
            <CardText>
            This is a single page restaurant “finder” application,
            which allows users to find restaurants local to them,
            by using a series of filtering functions (County, City, cuisine…).
            It is built on the Angular 4 framework and is driven by Node.js.
            </CardText>
            <CardActions border>
              <a href = "https://github.com/Gabby202/Restaurant_Finder_Angular" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )

    } else if(this.state.activeTab === 3) { //Python
      return (
        <div className="projects-grid">


          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/PfF0KN0w/tcs1.png) center / cover'}} >Threaded Chat Server</CardTitle>
            <CardText>
            The objective of this project was understand the functionality of peer-to-peer
            networks, and demonstrate this by creating a simple server/client
            'group' chat with message hashing, interactive functions and a message buffer.
            </CardText>
            <CardActions border>
              <a href = "https://github.com/Gabby202/Python_Chat_Server" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/GmvNcKtF/mb.png) center / cover'}} >Message Broker System (RabbitMQ, Flask)</CardTitle>
            <CardText>
                    This project demonstrates a simple send/recieve message broker driven system.
            </CardText>
            <CardActions border>
              <a href = "https://github.com/Gabby202/Message_Broker_System" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/pTy3tnSz/oring.png'}} >Computer Vision O-Ring Image Analysis</CardTitle>
            <CardText>
            In this project i developed a Python app to evaluate pictures of rubber rings, and determine if the rings are structurally compromised or broken. This involved
            parsing the pixels in each image and translating them into a binary black/white images. Then various comp vision techniques were used such as dialation, erosion and tresholding.
            </CardText>
            <CardActions border>
              <a href = "https://github.com/Gabby202/Computer-Vision-O-Ring-Analysis" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/hP8y6rGN/monkey.png'}} >Text Analysis & Web Scraper</CardTitle>
            <CardText>
            This is a text analysis project that mines and classifies articles scraped from the web. In this case, articiles about monkeys were scraped along with other
            random articles. This program parses the text of each article outlines, and classifies the article as "monkey" or "not-monkey".
            </CardText>
            <CardActions border>
              <a href = "https://github.com/Gabby202/Text-Minining-Monkey-Articles" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 4) { //android
      return (
        <div className="projects-grid">


          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.postimg.cc/cCqq2T0g/woofr.png) center / cover'}} >Woofr Geo-Social Dog Walker App</CardTitle>
            <CardText>
            This app was made by myself and a colleague in our 3rd year of University.
            It is android application that allows dog owners to find local dog walkers and vice versa. An owner can request the service of a walker in their area, in situations where they cannot walk their dog themselves. A walker can make themselves available to be requested by a local owner.
            This app won us "Best 3rd year project" at the Recursion tech seminar. Check out this <a href = "https://twitter.com/TUDUBLINComp/status/997135207068192768" target="_blank">Tweet</a>
            </CardText>
            <CardActions border>
              <a href = "https://github.com/Gabby202/Woofr" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>C# Unity Game Development</Tab>
          <Tab>Java</Tab>
          <Tab>Javascript/Node/Angular</Tab>
          <Tab>Python</Tab>
          <Tab>Android</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
