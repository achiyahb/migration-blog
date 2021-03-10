import styles from '../styles/Header.module.css'
import {FaFacebook, FaGithub, FaLinkedinIn} from "react-icons/fa";



export default function Header() {

    const goToLinkHandler = (name)=>{
        window.open(name === 'facebook' ? 'https://www.facebook.com/profile.php?id=100013305678737' :
            name === 'github' ? 'https://github.com/achiyahb' : 'https://www.linkedin.com/in/achiya-haviv/', '_blank')
    }

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
                <FaGithub className={styles.icon} size={35} onClick={()=>goToLinkHandler('github')}/>
                <div className={styles.linked_icon} onClick={()=>goToLinkHandler('linkedin')}>
                    <FaLinkedinIn  size={25} />
                </div>
                <FaFacebook className={styles.icon}  size={35} onClick={()=>goToLinkHandler('facebook')}/>
            </div>
        </div>
    )
}
