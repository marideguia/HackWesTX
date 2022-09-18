import React from "react";
import "./User_Profile.css";
import Image from "./Image";
import Song from "./Song";
import Video from "./Videos"
import ProfileTop from "./ProfileTop";

function User_Profile() {
  return (
    <div className="User_Profile">
      <div className='User_Profile__Container1'>
        <ProfileTop 
          icon="https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg?w=400&"
          username ='karena117'
          profession='Filmmaker'
          desc = "Hi! My name's Carina and I'm an author and film-maker. I've directed short films like 'West Texas Sunsets,' and I just published my novel 'Pink Fuji.' Check me out below! Writing commissions are open ✨"
          link='www.CarinaW.com'
          followers = '1039'
          following = '227'
          subscribers = '115'
        />     
    </div>
    <div className='User_Profile__Container2'>
        <div className="row">

        <div className="column">
          <Image
            image="https://mymodernmet.com/wp/wp-content/uploads/2020/01/enrique-bernal-florescent-drawings-1.jpg"
          />
          <Video
            Thumbnail="https://pbs.twimg.com/media/FEZoU8LXIAcyKEM.jpg"
            />
          <Song
            album="https://m.media-amazon.com/images/I/81pf4NjVhfL._SX522_.jpg"
            />
          <Image
            image="https://pbs.twimg.com/media/FEZoU8LXIAcyKEM.jpg"
          />
          <Image
            image="https://cdn.shopify.com/s/files/1/1032/8883/products/Liana-desat_5456-sfw_1600x.jpg?v=1615149371"
          />
          <Video
            Thumbnail="https://i.gifer.com/WNUK.gif"
            />
          <Song
            album="https://m.media-amazon.com/images/I/81pf4NjVhfL._SX522_.jpg"
            />
        </div>

        <div className="column">
        <Video
            Thumbnail="https://31.media.tumblr.com/b132cac2fbe7b66201939f5fa280d2db/tumblr_mlzia8GcJi1so6rvio1_500.gif"
            />
          <Song
            album="https://blog.reverbnation.com/wp-content/uploads/2019/03/creating-album-art-stands-out.jpg"
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
            image="https://cdn.shopify.com/s/files/1/1032/8883/products/Liana-desat_5456-sfw_1600x.jpg?v=1615149371"
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
            Thumbnail="https://i.gifer.com/WNUK.gif"
            />
          <Song
            album="https://images.pexels.com/photos/2170729/pexels-photo-2170729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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