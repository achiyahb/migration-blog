import styles from '../styles/Header.module.css'
import {FaFacebook, FaGithub, FaLinkedinIn, FaAngleRight} from "react-icons/fa";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";


export default function Header() {
    const router = useRouter()

    const [backArrow, setBackArrow] = useState(true)
    useEffect(() => {
        setBackArrow(router.asPath !== '/')
    }, [router.asPath]);

    const goToLinkHandler = (name) => {
        const url = name === 'facebook' ? process.env.FACEBOOK_PROFILE_URL :
            name === 'github' ? process.env.GITHUB_PROFILE_URL : process.env.LINKEDIN_PROFILE_URL;
        window.open(url, '_blank');
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.blog_links}>
                <Link
                    href={`/`}
                ><a>
                    <FaAngleRight className={backArrow ? styles.home_icon : styles.none} size={35}/>
                </a>
                </Link>
            </div>
            <div className={styles.title}>
                <Link
                    href={`/`}
                ><a>
                <span>
                     MIGRATION
                </span>
                </a>
                </Link>
            </div>

            <div className={styles.icons}>
                <FaGithub className={styles.icon} size={35} onClick={() => goToLinkHandler('github')}/>
                <div className={styles.linked_icon} onClick={() => goToLinkHandler('linkedin')}>
                    <FaLinkedinIn size={25}/>
                </div>
                <FaFacebook className={styles.icon} size={35} onClick={() => goToLinkHandler('facebook')}/>
            </div>
        </div>
    )
}
