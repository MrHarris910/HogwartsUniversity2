import "bootstrap/dist/css/bootstrap.min.css";

import LinkButton2 from "../linkButton/linkButton2.component";

import 'animate.css'

const MagicalEducation = () => {
    return (

        <>

        <div class="container">
        <h1 class="animate__animated animate__fadeInDown
                     d-flex justify-content-center fs-1 p-2">Magical Education</h1>

        <div class="align-self-start p-3">

            <LinkButton2 class="p-2" to="/FourHousesOneHome" text="Back" />
            <LinkButton2 class="p-2" to="/uidditchAndExtracurriculars" text="Next" />

        </div>

        <p class="fst-italic text-white col bg-secondary shadow-lg border rounded border-light w-auto h-auto p-5 fs-5">

            Hogwarts provides a comprehensive magical education that covers a wide range of subjects.
            From Transfiguration taught by the stern Professor McGonagall to the whimsical charms class with Professor Flitwick,
            students are exposed to a diverse curriculum that includes Potions, Defense Against the Dark Arts, Herbology, and more.
            The professors, many of whom are accomplished witches and wizards in their own right,
            impart knowledge and skills that prepare students for the magical challenges that lie ahead.
            
         </p>
         

     </div>

     <div class="card position-absolute bottom-0 start-0 w-100">
            <div class="card-header">
                Quote
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>
                    "The world isn't split into good people and Death Eaters. 
                    We've all got both light and dark inside us."
                    </p>
                    <footer class="blockquote-footer">Sirius Black</footer>
                </blockquote>
            </div>
    </div>

     </>

    );
};

export default MagicalEducation;