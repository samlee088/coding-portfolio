import React from 'react';
import ResumeSkills from './ResumeSkills'

export default function Resume() {
    return (

        <div>

            <div>
                < ResumeSkills />
            </div>
        
            <div className="d-flex justify-content-center" style={{marginTop:"50px"}}>
                <a href = 'https://drive.google.com/file/d/1rLOS1ecYuNgu8gpxNyQF4jhFxdc2t5Qb/view?usp=sharing' target = '_blank' rel="noreferrer">
                    <button type="button" className="btn btn-primary btn-lg">Link to Download PDF</button>
                </a>
            </div>


        </div>

    );
}