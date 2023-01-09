import React from 'react';



export default function Footer() {
return (

    <footer class="text-center text-white" style={{backgroundColor: '#f1f1f1'}}>

        <div class="container pt-4">

            <section class="mb-4">
        
        
            {/* <!-- Google --> */}
            <a
                class="btn text-white btn-floating m-1"
                style={{backgroundColor: '#dd4b39'}}
                href="mailto:leesamuel42@gmail.com"
                role="button"
                ><i class="fab fa-google"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
                class="btn text-white btn-floating m-1"
                style={{backgroundColor: '#0082ca'}}
                href="https://www.linkedin.com/in/samuel-lee-891a70242/"
                target="_blank"
                rel="noreferrer"
                role="button"
                ><i class="fab fa-linkedin-in"></i>
            </a>
            {/* <!-- Github --> */}
            <a
                class="btn text-white btn-floating m-1"
                style={{backgroundColor: '#333333'}}
                href="https://github.com/samlee088"
                role="button"
                target="_blank"
                rel="noreferrer"
                ><i class="fab fa-github"></i>
            </a>
            </section>
         </div>
    </footer>

    );
}