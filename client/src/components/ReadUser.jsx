import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUsers } from '../Service/api';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const styles = {
    container: {
        width: '80%',
        margin: '5% auto'
    }
};

    const ReadUser = () => {
        const [user, setUser] = useState({});
        const { id } = useParams();
    
        useEffect(() => {
            const fetchUser = async () => {
                try {
                    const response = await getUsers(id);
                    console.log('Fetched user details:', response.data);
                    const userData = response.data[0]; // Accessing the first element of the array
                    setUser(userData);
                } catch (error) {
                    console.log('Error fetching user details:', error);
                }
            };
            fetchUser();
        }, [id]);

    // Render the user details conditionally
    return (
        <div style={styles.container}>
            <Typography variant="h4">Registration Details</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>{user.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>USN</TableCell>
                            <TableCell>{user.usn}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>{user.email}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phone</TableCell>
                            <TableCell>{user.phone}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Branch</TableCell>
                            <TableCell>{user.branch}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Year of Study</TableCell>
                            <TableCell>{user.year}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Event</TableCell>
                            <TableCell>{user.event}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
      
        </div>
    );
};

export default ReadUser;
