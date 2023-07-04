import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addProduct } from '../Service/api';
import { useNavigate } from 'react-router-dom';


const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [product, setProduct] = useState(initialValue);
    const { name, username, email, phone } = product;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addProduct(product);
        navigate('/layout');
    }

    return (
        <Container>
            <Typography variant="h4">Add Product Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Product Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Product Discription</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Product Price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add Product</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;