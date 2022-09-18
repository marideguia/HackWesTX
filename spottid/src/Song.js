import React from 'react'
import './Songs.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function Song({album}) {
    return (
        <div className="Song "> 
           <img src={album} alt="" />
        <div className="Song__Overlay">
            <div className="Album">
                <MusicNoteIcon/>
            </div>
        </div>
        </div>

        
    )
}

export default Song
