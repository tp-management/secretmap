import React from 'react'
import styles from "./aboutUs.module.css";
import mainLogo from "../../../assets/landing/about_us_logo.png"
import header_logo from "../../../assets/landing/about_us_text_decoration.png";

const AboutUs = () => {
  return (
    <div className={styles.wrapper}>

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

            <div className={styles.main_image_mobile}>
                <img src={mainLogo} alt='' />
            </div>

            <div className={styles.paragraph_container}>
                <p>
                    Welcome to TripWhoop, the ultimate platform for passionate travelers to connect, share their experiences, and embark on exciting journeys together. We believe that traveling is not just about exploring new places, but also about the connections we make along the way.
                    At TripWhoop, we aim to build a vibrant community of adventurers from around the world. Whether you're a seasoned traveler or just starting your exploration journey, our platform provides a space for you to connect with like-minded individuals who share your love for travel.
                {/* <br/>
                Our web app offers a seamless and user-friendly interface, empowering you to share your travel stories, upload captivating photos, and even mark the exact coordinates of the places you've visited. By doing so, you not only create a virtual map of your adventures but also inspire 
                and guide others in their own wanderlust-filled pursuits.
                <br/>
                Connect with fellow travelers, engage in meaningful conversations, and exchange valuable insights. Discover hidden gems, gather insider tips, and uncover the unique experiences that make each destination truly special. Whether you're seeking recommendations for your next adventure 
                or simply want to relive your favorite travel moments, Tripwhoop is here to accompany you every step of the way.
                <br/>
                We prioritize user privacy and ensure a safe and respectful environment for all. We encourage positive interactions, respectful discussions, and the sharing of authentic experiences. Our team is dedicated to maintaining the integrity of the platform and promptly addressing any concerns that may arise.

                Join our growing community of travel enthusiasts today and unlock a world of endless possibilities. Together, let's celebrate the joy of exploration, forge lifelong connections, and make every journey an unforgettable experience.

                Start your adventure with Tripwhoop and let the exploration begin! */}
                </p>
            </div>
        </div>

        <div className={styles.main_image}>
            <img src={mainLogo} alt='' />
        </div>
    </div>
  )
}

export default AboutUs