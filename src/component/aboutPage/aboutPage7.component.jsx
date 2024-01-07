import "bootstrap/dist/css/bootstrap.min.css";

import LinkButton2 from "../linkButton/linkButton2.component";

import 'animate.css'

const Conclusion = () => {
    return (

        <>


        <div class="container">
        <h1 class="animate__animated animate__fadeInDown
                     d-flex justify-content-center fs-1 p-2">Conclusion</h1>

        <div class="align-self-start p-3">

            <LinkButton2 class="p-2" to="/MagicalCreaturesAndEnchantedGrounds" text="Back" />
            <LinkButton2 class="p-2" to="/Schools" text="Schools" />
            

        </div>

        <p class="fst-italic text-white col bg-secondary shadow-lg border rounded border-light w-auto h-auto p-5 fs-5">

            In conclusion, Hogwarts School of Witchcraft and Wizardry is not merely an educational institution; 
            it is a place where dreams are realized, friendships are forged, and the foundations of magical excellence are laid. 
            From the bewitched ceilings of the Great Hall to the halls echoing with the laughter of students, 
            Hogwarts remains an everlasting beacon of magic and wonder. For every young witch or wizard fortunate enough to receive their acceptance letter, 
            Hogwarts becomes a home, a school, and a sanctuary where the bonds of friendship and the magic of learning intertwine to create an unforgettable journey. 
            
         </p>
         

     </div>

     <div class="card position-absolute bottom-0 start-0 w-100">
            <div class="card-header">
                Quote
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>"It takes a great deal of bravery to stand up to our enemies, 
                        but just as much to stand up to our friends."
                    </p>
                    <footer class="blockquote-footer">Albus Dumbledore</footer>
                </blockquote>
            </div>
    </div>

     </>


    );
};

export default Conclusion;