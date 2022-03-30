import { Avatar } from '@material-ui/core'
import React from 'react'
import "./MessageSender.css"

import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibruaryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"

function MessageSender() {

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

  return (
    <div className='messageSender'>
        <div className='messageSender__top'>
            <Avatar />
            <form>
                <input className='messageSender__input' placeholder={`What's on your mind?`} />
                <input className='' placeholder='image URL (Optional)' />

                <button onClick={handleSubmit} type="submit">
                    Hidden Submit
                </button>
            </form>
        </div>

        <div className='messageSender__bottom'>
            <div className='messageSender__option'>
                <VideocamIcon style={{color: 'red'}} />
                <h3>Live video</h3>
            </div>

            <div className='messageSender__option'>
                <PhotoLibruaryIcon style={{color: 'green'}} />
                <h3>Photo/video</h3>
            </div>

            <div className='messageSender__option'>
                <InsertEmoticonIcon style={{color: 'orange'}} />
                <h3>Feeling/Activities</h3>
            </div>

        </div>
        
    </div>
  )
}

export default MessageSender