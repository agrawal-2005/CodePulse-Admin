import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts = await appwriteService.getPost([])
                if (fetchedPosts) {
                    setPosts(fetchedPosts.documents)
                }
            } catch (error) {
                console.error("Error fetching posts:", error)
            }
        }

        fetchPosts()
    }, [])

    return (
        <div className='w-full py-8 bg-gray-100'>
            <Container>
                <div className='flex flex-wrap -mx-2'>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                                <PostCard post={post} />
                            </div>
                        ))
                    ) : (
                        <div className='w-full text-center py-4'>
                            <p className='text-gray-600'>No posts available</p>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
