import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await appwriteService.getPosts();
                if (response) {
                    setPosts(response.documents);
                }
            } catch (err) {
                console.error('Error fetching posts:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="w-full py-8 text-center bg-gray-50">
                <Container>
                    <div className="flex justify-center items-center h-64">
                        <span className="text-xl font-medium text-gray-700">Loading posts...</span>
                    </div>
                </Container>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center bg-gray-50">
                <Container>
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-semibold text-gray-500 mb-4">No posts available</h1>
                        <p className="text-gray-400">Login to read posts or check back later.</p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8 bg-gray-200">
            <Container>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {posts.map((post) => (
                        <div key={post.$id} className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
