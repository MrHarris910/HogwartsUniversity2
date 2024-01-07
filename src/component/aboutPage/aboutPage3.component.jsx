import "bootstrap/dist/css/bootstrap.min.css";

import LinkButton2 from "../linkButton/linkButton2.component";

import 'animate.css'

const FourHousesOneHome = () => {
    return (

        <>

        <div class="container">
        <h1 class="animate__animated animate__fadeInDown
                     d-flex justify-content-center fs-1 p-2">Four Houses One Home</h1>

        <div class="align-self-start p-3">

            <LinkButton2 class="p-2" to="/ArchitectualMarvels" text="Back" />
            <LinkButton2 class="p-2" to="/MagicalEducation" text="Next" />

        </div>

        <p class="fst-italic text-white col bg-secondary shadow-lg border rounded border-light w-auto h-auto p-5 fs-5">

            The heart of Hogwarts lies in its unique house system—Gryffindor, Hufflepuff, Ravenclaw, and Slytherin.
            Each house has its own distinctive qualities, fostering a sense of camaraderie and competition among students.
            The Sorting Hat, during the Sorting Ceremony, assigns students to houses based on their personalities and values,
            creating lasting bonds that transcend magical education. The common rooms become second homes,
            and shared dormitories forge friendships that last a lifetime.
            
         </p>
         

     </div>

     <div class="card position-absolute bottom-0 start-0 w-100">
            <div class="card-header">
                Quote
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>
                    "Happiness can be found even in the darkest of times if one only remembers to turn on the light."
                    </p>
                    <footer class="blockquote-footer">Albus Dumbledore</footer>
                </blockquote>
            </div>
    </div>

     </>

    );
};

export default FourHousesOneHome;