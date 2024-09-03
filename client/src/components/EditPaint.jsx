import { useState, useEffect } from 'react';

import {  FormGroup, FormControl, InputLabel, Input, Button, styled, Typography, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { pUsers, editpUser } from '../Service/api';

const initialValue = {
    name: '',
    email: '',
    phone: '',
    club:'',
    year:'',
    level:''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditPaint = () => {
    const [user, setUser] = useState(initialValue);
    const { name,email, phone,club,year,level} = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await pUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editpUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
           <Typography variant="h4">Dance Audition</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <Typography variant="h6">Which form of drawing are you interested in?</Typography>
            <FormControl>
                <RadioGroup value={form} onChange={onValueChange} name="form">
                    <FormControlLabel value="landscape" control={<Radio />} label="Landscape" />
                    <FormControlLabel value="portrait" control={<Radio />} label="Portrait" />
                    <FormControlLabel value="oil paint" control={<Radio />} label="Oil Painting" />
                </RadioGroup>
            </FormControl>
            <Typography variant="h6">Which year are you in?</Typography>
            <FormControl>
                <RadioGroup value={year} onChange={onValueChange} name="year">
                    <FormControlLabel value="1" control={<Radio />} label="First" />
                    <FormControlLabel value="2" control={<Radio />} label="Second" />
                    <FormControlLabel value="3" control={<Radio />} label="Third" />
                </RadioGroup>
            </FormControl>
            <Typography variant="h6">What level have you reached in dance ?</Typography>
            <FormControl>
                <RadioGroup value={level} onChange={onValueChange} name="level">
                    <FormControlLabel value="junior" control={<Radio />} label="Junior" />
                    <FormControlLabel value="senior" control={<Radio />} label="Senior" />
                    <FormControlLabel value="above senior" control={<Radio />} label="Above Senior " />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditPaint;