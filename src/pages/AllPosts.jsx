import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await appwriteService.getPosts();
                if (response) {
                    setPosts(response.documents);
                }
            } catch (error) {
                setError('Error fetching posts.');
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="w-full py-8 bg-gray-100">
                <Container>
                    <div className="flex justify-center items-center h-64">
                        <span className="text-xl font-medium text-gray-700">Loading posts...</span>
                    </div>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full py-8 bg-gray-100">
                <Container>
                    <div className="flex justify-center items-center h-64">
                        <span className="text-xl font-medium text-red-600">{error}</span>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8 bg-gray-100'>
            <Container>
                {posts.length > 0 ? (
                    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {posts.map((post) => (
                            <div key={post.$id} className='bg-white shadow-md rounded-lg overflow-hidden'>
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='flex justify-center items-center h-64'>
                        <p className='text-gray-600 text-lg font-semibold'>No posts available</p>
                    </div>
                )}
            </Container>
        </div>
    );
}

export default AllPosts;
