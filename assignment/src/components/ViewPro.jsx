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
    // const { name, username, email, phone } = product;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const addProductDetails = async() => {
        await addProduct(product);
        navigate('/layout');
    }

    return (
        <Container>
            <Typography variant="h4">View Product Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Product Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={product.name} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Product Discription</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={product.username}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Product Price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={product.email}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={product.phone}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addProductDetails()}>OK</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;