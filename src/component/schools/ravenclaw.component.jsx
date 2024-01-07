import img4 from '../../image/julius-drost-C8wlYF8ubBo-unsplash.jpg'

import LinkButton2 from '../linkButton/linkButton2.component';

import 'animate.css'

const Ravenclaw = () => {
    return (

        <>

        <div class="container">

            <h1 class="animate__animated animate__fadeInDown d-flex justify-content-center fs-1 p-2">Ravenclaw</h1>

            <div class="container d-grid">

                <div class="align-self-start p-3">

                    <LinkButton2 to="/Schools" text="Back" />

                </div>

            <p class="fst-italic text-white col bg-secondary shadow-lg border rounded border-light w-auto h-auto p-5 fs-5">
                 Ravenclaw, one of the four houses at Hogwarts School of Witchcraft and Wizardry, 
                is synonymous with intelligence, wisdom, and a passion for learning. 
                Founded by Rowena Ravenclaw, 
                this house values individuality, creativity, and a love for the pursuit of knowledge. 
                Ravenclaw students are known for their wit, curiosity, and a keen appreciation for the arts and sciences. 
                The house animal is the eagle, and its colors are blue and silver. 
                The Ravenclaw common room is located in a tower on the west side of Hogwarts, providing stunning views of the surrounding landscape. 
                Ravenclaw House stands out for its commitment to intellectual pursuits 
                and critical thinking. Notable Ravenclaw alumni include Luna Lovegood and Cho Chang. 
                Ravenclaw represents the spirit of discovery and a deep appreciation for the wonders of the magical world.
            </p>

            <img src={img4} class="img-fluid shadow-lg w-auto h-auto" alt="..."></img>

            </div>
           
        </div>

        <div class="card">
            <div class="card-header">
                Quote
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>"The ones that love us never really leave us."
                    </p>
                    <footer class="blockquote-footer">Sirius Black</footer>
                </blockquote>
            </div>
    </div>

        </>
    );
};

export default Ravenclaw