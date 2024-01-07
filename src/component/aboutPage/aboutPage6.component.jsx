import "bootstrap/dist/css/bootstrap.min.css";

import LinkButton2 from "../linkButton/linkButton2.component";

import 'animate.css'

const MagicalCreaturesAndEnchantedGrounds = () => {
    return (

        <>


        <div class="container">
        <h1 class="animate__animated animate__fadeInDown
                     d-flex justify-content-center fs-1 p-2">Magical Creatures and Enchanted Grounds</h1>

        <div class="align-self-start p-3">

            <LinkButton2 class="p-2" to="/uidditchAndExtracurriculars" text="Back" />
            <LinkButton2 class="p-2" to="/Conclusion" text="Next" />

        </div>

        <p class="fst-italic text-white col bg-secondary shadow-lg border rounded border-light w-auto h-auto p-5 fs-5">

            The magical creatures residing within Hogwarts, from the gentle Hippogriffs to the mischievous house-elves, contribute to the unique learning environment.
            Care of Magical Creatures classes and encounters with these creatures instill in students a respect for the magical world around them. The Forbidden Forest,
            though off-limits to students, adds an air of mystery and adventure to the school grounds.
            
         </p>
         

     </div>

     <div class="card position-absolute bottom-0 start-0 w-100">
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

export default MagicalCreaturesAndEnchantedGrounds;