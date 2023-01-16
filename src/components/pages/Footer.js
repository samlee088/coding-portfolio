import React from 'react';

export default function Footer() {
return (

    <footer className="text-center text-white" style={{backgroundColor: '#f1f1f1'}}>
        <div className="container pt-4">
            <section className="mb-4">
            {/* <!-- Google --> */}
            <a
                className="btn text-white btn-floating m-1"
                style={{backgroundColor: '#dd4b39'}}
                href="mailto:leesamuel42@gmail.com"
                role="button"
                ><i className="fab fa-google"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
                className="btn text-white btn-floating m-1"
                style={{backgroundColor: '#0082ca'}}
                href="https://www.linkedin.com/in/samuel-lee-891a70242/"
                target="_blank"
                rel="noreferrer"
                role="button"
                ><i className="fab fa-linkedin-in"></i>
            </a>
            {/* <!-- Github --> */}
            <a
                className="btn text-white btn-floating m-1"
                style={{backgroundColor: '#333333'}}
                href="https://github.com/samlee088"
                role="button"
                target="_blank"
                rel="noreferrer"
                ><i className="fab fa-github"></i>
            </a>
            </section>
         </div>
    </footer>
    );
}