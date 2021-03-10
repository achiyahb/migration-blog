import styles from '../styles/Header.module.css'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



export default function Header() {

    return (
        <div className={styles.mainDiv}>
            <div className={styles.blog_links}>
                <button>t</button>
            </div>
            <div className={styles.title}>
                <span>
                     MIGRATION
                </span>
            </div>

            <div className={styles.icons}>
                <FaGithub className={styles.icon} size={35} />
                <FaLinkedinIn className={styles.linked_icon} size={25} />
                <FaFacebook className={styles.icon}  size={35} />
            </div>
        </div>
    )
}
