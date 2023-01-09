import React from 'react';
import ResumeSkills from './ResumeSkills'

export default function Resume() {
    return (

        <div>

            <div>
                < ResumeSkills />
            </div>
            <p>
                Hello, Please see link to my resume
            </p>
            
            <a href = 'https://drive.google.com/file/d/1rLOS1ecYuNgu8gpxNyQF4jhFxdc2t5Qb/view?usp=sharing' target = '_blank' rel="noreferrer">
                <button>Link to Download PDF</button>
            </a>


        </div>

    );
}