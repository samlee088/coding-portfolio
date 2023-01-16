import React from 'react';
import bigBadBrainBusterImg from '../../../src/images/big-bad-brain-blender-buster-screenshot.png';
import newsAggregator from '../../../src/images/newsAggregator.png';
import noteTaker from '../../../src/images/noteTaker.png';
import socialMediaApiScreenshot from '../../../src/images/socialMediaApiScreenshot.png';
import teamProfileGenerator from '../../../src/images/teamProfileGenerator.png';
import textEditor from '../../../src/images/textEditor.png';

export default function Portfolio() {
  return (

    <div style={{backgroundColor:"#D0CDC0", paddingTop:"75px", paddingBottom:"75px"}}>
      <h1 className="text-center font-weight-bold" style={{fontSize:"55px"}}>Portfolio</h1>
      <br />
      <div className="container animate__animated animate__zoomIn">
        <div className= "row d-flex justify-content-center align-items-center">
          <div className="col-md-7 bg-image hover-overlay">
            <a href = "https://big-bad-brain-blender-buster.herokuapp.com/" target="_blank" rel="noreferrer">
                <img className="img-fluid rounded mb-3 mb-md-0" src={bigBadBrainBusterImg} alt = "big-bad-brain-blender-buster quiz application screenshot"/>
            </a> 
          </div>
          <div className="col-md-5">
              <h3>Big Bad Brain Blender Buster</h3>
              <p>Front end quiz application </p>
              <a className="btn btn-primary" href="https://github.com/samlee088/Big-Bad-Brain-Blender-Buster" target="_blank" rel="noreferrer">View Project</a>
          </div>
        </div>

        <br />
        <hr/>
        <br />

        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-7">
            <a href = "https://samlee088.github.io/news-aggregator/" target="_blank" rel="noreferrer">
                  <img className="img-fluid rounded mb-3 mb-md-0" src={newsAggregator} alt = "news-aggregator application screenshot"/>
            </a> 
          </div>
          <div className="col-md-5">
              <h3>News Aggregator</h3>
              <p>News reader with random fact generator </p>
              <a className="btn btn-primary" href="https://github.com/samlee088/news-aggregator" target="_blank" rel="noreferrer">View Project</a>

          </div>
        </div>

        <br />
        <hr/>
        <br />

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <a href = "https://github.com/samlee088/social-network-api" target="_blank" rel="noreferrer">
                <img className="img-fluid rounded mb-3 mb-md-0" src={socialMediaApiScreenshot} alt = "social network api application screenshot"/>
            </a> 
          </div>
          <div className="col-md-5">
              <h3>Social Media API</h3>
              <p>Back-end application for an API for a potential social media website </p>
              <a className="btn btn-primary" href="https://github.com/samlee088/social-network-api" target="_blank" rel="noreferrer">View Project</a>
          </div>
        </div>

        <br />
        <hr/>
        <br />

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <a href = "https://jate-pnw-edition.herokuapp.com/" target="_blank" rel="noreferrer">
                <img className="img-fluid rounded mb-3 mb-md-0" src={textEditor} alt = "text-editor application screenshot"/>
            </a> 
          </div>
          <div className="col-md-5">
              <h3>Text Editor</h3>
              <p>Online Text Editor that can also be ran offline</p>
              <a className="btn btn-primary" href="https://github.com/samlee088/text-editor" target="_blank" rel="noreferrer">View Project</a>
          </div>
        </div>

        <br />
        <hr/>
        <br />

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <a href = "https://github.com/samlee088/note-taker" target="_blank" rel="noreferrer">
                <img className="img-fluid rounded mb-3 mb-md-0" src={noteTaker} alt = "note-taker application screenshot"/>
            </a> 
          </div>
          <div className="col-md-5">
                <h3>Note Taker</h3> 
                <p>Online Note Taker for quick notes that can easily have noted added and removed </p> 
                <a className="btn btn-primary" href="https://github.com/samlee088/note-taker" target="_blank"   rel="noreferrer">View Project</a>
            </div>  
        </div>

        <br />
        <hr/>
        <br />

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <a href = "https://github.com/samlee088/team-profile-generator" target="_blank" rel="noreferrer">
                <img className="img-fluid rounded mb-3 mb-md-0" src={teamProfileGenerator} alt = "team-profile-generator application screenshot"/>
            </a> 
          </div>
          <div className="col-md-5">
              <h3>Team Profile Generator</h3>
              <p>Back-end application for a manager to help create a team profile </p>
              <a className="btn btn-primary" href="https://github.com/samlee088/team-profile-generator" target="_blank" rel="noreferrer">View Project</a>
          </div>
        </div>
      </div>
    </div>
  );
}
