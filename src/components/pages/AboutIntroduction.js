import React from 'react';
import southParkAvatar from '../../images/southParkAvatar.png'

export default function AboutIntroduction() {
    return (
        <div class = "d-flex flex-row justify-content-around">
            <div>
                <img src={southParkAvatar} style={{borderRadius:"20px"}}/>
            </div>
            <div style={{textAlign: "left", width:"40%"}}>
                <h3>Hello from the Pacific Northwest, my name is Sam~! 
                    <br/>
                    <br/>
                    I am a full-stack web developer with a mathematics degree from the University of Washington with an interest in food and fitness with a mindset of working out to eat ^.^
                </h3>
            </div>

        </div>
    )
}