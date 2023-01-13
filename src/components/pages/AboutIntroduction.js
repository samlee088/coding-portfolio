import {React,useState, useEffect} from 'react';
import southParkAvatar from '../../images/southParkAvatar.png'


export default function AboutIntroduction() {
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
 
    //   only render the nav_black class if show is true
    <div className={`nav ${show && "nav_black"}`}></div>



    return (
        
    <div
        xyz="fade flip-down stagger duration-10 delay-2 ease-out-back" 
    >
        <div class = "d-flex flex-row justify-content-around">
            <div className={`nav ${show && "xyz-nested"}`}>
                <img src={southParkAvatar} style={{borderRadius:"20px"}}/>
            </div>
            <div className={`nav ${show && "xyz-nested"}`} style={{textAlign: "left", width:"40%"}}>
                <h3 className={`nav ${show && "xyz-nested"}`}>Hello from the Pacific Northwest, my name is Sam~! 
                    <br/>
                    <br/>
                    I am a full-stack web developer with a mathematics degree from the University of Washington. I am also a sufferer of stockholm syndrome onset by my cat overload Leela. Additionally I have strong passions for food and fitness with a mindset of working out to eat, rather than eating to workout ^.^ 
                </h3>
            </div>

        </div>
    </div>
       
    )
}