import React from "react";
import "./User_Profile.css";
import Image from "./Image";
import Song from "./Song";
import Video from "./Videos"
import ProfileTop from "./ProfileTop";

function User_Profile() {
  return (
    <div className="User_Profile">
      <div className='User_Profile__Container'>
        <ProfileTop 
          icon="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
          username ='karena117'
          profession='Author'
          desc = "Hi! My name's Carina and I'm an aspiring author. I've written books like 'West Texas Sunsets' and 'Pink Fuji.' Check me out below! COMMISSIONS ARE OPEN ✨"
          link='www.CarinaW.com'
          followers = '1000'
          following = '200'
          subscribers = '15'
        />
      
      <div className="row">

        <div className="column">
          <Image
            image="https://mymodernmet.com/wp/wp-content/uploads/2020/01/enrique-bernal-florescent-drawings-1.jpg"
          />
          <Video
            Thumbnail="https://i.pinimg.com/originals/10/7a/c9/107ac9bce43e9b97ea66464977ca0d77.gif"
            />
          <Song
            album="https://m.media-amazon.com/images/I/81pf4NjVhfL._SX522_.jpg"
            />
          <Image
            image="https://pbs.twimg.com/media/FEZoU8LXIAcyKEM.jpg"
          />
          <Image
            image="https://mymodernmet.com/wp/wp-content/uploads/2020/01/enrique-bernal-florescent-drawings-1.jpg"
          />
          <Video
            Thumbnail="https://i.pinimg.com/originals/10/7a/c9/107ac9bce43e9b97ea66464977ca0d77.gif"
            />
          <Song
            album="https://m.media-amazon.com/images/I/81pf4NjVhfL._SX522_.jpg"
            />
        </div>

        <div className="column">
         <Video
            Thumbnail="https://i.gifer.com/60q3.gif"
            />
          <Song
            album="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/n1spfyib0hwmvx7xvu75/silk-sonic?fimg-ssr-default"
          />
          <Image
            image="https://mymodernmet.com/wp/wp-content/uploads/2020/01/enrique-bernal-florescent-drawings-01.jpg"
          />
          <Song
            album="https://m.media-amazon.com/images/I/81pf4NjVhfL._SX522_.jpg"
          />
          <Video
            Thumbnail="https://i.gifer.com/60q3.gif"
            />
          <Song
            album="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/n1spfyib0hwmvx7xvu75/silk-sonic?fimg-ssr-default"
          />
          <Image
            image="https://mymodernmet.com/wp/wp-content/uploads/2020/01/enrique-bernal-florescent-drawings-01.jpg"
          />

        </div>
        <div className="column">
          <Image
            image="https://mymodernmet.com/wp/wp-content/uploads/2020/01/enrique-bernal-florescent-drawings-1.jpg"
          />
          <Song
            album="https://m.media-amazon.com/images/I/81pf4NjVhfL._SX522_.jpg"
          />
          <Video
            Thumbnail="https://thumbs.gfycat.com/BowedHalfKronosaurus-size_restricted.gif"
            />
            <Image
            image="https://mymodernmet.com/wp/wp-content/uploads/2020/01/enrique-bernal-florescent-drawings-1.jpg"
          />
          <Image
            image="https://mymodernmet.com/wp/wp-content/uploads/2020/01/enrique-bernal-florescent-drawings-1.jpg"
          />
          <Song
            album="https://m.media-amazon.com/images/I/81pf4NjVhfL._SX522_.jpg"
          />
          <Video
            Thumbnail="https://thumbs.gfycat.com/BowedHalfKronosaurus-size_restricted.gif"
            />
        </div>
        <div className="column">
         <Video
            Thumbnail="https://i.gifer.com/60q3.gif"
            />
          <Song
            album="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/n1spfyib0hwmvx7xvu75/silk-sonic?fimg-ssr-default"
          />
          <Image
            image="https://mymodernmet.com/wp/wp-content/uploads/2020/01/enrique-bernal-florescent-drawings-01.jpg"
          />
          <Song
            album="https://m.media-amazon.com/images/I/81pf4NjVhfL._SX522_.jpg"
          />
          <Video
            Thumbnail="https://i.gifer.com/60q3.gif"
            />
          <Song
            album="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/n1spfyib0hwmvx7xvu75/silk-sonic?fimg-ssr-default"
          />
          <Image
            image="https://mymodernmet.com/wp/wp-content/uploads/2020/01/enrique-bernal-florescent-drawings-01.jpg"
          />

        </div>
        
        </div>
      </div>
    </div>
    
  );
}

export default User_Profile;