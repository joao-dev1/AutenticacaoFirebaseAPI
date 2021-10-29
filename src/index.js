import express from 'express'
import bodyParser from 'body-parser'


import {Auth} from './database/index.js'

import { getAuth, onAuthStateChanged } from "firebase/auth";
const app = express();
const auth = getAuth();

let userLogged;

app.use(bodyParser.json());
//para que ele entenda quando eviar uma requisão com json

app.use(bodyParser.urlencoded({extended:false}))


onAuthStateChanged(auth, (user)=>{
    if(user){
        userLogged = user

    }else{

        userLogged = null

    }
})


app.get('/login', (req, res)=>{


    let getBody = req.body;
    
    
    
    Auth(getBody.email, getBody.password).then((login)=>{
        if(!login.err){
            res.send(login)
        }else{
            res.send(login)
        }
    })

})
app.listen(3000)