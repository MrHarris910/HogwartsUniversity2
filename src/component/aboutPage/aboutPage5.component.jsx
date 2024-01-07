import "bootstrap/dist/css/bootstrap.min.css";

import LinkButton2 from "../linkButton/linkButton2.component";

import 'animate.css'

const UidditchAndExtracurriculars = () => {
    return (

        <>
        

        <div class="container">
        <h1 class="animate__animated animate__fadeInDown
                     d-flex justify-content-center fs-1 p-2">uidditch and Extracurriculars</h1>

        <div class="align-self-start p-3">

            <LinkButton2 class="p-2" to="/MagicalEducation" text="Back" />
            <LinkButton2 class="p-2" to="/MagicalCreaturesAndEnchantedGrounds" text="Next" />

        </div>

        <p class="fst-italic text-white col bg-secondary shadow-lg border rounded border-light w-auto h-auto p-5 fs-5">

            Hogwarts promotes a well-rounded education by offering extracurricular activities. The wizarding sport of Quidditch,
            played on flying broomsticks, is a favorite among students. The Quidditch Cup, held annually, creates a sense of house pride and friendly competition.
            Additionally, clubs like the Dueling Club and the Dumbledore's Army provide avenues for students to hone their magical skills outside the classroom.
            
         </p>
         

     </div>

     <div class="card position-absolute bottom-0 start-0 w-100">
            <div class="card-header">
                Quote
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>
                    "It takes a great deal of bravery to stand up to our enemies, 
                    but just as much to stand up to our friends."
                    </p>
                    <footer class="blockquote-footer">Albus Dumbledore</footer>
                </blockquote>
            </div>
    </div>

     </>


    );
};

export default UidditchAndExtracurriculars;