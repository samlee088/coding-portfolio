import React from 'react';

export default function ResumeSkills() {

const styles = { 
    topContainer : {
        display: "flex",
        flexDirection: "row",
        paddingRight:"10px",
        justifyContent:"space-evenly",
        flexWrap: "wrap",
      },
      listItems: {
        fontSize:"20px",
      }
    }
    
    return(
        <div>
            <div className="d-flex justify-content-center animate__animated animate__fadeIn">
            <h1 className="text-center font-weight-bold" style={{fontSize:"55px"}}>Full Stack Software Engineer</h1>
        </div>
           
        <div>
             <div className="d-flex justify-content-center animate__animated animate__fadeIn">
                <p style={{fontSize:"50px", marginTop:"50px"}}>Front End</p>
            </div>
            <ul className="list-unstyled animate__animated animate__fadeInDownBig" style={styles.topContainer} >
                <li style={styles.listItems} className=''>
                    <p>HTML5</p>
                    <i className="devicon-html5-plain-wordmark colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className=''>
                    <p>CSS3</p>
                    <i className="devicon-css3-plain-wordmark colored" style={{fontSize:"75px"}}></i>
        
                </li>
                <li style={styles.listItems} className=''>
                    <p>Javascript</p>
                    <i className="devicon-javascript-plain colored" style={{fontSize:"75px"}}></i>
        
                </li>
                <li style={styles.listItems} className=''>
                    <p>JQuery</p>
                    <i className="devicon-jquery-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className=''>
                    <p>Bootstrap</p>
                    <i className="devicon-bootstrap-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className=''>
                    <p>Handelbars.js</p>
                    <i className="devicon-handlebars-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className=''>
                    <p>ReactJS</p>
                    <i className="devicon-react-original colored" style={{fontSize:"75px"}}></i>
                </li>
            </ul>
            
            <div className="d-flex justify-content-center animate__animated animate__fadeIn">
                <p style={{fontSize:"50px", marginTop:"75px"}}>Back End</p>
            </div>
            <ul className="list-unstyled animate__animated animate__fadeInDownBig " style={styles.topContainer} >
                <li style={styles.listItems} className=''>
                    <p>Node.js</p>
                    <i className="devicon-nodejs-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className=''>
                    <p>MySQL</p>
                    <i className="devicon-mysql-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className=''>
                    <p>MongoDB</p>
                    <i className="devicon-mongodb-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className=''>
                    <p>Express</p>
                    <i className="devicon-express-original colored" style={{fontSize:"75px"}}></i>
                </li>
            </ul>
        </div>
    </div>
    )
}

