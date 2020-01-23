import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>


            <h2 style={{paddingTop: '2em'}}>Gabriella Farrell</h2>
            <h4 style={{color: 'gray'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p style={{color: 'gray'}}>Recent college graduate with a 1.1 First Class Honors in Computer Science. Strong full-stack programmer seeking a career in software engineering and software development. Available for interviews</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5 style={{color: 'black'}}>Phone</h5>
            <p style={{color: 'gray'}}>083 416 3033</p>
            <h5 style={{color: 'black'}}>Email</h5>
            <p style={{color: 'gray'}}>gabby.farrell202@gmail.com</p>
            <h5 style={{color: 'black'}}>Linkedin</h5>
            <p style={{color: 'gray'}}>https://linkedin.com/in/gabriella-farrell-tud</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2008}
              endYear={20014}
              schoolName="Colaiste Choilm"
              schoolDescription="Leaving Certificate​ -​ Dublin"
               />

               <Education
                 startYear={2015}
                 endYear={2019}
                 schoolName="Technological University Dublin​ ​- 1.1 First Degree Honours"
                 schoolDescription="Honours Bachelor of Science in Computing ​-​ Dublin"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2014}
              endYear={2014}
              jobName="Playprint LTD"
              jobDescription="Worked on barcode scanning software in Java, Troublshooting bugs, Unit testing, SQL database"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Projects</h2>

              <Experience
                startYear={"year"}
                endYear={3}
                jobName ="Award winning Android application and Thesis"
                jobDescription="This app was presented by me and my colleague at the ​‘Recursion’​ tech seminar heldby Liberty Insurance, where it won first place 3rd year project. It is a dog walking assistant to accommodate the pairing of dog walkers and dog owners."
                />

                <Experience
                  startYear={"year"}
                  endYear={4}
                  jobName ="Unity Gaze-Tracking Software and Thesis"
                  jobDescription="This software used a webcam to track the users eye and head movements, to beused as a ‘joystick’ in a series of mini-games developed in unity. This involved developing a gaze-tracking API using Javascript and C#."
                  />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Java"
                progress={100}
                />
                <Skills
                  skill="Python"
                  progress={100}
                  />
                  <Skills
                    skill="Javascript"
                    progress={90}
                    />
                    <Skills
                      skill="C#"
                      progress={100}

                      />
                      <Skills
                        skill="PHP"
                        progress={70}

                        />
                        <Skills
                          skill="SQL"
                          progress={70}

                          />
                          <Skills
                            skill="R"
                            progress={80}
                            />
                            <Skills
                              skill="Numpy & Panas in Python"
                              progress={80}
                              />
                              <Skills
                                skill="Rapidminer"
                                progress={80}
                                />
                                <Skills
                                  skill="React"
                                  progress={90}
                                  />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
