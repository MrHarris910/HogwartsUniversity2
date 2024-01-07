import img1 from '../image/castle-unsplash.jpg'

import img2 from '../image/artem-maltsev-3n7DdlkMfEg-unsplash.jpg'

import img3 from '../image/joshua-newton-7qjqQjt7zXQ-unsplash.jpg'

import img4 from '../image/julius-drost-C8wlYF8ubBo-unsplash.jpg'

import LinkButton from '../component/linkButton/linkButton.component'

import React from 'react'

const Schools = () => {

    return (

        <div class="container text-center">
           
            <div class="row gap-3">
                <div class="col bg-secondary shadow-lg border border-light p-5"> 
                <img src={img1} class="img-fluid shadow-lg" alt="..."></img>

                <LinkButton to="/Gryffindor" text="Gryffindor" />
                    


                </div>
                <div class="col bg-secondary shadow-lg border border-light h-25 mt-3 p-5">
                <img src={img2} class="img-fluid shadow-lg" alt="..."></img>

                    <LinkButton to="/Slytherin" text="Slytherin" />


                </div>
                <div class="col bg-secondary shadow-lg border border-light p-5">
                <img src={img3} class="img-fluid shadow-lg" alt="..."></img>

                    <LinkButton to="/Hufflepuff" text="Hufflepuff" />



                </div>
                <div class="col bg-secondary border shadow-lg border-light p-5">
                <img  src={img4} class="img-fluid shadow-lg" alt="..."></img>

                    <LinkButton to="/Ravenclaw" text="Ravenclaw" />


                </div>
                
            </div>

        </div>

    );
};

export default Schools;