import React, { useState } from 'react'
import PostsList from './components/PostsList'
import MainHeader from './components/MainHeader'

const App = () => {
  const [modalVisible,setModalVisible] = useState(false);
  const onCancel=()=>{
    setModalVisible(false)
  }
  const showPosting=()=>{
    setModalVisible(true);
  }
  return (
    <div>
      <MainHeader onCreatePost={showPosting}/>
      <PostsList modalVisible={modalVisible} onCancel={onCancel}/>
    </div>
  )
}

export default App