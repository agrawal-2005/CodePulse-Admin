import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                if (slug) {
                    const fetchedPost = await appwriteService.getPost(slug);
                    if (fetchedPost) {
                        setPost(fetchedPost);
                    } else {
                        navigate('/');
                    }
                } else {
                    navigate('/');
                }
            } catch (err) {
                setError('Error fetching post');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug, navigate]);

    if (loading) {
        return <div className='text-center py-8'>Loading...</div>;
    }

    if (error) {
        return <div className='text-center py-8 text-red-600'>{error}</div>;
    }

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : (
        <div className='text-center py-8'>Post not found.</div>
    );
}

export default EditPost;
