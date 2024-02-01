import React, { useState } from 'react'
import Post from './Post'
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';
import { useEffect } from 'react';

const PostsList = ({modalVisible,onCancel,handleSubmit}) => {
    const [posts,setPosts]=useState([]);

    const fetchPosts=async()=>{
      const response = await fetch('http://localhost:8080/posts');
      const data = await response.json();
      setPosts(data.posts);
    
    }


    const addPosts=(postData)=>{
      fetch('http://localhost:8080/posts',{
        method:'POST',
        body: JSON.stringify(postData),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      setPosts((prevPost)=>[postData,...prevPost]);
    }
    
    useEffect(()=>{
      fetchPosts();
    },[]);


  return (
    <>
        {modalVisible && <Modal onClose={onCancel}>
            <NewPost 
            onCancel={onCancel}
            handleSubmit={handleSubmit} addPosts={addPosts}/>
        </Modal>}
        {posts.length>0 ?(<ul className={classes.posts}>
            {
              posts.map((post,index)=>{
                const {author,body} = post
                return <Post author={author} body={body} key={index}/>
              })
            }
        </ul>):(<h2 style={{textAlign:'center',color:'white'}}>No posts available</h2>)}
    </>
  )
}

export default PostsList