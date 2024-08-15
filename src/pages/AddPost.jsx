import React from 'react';
import { Container, PostForm } from '../components';

function AddPost() {
  return (
    <div className='py-8'>
      <Container className="bg-white p-8 rounded-lg shadow-md">
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
