import React from 'react';

import 'firebase/database';

import 'firebase/auth'

import EmailSubscriptionForm from '../email-subscription-form/emailSubscriptionForm.jcomponent';

import { signInWithGooglePopup }
     from '../../utils/firebase/firebase.utils'

const SignUp = () => {   
    const LogGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    };
     return (

        <>


            <div class="container-sm">100% wide until small breakpoint

            <div class="container text-center">

                
                <div class="row">
                    <div class="col">

                    <form>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <EmailSubscriptionForm />
                        </div>
                    </div>
                   
                    <div class="row mb-3">
                        <div class="col-sm-10 offset-sm-2">
                        </div>
                    </div>

                    <div>
                        <button onClick={LogGoogleUser} type="submit" class="btn btn-primary">Sign in With Google Popup</button>
                    </div>

                </form>



                    </div>
                    <div class="col">
                        Column
                    </div>
                </div>
            </div>

            </div>

        </>
        
    )
};
 export default SignUp