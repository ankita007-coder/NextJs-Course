import React, { useState } from 'react'
import classes from './NewPost.module.css';

const NewPost = ({onCancel,addPosts}) => {
  const [enteredBody,setEnteredState] = useState('');
    
  const [author,setAuthor] = useState('');
  const changeBodyHandler=(e)=>{
    setEnteredState(e.target.value);
  }
  const changeAuthorHandler=(e)=>{
      setAuthor(e.target.value);
    }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const postData={
      body: enteredBody,
      author: author
    }
    console.log(postData)
    addPosts(postData);
    onCancel();
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
        <p>
            <label htmlFor="body" className={classes.formLabel}>Text</label>
            <textarea id="body" 
                        rows={3} 
                        required 
                        onChange={changeBodyHandler}                      
                />
        </p>
        <p>
            <label htmlFor="author" >
                Your name
            </label>
            <input type="text" name="author" id="author" 
            required onChange={changeAuthorHandler}/>
        </p>
        <p className={classes.actions}>
          <button type='button' onClick={onCancel}>Cancel</button>
          <button>Submit</button>
        </p>
    </form>
  )
}

export default NewPost