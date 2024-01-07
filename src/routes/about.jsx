import LinkButton from "../component/linkButton/linkButton.component";

const About = () => {

    return (

        <>

        <div class="container-lg">

            {/* Body */}

            <div class="container text-center">
            
            <div class="column gap-2">
                    <div class="col bg-secondary shadow-lg border border-light p-5"> 

                        <LinkButton to="/Introduction" text="Introduction" />

                    </div>




                    <div class="col bg-secondary shadow-lg border border-light h-25 p-5">

                    <LinkButton to="/ArchitectualMarvels" text="Architectual Marvels" />

                    </div>



                    <div class="col bg-secondary shadow-lg border border-light p-5">

                    <LinkButton to="/FourHousesOneHome" text="Four Houses One Home" />

                    </div>



                    <div class="col bg-secondary border shadow-lg border-light p-5">

                    <LinkButton to="/MagicalEducation" text="Magical Education" />

                    </div>



                    <div class="col bg-secondary shadow-lg border border-light h-25 p-5">

                        <LinkButton to="/uidditch and Extracurriculars" text="uidditch and Extracurriculars" />

                    </div>


                    <div class="col bg-secondary shadow-lg border border-light p-5">

                        <LinkButton to="/MagicalCreaturesAndEnchantedGrounds" text="Magical Creatures and Enchanted Grounds" />


                    </div>
                    <div class="col bg-secondary border shadow-lg border-light p-5">

                        <LinkButton to="/Conclusion" text="Conclusion" />

                    </div>
                
            </div>

            </div>

            {/* Footer */}
          
          
  <blockquote class="blockquote mb-0">
                <p>A well-known quote, contained in a blockquote element.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
                    
        </div>

        </>


    )


}

export default About;