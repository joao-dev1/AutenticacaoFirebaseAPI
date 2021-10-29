

import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId:process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);




export const Auth = (email, password)=>{
 
 
return createUserWithEmailAndPassword(auth, email, password).then((user) =>{
               
            return JSON.stringify(user)
        
        
        }).catch(function(error){


        var errorCode = error.code;
        var errorMessage = error.message;


        if(errorCode == 'auth/weak-password'){
            return{rr:'The password is to weak'}
        }else{
        
        return {err: errorMessage}

        }
        })
    }
    
        




