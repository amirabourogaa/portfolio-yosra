import React from 'react'
import  { useState } from 'react';
import './contact.css';
import { Button, Container, TextField, Typography } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Nom:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      setName('');
      setEmail('');
      setMessage('');
  };

  return (
    <Container maxWidth="sm">
    <Typography variant="h4" gutterBottom>
        Contactez-nous
    </Typography>
    <form onSubmit={handleSubmit}>
        <TextField 
            label="Nom" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        <TextField 
            label="Email" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <TextField 
            label="Message" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
        />
        <Button type="submit" variant="contained" color="primary">
            Envoyer
        </Button>
    </form>
</Container>
  );
};

export default Contact;