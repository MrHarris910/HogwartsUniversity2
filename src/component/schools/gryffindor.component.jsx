import img1 from '../../image/castle-unsplash.jpg'

import LinkButton2 from '../linkButton/linkButton2.component';

import 'animate.css'



const Gryffindor = () => {
    return (

        <>
        <div class="container">
           <h1 class=" animate__animated animate__fadeInDown d-flex justify-content-center fs-1 p-2">Gryffindor</h1>

                <div class="container d-grid">

                    <div class="align-self-start p-3">

                        <LinkButton2 class="" to="/Schools" text="Back" />

                    </div>




                    <p class="fst-italic text-white  bg-secondary shadow-lg border rounded border-light w-auto h-auto p-5 fs-5">
                        Gryffindor is one of the four houses at Hogwarts School of Witchcraft and Wizardry,
                        this house values courage, bravery, and chivalry.
                        Gryffindor students are known for their adventurous spirit, 
                        determination, and willingness to stand up for what is right, even in the face of danger. The house animal is the lion, 
                        and its colors are red and gold. Gryffindor House has a rich history. Notable Gryffindor alumni include Harry Potter, Hermione Granger, 
                        and Ron Weasley, who embark on numerous adventures throughout their time at Hogwarts. 
                        Gryffindor is a symbol of daring and heroism in the magical world.
                    </p>

                    <img src={img1} class="img-fluid shadow-lg w-auto h-auto" alt="..."></img>


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

export default Gryffindor;