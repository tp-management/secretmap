import React from 'react'
import styles from "./aboutUs.module.css";
import header_logo from "../../../../../assets/landing/about_us_text_decoration.png";


const AboutUs = () => {


  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <div className={styles.header_wrapper}>
          <img src={header_logo} alt='' />
          <div>
            <h1>Explore About Us</h1>
            <hr />
          </div>
        </div>
      </div>

      <ul className={styles.paragraph_container}>

        <li>
          Our web app empowers you to share your travel stories, upload captivating photos, 
          and even mark the exact coordinates of the places you've visited. 
          By doing so, you create a virtual map of your adventures
        </li>

        <li>
          Connect with fellow travelers, engage in meaningful conversations, and exchange valuable insights. Discover hidden gems, 
          gather insider tips, and uncover the unique experiences that make each destination truly special. 
        </li>
        
        <li>
          We prioritize user privacy and ensure a safe and respectful environment for all. We encourage positive interactions, 
          respectful discussions, and the sharing of authentic experiences. Our team is dedicated to maintaining the integrity of 
          the platform and promptly addressing any concerns that may arise.
        </li>

        <li>
          Join our growing community of travel enthusiasts today and unlock a world of endless possibilities. 
          Together, let's celebrate the joy of exploration, forge lifelong connections, and make every journey an unforgettable experience.
        </li>

        <li>
          Start your adventure with TripWhoop.org and let the exploration begin!
        </li>

      </ul>

    </div>
  )
}

export default AboutUs