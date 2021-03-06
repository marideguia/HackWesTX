import React from 'react';
import './Post.css';
import PostContentText from './PostContentText';
import PostContentImage from './PostContentImage';
import defavatar from '../img/defavatar.jpg';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Like from '@material-ui/icons/Favorite';
import Comment from '@material-ui/icons/CommentRounded';
import Reshare from '@material-ui/icons/Share';
import Close from '@material-ui/icons/CloseRounded';
import { Link } from 'react-router-dom';

function Post() {
  return (
    <div className="post">
      <div className="post__close">
        <Link to="/"><Close /></Link>
      </div>
      <PostContentImage />
      <div className="post__thread">
        <div className="post__caption">
          <div className="post__avatarspace">
            <img className="post__avatar" src={defavatar} alt="Avatar" />
          </div>

          <div className="post__commentspace">
            <div className="post__userbar">
              <strong>poster</strong>
              <MoreHoriz />
            </div>
            caption
          </div>
        </div>
        <div className="post__interacts">
          <div className="post__interactcounter"><Like /><strong>5</strong></div>
          <div className="post__interactcounter"><Comment /><strong>5</strong></div>
          <div className="post__interactcounter"><Reshare /><strong>5</strong></div>
        </div>
        <div className="post__comment">
          <div className="post__avatarspace">
            <img className="post__avatar" src={defavatar} alt="Avatar" />
          </div>
          <div className="post__commentspace">
            <div className="post__userbar">
              <strong>commenter</strong>
              <MoreHoriz />
            </div>
            comment
          </div>
        </div>
        <div className="post__comment">
          <div className="post__avatarspace">
            <img className="post__avatar" src={defavatar} alt="Avatar" />
          </div>
          <div className="post__commentspace">
            <div className="post__userbar">
              <strong>another commenter</strong>
              <MoreHoriz />
            </div>
            another comment
          </div>
        </div>
        <div className="post__comment">
          <input className="post__addcomment" type="text" placeholder="type your comment here..."></input>
        </div>
      </div>
    </div>
  )
}

export default Post;