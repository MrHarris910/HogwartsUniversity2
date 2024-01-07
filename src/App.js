import React from "react";



import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter,createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom'

import Home from "./component/home/home.component";

import SignIn from "./component/subscribe/subscribe.component";

import About from "./routes/about";

import Schools from "./routes/schools";

import Gryffindor from "./component/schools/gryffindor.component";

import Hufflepuff from "./component/schools/hufflepuff.component";

import Ravenclaw from "./component/schools/ravenclaw.component";

import Slytherin from "./component/schools/slytherin.component";

import LinkButton2 from "./component/linkButton/linkButton2.component";

import  Introduction from './component/aboutPage/aboutPage1.component' 
import ArchitectualMarvels from './component/aboutPage/aboutPage2.component' 
import FourHousesOneHome from './component/aboutPage/aboutPage3.component'  
import MagicalEducation from './component/aboutPage/aboutPage4.component' 
import UidditchAndExtracurriculars from './component/aboutPage/aboutPage5.component' 
import MagicalCreaturesAndEnchantedGrounds from './component/aboutPage/aboutPage6.component' 
import Conclusion from './component/aboutPage/aboutPage7.component'
   

export function App(props) {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
          <Route path='Home' index element={<Home />} />
          <Route path='signIn' element={<SignIn />} />
          <Route path='About' element={<About />} />
          <Route path='Schools' element={<Schools />} />    
          <Route path='Slytherin' element={<Slytherin />} />
          <Route path='Ravenclaw' element={<Ravenclaw />} />
          <Route path='Hufflepuff' element={<Hufflepuff />} />
          <Route path='Gryffindor' element={<Gryffindor />} />
          <Route path='Introduction' element={<Introduction />} />
          <Route path='ArchitectualMarvels' element={<ArchitectualMarvels />} />
          <Route path='FourHousesOneHome' element={<FourHousesOneHome />} />
          <Route path='MagicalEducation' element={<MagicalEducation />} />
          <Route path='UidditchAndExtracurriculars' element={<UidditchAndExtracurriculars />} />
          <Route path='MagicalCreaturesAndEnchantedGrounds' element={<MagicalCreaturesAndEnchantedGrounds />} />
          <Route path='Conclusion' element={<Conclusion />} />
        

        </Route>
    )
    

  )


  return (

    <div className="App">

      <RouterProvider router={router}/>

     </div> 
  );
}

  const Root = () => {

    return (

      <>

        <header className="App-header">


        <nav class="navbar 
                    shadow-sm
                    navbar-expand-lg 
                    bg-body-tertiary">

          <div class="container-fluid">
            <a class="navbar-brand" href="/Home">Hogwarts</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">

                <li class="nav-item">
                  <a class="nav-link active d-inline-flex" aria-current="page" href="#">
                  <LinkButton2 to="/Home" text="Home" />
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link d-inline-flex" href="#">
                  <LinkButton2 to="/About" text="About" />
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link d-inline-flex" href="#">
                  <LinkButton2 to="Schools" text="Schools" />
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link nav-link d-inline-flex" href="#">
                  <LinkButton2 to="/SignIn" text="Sign In" />
                  </a>
                </li>

              </ul>
             
            </div>
          </div>
        </nav>
        </header>

        <div class="p-3 mb-2 bg-secondary text-white"></div>
        <div>
          <Outlet />
        </div>
        

      
      </>
    )


  }


  export default App;
