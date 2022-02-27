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
            alt= 'user' 
          />
        </div>
        <div className='profile__username'>
          <strong>@{username}</strong>   
        </div>    
        <p>{profession}</p>

      </div>
      <div className='profile__cardabout'> 

        <div className='profile__description'>
            <p>{desc}</p>          
            <p><strong>{link}</strong></p>
        </div>
        <div className='profile__folContainer'>

          <div className='profile__fol'>
            <div className='profile__folstats'>
              Followers            
            </div>
            <div className='profile__folstats'>
              {followers}
            </div>                      
          </div>
          <div className='profile__fol'>
            <div className='profile__folstats'>
              Following           
            </div>
            <div className='profile__folstats'>
              {following}
            </div>                                    
          </div>
          <div className='profile__fol'>
            <div className='profile__folstats'>
              Subscribers           
            </div>
            <div className='profile__folstats'>
              {subscribers}
            </div>
          </div> 
          
        </div>
          
        <div className='profile__cardFollowContainer'>
          <button>Follow</button>
        </div>        

        <div className='profile__cardbuttonContainer'>        
          <button>Commission</button>
          <button>Donate</button>
          <button>Subscribe</button>            
        </div>                
                                    
      </div>
        
    </div>  

   

      
  );
}

export default ProfileTop;