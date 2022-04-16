import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />

        <Post
        profilePic='https://oir.mobi/uploads/posts/2021-04/1617603245_53-p-devushka-v-profil-54.jpg'
        message='Wow that works'
        timestamp='This is a timestamp'
        username='sssanga'
        image='https://fainaidea.com/wp-content/uploads/2019/06/acastro_190322_1777_apple_streaming_0003.0.jpg'
        />
        <Post />
        <Post />

    </div>
  )
}

export default Feed