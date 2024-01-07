import LinkButton2 from "../linkButton/linkButton2.component";

import "bootstrap/dist/css/bootstrap.min.css";

import 'animate.css'

const ArchitectualMarvels = () => {
    return (

        <>

        <div class="container">
        <h1 class="animate__animated animate__fadeInDown
                     d-flex justify-content-center fs-1 p-2">Architectual Marvel</h1>

        <div class="align-self-start p-3">

            <LinkButton2 class="p-2" to="/Introduction" text="Back" />
            <LinkButton2 class="p-2" to="/FourHousesOneHome" text="Next" />

        </div>

        <p class="fst-italic text-white col bg-secondary shadow-lg border rounded border-light w-auto h-auto p-5 fs-5">

            Hogwarts is a testament to the magical craftsmanship of the wizarding world.
            The castle itself is a blend of medieval grandeur and enchanted charm, with moving staircases,
            talking portraits, and secret passages that make each corridor an adventure.
            The Sorting Hat, a magical artifact that determines a student's house, welcomes newcomers with its storied song,
            echoing the traditions that bind generations of witches and wizards.
            
         </p>
         

     </div>

     <div class="card position-absolute bottom-0 start-0 w-100">
            <div class="card-header">
                Quote
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>
                        "It does not do to dwell on dreams and forget to live."
                    </p>
                    <footer class="blockquote-footer">Albus Dumbledore</footer>
                </blockquote>
            </div>
    </div>

     </>

    );
};

export default ArchitectualMarvels;