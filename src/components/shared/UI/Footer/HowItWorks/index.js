import React from 'react'
import styles from "./howItWorks.module.css";
import header_logo from "../../../../../assets/landing/about_us_text_decoration.png";


const HowItWorks = () => {
  return (
    <div className={styles.container}>

      <div className={styles.header_container}>
        <div className={styles.header_wrapper}>
          <img src={header_logo} alt='' />
          <div>
            <h1>How it works</h1>
            <hr />
          </div>
        </div>
      </div>
      {/* <div className={styles.sub_header}>
        <h1>
          <span>Explore</span>, <span>Share</span>, and <span>Connect</span>
        </h1>
      </div> */}

      <div className={styles.list}>
        <div className={styles.list_item}>
          <h1>
            Discover Places
          </h1>
          <p>
            Explore a collection of interesting places shared by fellow travelers. Read descriptions, view photos, and find them on the interactive 3D map.
          </p>
        </div>

        <div className={styles.list_item}>
          <h1>
            Share Your Adventures
          </h1>
          <p>
            Tell your travel stories by adding places. Choose a type, describe it, upload photos, and mark its location on the map.
          </p>
        </div>

        <div className={styles.list_item}>
          <h1>
            Earn and Use Bonus Points
          </h1>
          <p>
            Get 1 bonus point every day by staying connected with us. Use them to unlock benefits of HiddenWorld.org.
          </p>
        </div>

        <div className={styles.list_item}>
          <h1>
            Connect with Fellow Travelers
          </h1>
          <p>
            Message and plan trips with fellow travelers. Pay 5 bonus points to send messages and build connections.
          </p>
        </div>

        <div className={styles.list_item}>
          <h1>
            Invite Friends, Share Adventures
          </h1>
          <p>
            Invite friends using their email. When they join, you get 5 bonus points per inviting.
          </p>
        </div>

        <div className={styles.list_item}>
          <h1>
            Get Rewarded for Engagement
          </h1>
          <p>
            Receive bonus points when your shared places receive likes. The more likes, the more bonus points you earn.
          </p>
        </div>

      </div>
    </div>
  )
}

export default HowItWorks