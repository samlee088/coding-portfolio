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
        <div style={{backgroundColor:"#eee", marginTop:"100px", paddingTop:"75px", paddingBottom:"75px"}}>
        <div className="d-flex justify-content-center">
            <p style={{fontSize:"50px"}}>Full Stack Software Engineer</p>
        </div>
           
        <div
        className="page-section"
        xyz="fade small stagger delay-4 ease-in-out"
        >
             <div className="d-flex justify-content-center">
                <p style={{fontSize:"50px"}}>Front End</p>
            </div>
            <ul className="list-unstyled " style={styles.topContainer} >
                <li style={styles.listItems} className='xyz-nested'>
                    <p>HTML5</p>
                    <i className="devicon-html5-plain-wordmark colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>CSS3</p>
                    <i className="devicon-css3-plain-wordmark colored" style={{fontSize:"75px"}}></i>
        
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>Javascript</p>
                    <i className="devicon-javascript-plain colored" style={{fontSize:"75px"}}></i>
        
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>JQuery</p>
                    <i className="devicon-jquery-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>Bootstrap</p>
                    <i className="devicon-bootstrap-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>Handelbars.js</p>
                    <i className="devicon-handlebars-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>ReactJS</p>
                    <i className="devicon-react-original colored" style={{fontSize:"75px"}}></i>
                </li>
            </ul>
            
            <div className="d-flex justify-content-center">
                <p style={{fontSize:"50px"}}>Back End</p>
            </div>
            <ul className="list-unstyled " style={styles.topContainer} >
                <li style={styles.listItems} className='xyz-nested'>
                    <p>Node.js</p>
                    <i className="devicon-nodejs-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>MySQL</p>
                    <i className="devicon-mysql-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>MongoDB</p>
                    <i className="devicon-mongodb-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>Express</p>
                    <i className="devicon-express-original colored" style={{fontSize:"75px"}}></i>
                </li>
            </ul>
            
        </div>
    </div>
        


    )
}

