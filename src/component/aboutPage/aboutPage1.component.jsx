import LinkButton2 from "../linkButton/linkButton2.component";

import "bootstrap/dist/css/bootstrap.min.css";

import 'animate.css'

const Introduction = () => {
    return (
        <>
        <div class="container">
        <h1 class="animate__animated animate__fadeInDown
                     d-flex justify-content-center fs-1 p-2">Introduction</h1>

        <div class=" align-items-start p-3">

            <LinkButton2 class="p-2" to="/About" text="Back" />
            <LinkButton2 class="p-2" to="/ArchitectualMarvels" text="Next" />

        </div>

         <p class="fst-italic text-white col bg-secondary shadow-lg border rounded border-light w-auto h-auto p-5 fs-5">

            Hogwarts School of Witchcraft and Wizardry stands as an enduring symbol of magic and education in the wizarding world.
            Nestled in the Scottish Highlands, Hogwarts has been the premier institution for magical learning for centuries.
            With its towering turrets, enchanted grounds, and rich history,
            Hogwarts is not just a school; it is a place where young witches and wizards embark on a journey of self-discovery,
            friendship, and the mastery of magical arts.
            
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

export default Introduction;