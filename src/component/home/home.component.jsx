import "bootstrap/dist/css/bootstrap.min.css";

import 'animate.css'

import img1 from '../../image/kitera-dent-z4ky2zXIjDM-unsplash.jpg'




const Home = () => {

    return (   
        
       <>
       <div class="p-3 mb-2 bg-body-secondary text-emphasis-dark">

            <div class="animate__animated animate__fadeInDown
                        d-flex justify-content-center fs-1 p-2">
                WELCOME TO HOGWARTS UNIVERSITY !
            </div>
                

            <div className="body">

                <div>

                <div class="container shadow-lg" className="home-container">
                    

                    <div class="container text-center shadow-lg">
                        <img src="" alt=""></img>
                        <div class="row">
                            <div class="col fs-3">
                                VIRTUAL TOUR
                                <h1 class="fs-4 animate__animated animate__fadeInDown">Welcome, You Wizard gizzards!</h1>
                                <p class="fs-5">
                                    Journey through Hogwarts University, 
                                    our Virtual Tour inclues Schools, 
                                    Meet our professors, and more! 
                                </p>
                            </div>

                            <div class="col fs-3">
                                WHAT'S NEW
                                <h1 class="fs-4 animate__animated animate__fadeInDown">Flying Cars Only!</h1>
                                <p class="fs-5">
                                    Due to safety concerns, we've installed a parking-lot 
                                    on campus. Students are no longer permitted to fly 
                                    their personal broomsticks to class.
                                </p>
                            </div>

                            <div class="col fs-3">
                                SIGN-UP
                                <h1 class="fs-4 animate__animated animate__fadeInDown">Hogwarts Awaits!</h1> 
                                <p class="fs-5">
                                    Sign-up today and Start 
                                    your Journey into the amazing world of Hogwarts.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div  className="" class="container-fluid">
                    <img src={img1} class="img-fluid" alt="..."></img>

                    </div>

                

                
                </div>

                </div>

               



            </div>

            
        </div>

            <div class="card">
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

export default Home;