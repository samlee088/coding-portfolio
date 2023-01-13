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
        <div class="d-flex justify-content-center">
            <p style={{fontSize:"50px"}}>Full Stack Software Engineer</p>
        </div>
           
        <div
        className="page-section"
        xyz="fade small stagger delay-4 ease-in-out"
        >
             <div class="d-flex justify-content-center">
                <p style={{fontSize:"50px"}}>Front End</p>
            </div>
            <ul class="list-unstyled " style={styles.topContainer} >
                <li style={styles.listItems} className='xyz-nested'>
                    <p>HTML5</p>
                    <i class="devicon-html5-plain-wordmark colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>CSS3</p>
                    <i class="devicon-css3-plain-wordmark colored" style={{fontSize:"75px"}}></i>
        
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>Javascript</p>
                    <i class="devicon-javascript-plain colored" style={{fontSize:"75px"}}></i>
        
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>JQuery</p>
                    <i class="devicon-jquery-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>Bootstrap</p>
                    <i class="devicon-bootstrap-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>Handelbars.js</p>
                    <i class="devicon-handlebars-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>ReactJS</p>
                    <i class="devicon-react-original colored" style={{fontSize:"75px"}}></i>
                </li>
            </ul>
            
            <div class="d-flex justify-content-center">
                <p style={{fontSize:"50px"}}>Back End</p>
            </div>
            <ul class="list-unstyled " style={styles.topContainer} >
                <li style={styles.listItems} className='xyz-nested'>
                    <p>Node.js</p>
                    <i class="devicon-nodejs-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>MySQL</p>
                    <i class="devicon-mysql-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>MongoDB</p>
                    <i class="devicon-mongodb-plain colored" style={{fontSize:"75px"}}></i>
                </li>
                <li style={styles.listItems} className='xyz-nested'>
                    <p>Express</p>
                    <i class="devicon-express-original colored" style={{fontSize:"75px"}}></i>
                </li>
            </ul>
            
        </div>
    </div>
        


    )
}

