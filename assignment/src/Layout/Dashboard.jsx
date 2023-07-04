import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getProducts, deleteProduct, getProductById } from '../Service/api';
import { Link } from 'react-router-dom';
// import io from 'socket.io-client'




const StyledTable = styled(Table)`
    width: 100%;
    justify-contain: 'center'
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 20px
    }
`;

const DashB = () => {
    // const [alerts, setAlerts]= useState([]);
    // useEffect(()=>{
    //     const socket = io('http://localhost:8080');
    //     socket.on('alert' , (newAlert)=>{
    //     })
    //     return ()=>{
    //         socket.disconnect()
    //     }
    //     }, []);

  
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
alert('You want to delete this Product??')   
    await deleteProduct(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getProducts();
        setUsers(response.data);
    }
    const editProductInformation = (id) => {
       alert('You want to Edit the Product Information')
        
    }
    const viewProductDetails = async (id) =>{
        alert("You want to View Product Details?")
        await getProductById(id);
    }
    return (
           <StyledTable>
            <Button variant='contained' component={Link} to={'/add'}>ADD PRODUCT</Button>
            <TableHead>
                <THead>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Product Discription</TableCell>
                    <TableCell>Product Price</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Action</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((product) => (

                    <TRow key={product.id}>
                         {/* change it to product.id to use JSON Server */}
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.username}</TableCell>
                        <TableCell>{product.email}</TableCell>
                        <TableCell>{product.phone}</TableCell>
                        <TableCell>
                            <Button variant='contained' onClick={()=> viewProductDetails()} component={Link} to={`/view/${product._id}`}>View</Button> 
                            <Button color="primary" variant="contained" style={{marginRight:10}} onClick={()=> editProductInformation()} component={Link} to={`/edit/${product._id}`}>Edit</Button> 
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(product._id)}>Delete</Button>
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default DashB;