import React from 'react'
import './Videos.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

function Videos({Thumbnail}) {
    return (
        <div className="Videos">
            <img src={Thumbnail} alt=""/>
            <div className="Videos__Overlay">
                <div className="PlayButton">
                    <PlayCircleFilledIcon/>
                </div>

            </div>
        </div>
    )
}

export default Videos
