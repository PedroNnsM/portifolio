import react from "react";
import styles from "./socialSidebar.module.css";
import { FaDiscord, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import  { MdOutlineEmail } from "react-icons/md";

function SocialSidebar () {
     return (
        <div className={styles.socialSidebar}>
            <div className={styles.socialSidebar__item}> <a href="https://discord.gg/FCG9KKhD"><i className="discord"></i><FaDiscord /></a></div>            
            <div className={styles.socialSidebar__item}>   <a href="https://www.twitter.com/"><i className="twitter"></i><FaTwitter /></a></div>
            <div className={styles.socialSidebar__item}>   <a href=""><i className="telegram"></i><FaTelegramPlane /></a></div>
            <div className={styles.socialSidebar__item}>   <a href=""><i className="email"></i><MdOutlineEmail /></a></div>
        </div>
        )
}

export default SocialSidebar;