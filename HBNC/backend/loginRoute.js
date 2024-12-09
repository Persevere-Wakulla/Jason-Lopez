import express from "express";
import { Login } from "./LoginModel.js";
const router = express.Router();

// Route for save a new book
router.post('/', async (request, response) => {
    console.log(request.body);
    try {
        if (
            !request.body.name ||
            !request.body.password ||
            !request.body.email ||
            !request.body.city ||
            !request.body.state ||
            !request.body.zip ||
            !request.body.tribe
        ) {
            return response.status(400).send({
                message: 'Send all requred fields: name, password, email',
            });
        }
        const newLogin = {
            name: request.body.name,
            password: request.body.password,
            email: request.body.email,
            city: request.body.city,
            state: request.body.state,
            zip: request.body.zip,
            tribe: request.body.tribe
        };
        const login = await Login.create(newLogin);

        return response.status(201).send(login);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for get all users
router.get('/', async (request, response) => {
    try {
        const login = await Login.find({});
console.log(login);
        return response.status(200).json({
            count: login.length,
            data: login
        });
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
            !request.body.email ||
            !request.body.city ||
            !request.body.state ||
            !request.body.zip ||
            !request.body.tribe
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
            return response.status(404).json({ message: 'Book not found' });
        }
       
        return response.status(200).send({ message: 'Book deleted successfully' });
    
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;