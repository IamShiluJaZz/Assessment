import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';


const FormBlog = () => {
    const [blog, setBlog] = useState({
        name: '',
        description: '',
        author: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog({ ...blog, [name]: value });
      };
    
      const submitbox = (e) => {
        e.preventDefault();
        console.log('New Blog:', blog);
    
        
        axios.post('https://jsonplaceholder.typicode.com/posts', blog)
          .then(response => {
            console.log('Blog added successfully:', response.data);
            
            
          })
          .catch(error => {
            console.error('Error adding blog:', error);
          });
    
        
        setBlog({ name: '', description: '', author: '' });
      };
    
  return (
  
    <Container>
    <Typography variant="h4" component="div" sx={{ margin: '20px 0' }}>
      Blog Form
    </Typography>
    <Box component="form" onSubmit={submitbox} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Blog Name"
        name="name"
        value={blog.name}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        multiline
        rows={4}
        label="Description"
        name="description"
        value={blog.description}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Author Name"
        name="author"
        value={blog.author}
        onChange={handleChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Add
      </Button>
    </Box>
  </Container>
  )
}

export default FormBlog