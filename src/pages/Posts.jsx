import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPostWithAuthors } from '../features/posts/PostsSlice';
import { fetchUsers } from '../features/users/UsersSlice';


const Posts = () => {
    //const {data, loading: todoLoading, error: todoError} = useGetTodosQuery();
    //onsole.log(data)


    const posts = useSelector(selectPostWithAuthors);
    const {loading, error, data} = posts
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
        dispatch(fetchUsers());
    }, [])

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>{error}</h1>

    return (
        <div>
            <h1 className='text-3xl'>Posts</h1>
            {data.map(post => <div key={post.id}>
                <div className='text-2xl'>{post.title}</div>
                <div className='text-2xl'>{post.userId}</div>
                <div>{post.body}</div>
                </div>)}
        </div>
    );
}

export default Posts;

