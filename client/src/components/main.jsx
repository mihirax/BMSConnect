import React, { useState } from 'react';
import { 
    FormGroup, 
    FormControl, 
    InputLabel, 
    Input, 
    Button, 
    styled, 
    Typography, 
    FormControlLabel, 
    Radio, 
    RadioGroup 
} from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    usn: '',
    email: '',
    branch: '',
    phone: '',
    year: '',
    event: ''
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto;
    padding: 20px;
    background-image: url('./assets/adduser.jpeg');
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
        border-radius: 10px;
    }
`;



const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name,usn, email,branch, phone,year,event } = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Registration Details</Typography>
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
                <Button variant="contained" color="primary" onClick={addUserDetails}>Register</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;
