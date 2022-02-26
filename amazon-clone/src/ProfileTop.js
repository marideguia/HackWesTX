import React from "react";
import "./ProfileTop.css";

function ProfileTop({ icon, username, profession, desc, link, followers, following, subscribers}) {
 
  return (
    <div className="profileTop">
      <div className="profile__card">

        <div className="profile__cardicon">
            <img 
                src={icon} 
                alt= 'profile icon image' />
            <p className='profile__username'>
                @{username}
            </p>
            <p className='profile__profession'>
                {profession}
            </p>
        </div>        

        <div className='profile__cardabout'>
            <p className='profile__description'>
                {desc}
             </p>
             <p>
                {link}
             </p>
        </div>
        <div className='profile__cardbutton'>
          <button>Commission</button>
          <button>Subscribe</button>
          <button>Donate</button>
        </div>
        
            <p className='profile__fol'>
                <span>{followers}</span>
                <span>{following}</span>
                <span>{subscribers}</span>
                
            </p>
             

      </div> {/*end profile__info div */}

      
    </div>
  );
}

export default ProfileTop;