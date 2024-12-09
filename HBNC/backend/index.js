import express from "express";
import mongoose from "mongoose";
import loginRoute from './loginRoute.js'
import cors from 'cors';
import { Tenet } from "./tenetModel.js";
import { Login } from './LoginModel.js'

const app = express();

app.use(express.json());

app.use(cors());

app.post('/', async (request, response) => {
    console.log(request.body);
    const user = await Login.find({})
    console.log(user);
    if(!user){
        response.status(400).send({message: 'user not found'})
    }
    response.send(user)

});

app.get('/Home/Tenets', async (request, response) => {
    console.log(request);
    try {
        const tenet = await Tenet.find({});
        console.log(tenet);
        return response.status(200).json({
            count: tenet.length,
            data: tenet
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

app.use('/login', loginRoute);

mongoose
    .connect('mongodb://127.0.0.1/Login')
    .then(() => {
        console.log('App connected to database');
        app.listen(5555, () => {
            console.log(`App is listening to port: 5555`)
        });
    })
    .catch((error) => {
        console.log(error);
    });                                                                                                                