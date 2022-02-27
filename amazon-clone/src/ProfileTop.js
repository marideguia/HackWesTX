import React from "react";
import "./ProfileTop.css";

function ProfileTop({ icon, username, profession, desc, link, followers, following, subscribers}) {
 
  return (
    <div className="profileTop">
      <div className="profile__cardheader">
        <div className='profile__imagecrop'>
          <img 
            src={icon}
            class='rounded' 
            alt= 'profile icon image' 
          />
          <p>
            <strong>@{username}</strong>              
          </p>
          <p>
              {profession}
          </p>
        </div>
          
      </div>        

      <div className='profile__cardabout'>          

        <div className='profile__description'>
            <p>{desc}</p>          
            <p><strong>{link}</strong></p>
        </div>  
          
        <div className='profile__cardbuttonContainer'>
          <button>Follow</button>
        </div>        

        <div className='profile__cardbuttonContainer'>        
          <button>Commission</button>
          <button>Donate</button>
          <button>Subscribe</button>            
        </div>

        <div className='profile__fol'>
          <div className='profile__folstats'>
            Followers
            <p>{followers}</p>
          </div>
          

          <div className='profile__folstats'>
            Following
            <p>{following}</p>
          </div>

          <div className='profile__folstats'>
            Subscribers
            <p>{subscribers}</p>
          </div>                           
        </div>
      </div>       
           
             

   </div>

      
  );
}

export default ProfileTop;