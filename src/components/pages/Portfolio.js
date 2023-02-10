import React from 'react';
import bigBadBrainBusterImg from '../../../src/images/big-bad-brain-blender-buster-screenshot.png';
import newsAggregator from '../../../src/images/newsAggregator.png';
import socialMediaApiScreenshot from '../../../src/images/socialMediaApiScreenshot.png';
import bookSearchEngine from '../../../src/images/book-search-engine-screenshot.png';
import textEditor from '../../../src/images/textEditor.png';
import fitNuts from '../../../src/images/fitnuts-screenshot.png';

export default function Portfolio() {
  return (

    <div style={{backgroundColor:"#D0CDC0", paddingTop:"75px", paddingBottom:"75px"}}>
      
      <h1 className="text-center font-weight-bold" style={{fontSize:"55px"}}>Portfolio</h1>
      <br />

      <div className="container animate__animated animate__zoomIn">

      <div className= "row d-flex justify-content-center align-items-center">
          <div className="col-md-7 bg-image hover-overlay">
            <a href = "https://github.com/samlee088/fit-nuts" target="_blank" rel="noreferrer">
                <img className="img-fluid rounded mb-3 mb-md-0" src={fitNuts} alt = "fitNuts fitness application screenshot"/>
            </a> 
          </div>
          <div className="col-md-5">
              <h3>FitNuts</h3>
              <p> Application that enables a user to track their workouts </p>
              <ul>
                <li> MERN stack </li>
                <li> Graphql </li>
                <li> JWT Authentication </li>
                <li> PWA / service workers</li>
              </ul>
              <a className="btn btn-primary" href="https://fit-nuts.herokuapp.com/" target="_blank" rel="noreferrer">View Project</a>
          </div>
        </div>

        <br />
        <hr/>
        <br />

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <a href = "https://github.com/samlee088/book-search-engine" target="_blank" rel="noreferrer">
                <img className="img-fluid rounded mb-3 mb-md-0" src={bookSearchEngine} alt = "screenshot of the book search engine application"/>
            </a> 
          </div>
          <div className="col-md-5">
              <h3>Book Search Engine</h3>
              <p>Search engine that enables a user to search for book information and save for future reference </p>
              <ul>
              <li> MERN stack </li>
                <li> Graphql </li>
                <li> JWT Authentication </li>
              </ul>
              <a className="btn btn-primary" href="https://book-search-engine-845.herokuapp.com/" target="_blank" rel="noreferrer">View Project</a>
          </div>
        </div>

        <br />
        <hr/>
        <br />

        <div className= "row d-flex justify-content-center align-items-center">
          <div className="col-md-7 bg-image hover-overlay">
            <a href = "https://github.com/samlee088/Big-Bad-Brain-Blender-Buster" target="_blank" rel="noreferrer">
                <img className="img-fluid rounded mb-3 mb-md-0" src={bigBadBrainBusterImg} alt = "big-bad-brain-blender-buster quiz application screenshot"/>
            </a> 
          </div>
          <div className="col-md-5">
              <h3 >Big Bad Brain Blender Buster </h3>
              <p> Quiz application for online entertainment </p>
              <ul>
                <li> Axios </li>
                <li> Sequelize </li>
                <li> BCrypt Authentication </li>
                <li> Express Session </li>
              </ul>
              <a className="btn btn-primary" href="https://big-bad-brain-blender-buster.herokuapp.com/" target="_blank" rel="noreferrer">View Project</a>
          </div>
        </div>

        <br />
        <hr/>
        <br />

        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-7">
            <a href = "https://github.com/samlee088/news-aggregator" target="_blank" rel="noreferrer">
                  <img className="img-fluid rounded mb-3 mb-md-0" src={newsAggregator} alt = "news-aggregator application screenshot"/>
            </a> 
          </div>
          <div className="col-md-5">
              <h3>News Aggregator</h3>
              <p>News reader with random fact generator </p> 
              <ul>
                <li> Javascript API  </li>
                <li> JQuery </li>
              </ul>
              <a className="btn btn-primary" href="https://samlee088.github.io/news-aggregator/" target="_blank" rel="noreferrer">View Project</a>

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
              <ul>
                <li> MongoDB </li>
                <li> Express </li>
              </ul>
              <a className="btn btn-primary" href="https://github.com/samlee088/social-network-api" target="_blank" rel="noreferrer">View Project</a>
          </div>
        </div>

        <br />
        <hr/>
        <br />

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <a href = "https://github.com/samlee088/text-editor" target="_blank" rel="noreferrer">
                <img className="img-fluid rounded mb-3 mb-md-0" src={textEditor} alt = "text-editor application screenshot"/>
            </a> 
          </div>
          <div className="col-md-5">
              <h3>Text Editor</h3>
              <p>Online Text Editor that can also be ran offline</p>
              <ul>
                <li> PWQ / Service Workers </li>
                <li> Client-Server Model </li>
                <li> Heroku </li>

              </ul>
              <a className="btn btn-primary" href="https://jate-pnw-edition.herokuapp.com" target="_blank" rel="noreferrer">View Project</a>
          </div>
        </div>

      </div>
    </div>
  );
}
