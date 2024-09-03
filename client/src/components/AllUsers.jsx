import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../Service/api';
import Header from './Header';
import './black.css'
const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
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
        font-size: 18px;
    }
`;

const StyledButton = styled(Button)`
    margin-right: 10px; /* Add spacing between buttons */
    border-radius: 0; /* Make all buttons have same shape */
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }
    

    const deleteUserHandler = async (id) => {
        try {
            await deleteUser(id);
            getAllUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }

    return (
        <div ><Header />
        <StyledTable>
            <TableHead>
                <THead>
                <TableCell>Name</TableCell>
                <TableCell>Email ID</TableCell>
                    <TableCell>Event Name</TableCell>
                    <TableCell>Actions</TableCell> {/* Added Actions column */}
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user._id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.event}</TableCell>
                        <TableCell>
                            {/* Edit button */}
                            <StyledButton variant="contained" color="primary" component={Link} to={`/read/${user._id}`}>Read</StyledButton>
                            <StyledButton color="primary" variant="contained"  component={Link} to={`/edit/${user._id}`}>Edit</StyledButton>
                            {/* Delete button */}
                            <StyledButton color="secondary" variant="contained" onClick={() => deleteUserHandler(user._id)}>Delete</StyledButton>
                        </TableCell>
                    </TRow>
                ))}
                
            </TableBody>
        </StyledTable></div>
    )
}

export default AllUsers;
