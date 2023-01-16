import React from 'react';
import ResumeSkills from './ResumeSkills'

export default function Resume() {
    return (
        <div style={{backgroundColor:"#D0CDC0", paddingTop:"75px", paddingBottom:"75px"}}>
            <div>
                < ResumeSkills />
            </div>
        
            <div className="d-flex justify-content-center" style={{marginTop:"50px", marginBottom:"100px"}}>
                <a href = 'https://drive.google.com/file/d/1rLOS1ecYuNgu8gpxNyQF4jhFxdc2t5Qb/view?usp=sharing' target = '_blank' rel="noreferrer">
                    <button type="button" className="btn btn-primary btn-lg animate__animated animate__fadeInDownBig" style={{marginTop:"50%"}}>Link to Download PDF</button>
                </a>
            </div>


        </div>
    );
}