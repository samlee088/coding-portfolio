import React from 'react';
import southParkAvatar from '../../images/southParkAvatar.png'

export default function AboutIntroduction() {
    return (
        
    <div
        xyz="fade flip-down stagger duration-10 delay-2 ease-out-back"
    >
        <div class = "d-flex flex-row justify-content-around">
            <div className="xyz-nested">
                <img src={southParkAvatar} style={{borderRadius:"20px"}}/>
            </div>
            <div className="xyz-nested" style={{textAlign: "left", width:"40%"}}>
                <h3 className="xyz-nested">Hello from the Pacific Northwest, my name is Sam~! 
                    <br/>
                    <br/>
                    I am a full-stack web developer with a mathematics degree from the University of Washington. I am also a sufferer of stockholm syndrome onset by my cat overload Leela. Additionally strong passions for food and fitness with a mindset of working out to eat, rather than eating to workout ^.^ 
                </h3>
            </div>

        </div>
    </div>
       
    )
}