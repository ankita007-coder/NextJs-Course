import React from 'react'
import classes from './Post.module.css';

const Post = (props) => {
  return (
   <li className={classes.post}>
    <p className={classes.author}>{props.author}</p>
    <p>{props.body}</p>
   </li>
  )
}

export default Post