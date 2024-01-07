import img2 from '../../image/artem-maltsev-3n7DdlkMfEg-unsplash.jpg'

import LinkButton2 from '../linkButton/linkButton2.component';

import 'animate.css'

const Slytherin = () => {
    return (

        <>

        <div class="container">
            <h1 class="animate__animated animate__fadeInDown
                        d-flex justify-content-center fs-1 p-2">Slytherin</h1>

            <div class="container d-grid">


            <div class="align-self-start p-3">

                <LinkButton2 class="" to="/Schools" text="Back" />

            </div>

            

                

                <p class="fst-italic text-white col bg-secondary shadow-lg border rounded border-light w-auto h-auto p-5 fs-5"> 
                    Slytherin is one of the four houses at Hogwarts School of Witchcraft and Wizardry, 
                    renowned for its emphasis on ambition, cunning, and resourcefulness.
                    Founded by Salazar Slytherin, 
                    this house values pure-blood wizardry and a strong determination to succeed. 
                    Slytherin students are known for their cleverness, strategic thinking, and a strong sense of self-preservation. 
                    The house animal is the serpent, and its colors are green and silver. Slytherin House plays a significant role, 
                    and notable alumni include Severus Snape, Draco Malfoy, and Tom Riddle (Lord Voldemort). 
                    While Slytherin has produced its share of dark wizards, 
                    it also boasts individuals with strong leadership qualities and a relentless pursuit of their goals. 
                    The house stands as a symbol of ambition and cunning in the wizarding world.
                </p>

                <img  src={img2} class="img-fluid shadow-lg w-auto h-auto" alt="..."></img>


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

export default Slytherin;