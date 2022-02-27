import React from "react";
import "./User_Profile.css";
<<<<<<< HEAD
import Image from "./Image";
import Song from "./Song";
import Video from "./Videos"

function User_Profile() {
  return (
    <div className="User_Profile">
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
=======
import Product from "./Product"
import ProfileTop from './ProfileTop'

function User_Profile() {
  return (
       
      <div className="home__container">       
        <ProfileTop 
          icon="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
          username ='User1'
          profession='Author'
          desc = 'Hello! My name is User1 and I am an aspiring author. I have written books like Novel1 and Novel2.'
          link='www.User1swebsite.com'
          followers = '100'
          following = '200'
          subscribers = '15'
        />    


        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
>>>>>>> 0e0f82d63a17ec1d5673bb068f21f1bf391a10d4
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
  );
}

export default User_Profile;