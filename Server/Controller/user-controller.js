import User from '../model/user.js';

// Get all users
export const getProducts = async (request, response) => {
    try{
        const Products = await Product.find();
        response.status(200).json(Products);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the user in database
export const addProduct = async (request, response) => {
    const product = request.body;
    
    const newProduct = new Product(product);
    try{
        await newProduct.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a user by id
export const getProductById = async (request, response) => {
    try{
        const product = await Product.findById(request.params.id);
        response.status(200).json(product);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editProduct = async (request, response) => {
    let product = request.body;

    const editProduct = new User(product);
    try{
        await Product.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editProduct);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteProduct = async (request, response) => {
    try{
        await Product.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
