import {React,useState, useEffect} from 'react';
import southParkAvatar from '../../images/southParkAvatar.png'

export default function AboutIntroduction() {

    //useState code for animation with avatar and introduction paragraph
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else {
        handleShow(false)
    }
}
    useEffect(() => {   
    window.addEventListener('scroll', transitionNavBar); 
    // we clean it up and remove after for best practice
    return () => window.removeEventListener('scroll', transitionNavBar);
        }, []);
 

    return (
        
        <div className="d-flex flex-row justify-content-around">
            <div className={`nav ${show && "animate__animated animate__slideInLeft"}`}>
                <img src={southParkAvatar} style={{borderRadius:"20px"}} alt="avatar"/>
            </div>
            <div className={`nav ${show && "animate__animated animate__slideInRight"}`} style={{textAlign: "left", width:"50%"}}>
                <h3 >Hello my name is Sam~! 
                    <br/>
                    <br/>
                    I am a web developer with a Full Stack Coding Certificate and a Mathematics Degree both from the University of Washington. I have both front-end and back-end coding skills, including knowledge of Javascript, MongoDB, Graphql, React and can create web applications using the MERN stack. 
                    <br/>
                    <br/>
                    My Mathematics degree has helped me with problem solving skills and logic, also approaching algorithms as writing proofs. Additionally I have a history of leading, and working on teams in a past-paced environment. 
                    <br/>
                    <br/>
                    My contributions to projects have been primarily on the functionality of the webpage, including data management, and working on creating a clean friendly UI and UX. 
                    <br/>
                    <br/>
                    I am excited to continue my coding career by demonstrating my skills and providing great value to my future teams.
                    <br/>
                    <br/>
                    Please feel free to reach out to me with either the social media icons below on the footer, or with the 'Contact' page
                </h3>
            </div>

        </div>
       
    )
}