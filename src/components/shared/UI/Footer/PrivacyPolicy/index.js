import React from 'react'
import styles from "./privacypolicy.module.css";
import header_logo from "../../../../../assets/landing/about_us_text_decoration.png";


const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>

      <div className={styles.header_container}>
        <div className={styles.header_wrapper}>
          <img src={header_logo} alt='' />
          <div>
            <h1>User Data Privacy</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className={styles.list}>
        <div className={styles.list_item}>
          <h1>
          Information We Collect
          </h1>
          <p>
          When you register an account or interact with our website, we may collect certain personal information, 
          including but not limited to your name, email address to enhance our services and improve the user experience.
          </p>
        </div>

        <div className={styles.list_item}>
          <h1>
          Use of Collected Information
          </h1>
          <p>
          We utilize the collected information to provide you with a personalized and seamless experience on our platform. 
          It enables us to offer tailored recommendations, connect you with relevant travel partners, and facilitate meaningful 
          interactions within our community. We may also use your information to communicate important updates, promotions, or 
          newsletters, but you have the option to opt out of receiving such communications.
          </p>
        </div>

        <div className={styles.list_item}>
          <h1>
          Data Sharing and Security
          </h1>
          <p>
          We understand the importance of safeguarding your personal information and will never sell, trade, 
          or rent it to third parties without your consent, unless required by law. We may, however, share 
          certain information with trusted service providers who assist us in delivering our services or improving
           our platform. We implement industry-standard security measures to protect your data against unauthorized
            access, disclosure, or alteration.
          </p>
        </div>

        <div className={styles.list_item}>
          <h1>
          Cookies and Tracking Technologies
          </h1>
          <p>
          To enhance your browsing experience and analyze user trends, we may employ cookies and similar tracking technologies. 
          These technologies help us gather information such as website traffic patterns, user preferences, 
          and session data. You have the option to disable or manage cookie settings through your browser, 
          but please note that certain features of our website may be affected.
          </p>
        </div>

        <div className={styles.list_item}>
          <h1>
            
            Third-Party Links
          </h1>
          <p>
          Our platform may contain links to external websites or services that are not operated or controlled by us. 
          We are not responsible for the privacy practices or content of these third-party websites. 
          We encourage you to review their respective privacy policies before engaging with them.
          </p>
        </div>

        <div className={styles.list_item}>
          <h1>
          Changes to this Policy
          </h1>
          <p>
          We may update this Privacy Policy periodically to reflect changes in our practices or to comply with legal requirements.
          </p>
        </div>

      </div>
    </div>
  )
}

export default PrivacyPolicy