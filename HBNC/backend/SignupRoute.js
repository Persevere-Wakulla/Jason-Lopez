

import express from "express";
import { Login } from "./LoginModel.js";
const router = express.Router();

// Route for new user
router.post('/', async (request, response) => {
    console.log('post');
    try {
        if (
            !request.body.name ||
            !request.body.password ||
            !request.body.email
        ) {
            return response.status(400).send({
                message: 'Send all requred fields: name, password, email',
            });
        }
        const newLogin = {
            name: request.body.name,
            password: request.body.password,
            email: request.body.email,
        };
        const login = await Login.create(newLogin);

        return response.status(201).send(login);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});



// Route for get one login from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        
        const login = await Login.findById(id);
        console.log(login)

        return response.status(200).json(login);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to update a login
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.password ||
            !request.body.email
        ) {
            return response.status(400).send({
                message: 'Send all required feilds: name, password, email',
            });
        }

        const { id } = request.params;

        const result = await Login.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Login not found' });
        }

        return response.status(200).send({ message: 'Login updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for delete book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Login.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({ message: 'User not found' });
        }
       
        return response.status(200).send({ message: 'User deleted successfully' });
    
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;