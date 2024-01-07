import img3 from '../../image/joshua-newton-7qjqQjt7zXQ-unsplash.jpg'

import LinkButton2 from '../linkButton/linkButton2.component';

import 'animate.css'

const Hufflepuff = () => {
    return (

        <>

        <div class="container">
            <h1 class="animate__animated animate__fadeInDown d-flex justify-content-center fs-1 p-2">Hufflepuff</h1>

            <div class="container d-grid">



                <div class="align-self-start p-3">

                        <LinkButton2 to="/Schools" text="Back" />

                </div>

                <p class="fst-italic text-white col bg-secondary shadow-lg border rounded border-light w-auto h-auto p-5 fs-5">
                    Hufflepuff is one of the four houses at Hogwarts School of Witchcraft and Wizardry, 
                    embodying values such as hard work, dedication, loyalty, and fair play.
                    Founded by Helga Hufflepuff, 
                    this house is known for its inclusivity and acceptance of students from all backgrounds. 
                    Hufflepuff students are characterized by their strong sense of community, kindness, and a willingness to lend a helping hand. 
                    The house animal is the badger, and its colors are yellow and black. The Hufflepuff common room is situated near the Hogwarts kitchens, 
                    emphasizing the house's connection to earthy elements. Hufflepuff House is often overlooked 
                    but proves to be a source of steadfast support and genuine friendship. 
                    Notable Hufflepuff alumni include Cedric Diggory and Nymphadora Tonks. 
                    Hufflepuff represents the values of fairness and hard work in the magical world.
                </p>

                <img src={img3} class="img-fluid shadow-lg w-auto h-auto" alt="..."></img>

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

export default Hufflepuff;