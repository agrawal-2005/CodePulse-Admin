import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((fetchedPost) => {
                if (fetchedPost) setPost(fetchedPost);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8 bg-gray-100 min-h-screen">
            <Container>
                <div className="relative mb-8 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="w-full h-64 object-cover"
                    />
                    
                    {isAuthor && (
                        <div className="absolute top-4 right-4 flex space-x-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button 
                                    bgColor="bg-green-600 hover:bg-green-700" 
                                    className="text-white"
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button 
                                bgColor="bg-red-600 hover:bg-red-700" 
                                onClick={deletePost} 
                                className="text-white"
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900">{post.title}</h1>
                </div>
                <div className="prose lg:prose-xl mx-auto">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : (
        <div className="py-8 flex justify-center items-center min-h-screen bg-gray-100">
            <p className="text-gray-600 text-xl">Loading...</p>
        </div>
    );
}
