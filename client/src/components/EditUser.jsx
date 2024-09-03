import { useState, useEffect } from 'react';

import {  FormGroup, FormControl, InputLabel, Input, Button, styled, Typography, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const initialValue = {
    name: '',
    usn:'',
    email: '',
    branch:'',
    phone: '',
    year:'',
    event:''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name,usn, email,branch, phone,year,event } = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Details</Typography>
          <Typography variant="h6">Enter your name</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <Typography variant="h6">Enter your USN</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">USN</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='usn' value={usn} id="my-input"/>
            </FormControl>
            <FormControl></FormControl>
            <Typography variant="h6">Enter your emailID</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <Typography variant="h6">Enter your branch name</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Branch</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='branch' value={branch} id="my-input"/>
            </FormControl>
            <Typography variant="h6">Enter your phone number</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            
            <Typography variant="h6">Which year are you in?</Typography>
            <FormControl>
                <RadioGroup value={year} onChange={onValueChange} name="year">
                    <FormControlLabel value="1" control={<Radio />} label="First" />
                    <FormControlLabel value="2" control={<Radio />} label="Second" />
                    <FormControlLabel value="3" control={<Radio />} label="Third" />
                    <FormControlLabel value="4" control={<Radio />} label="Fourth" />
                </RadioGroup>
            </FormControl>
            <Typography variant="h6">What event do you want to register for?</Typography>
            <FormControl>
                <RadioGroup value={event} onChange={onValueChange} name="event">
                    <FormControlLabel value="hackathon" control={<Radio />} label="Hackathon" />
                    <FormControlLabel value="dance audition" control={<Radio />} label="Dance Audition" />
                    <FormControlLabel value="kalasoubha" control={<Radio />} label="Kalasourbha" />
                    <FormControlLabel value="painting exhibition" control={<Radio />} label="Painting Exhibition" />
                </RadioGroup>
            </FormControl>
            
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;