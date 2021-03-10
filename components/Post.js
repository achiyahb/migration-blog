import React from 'react';
import Link from "next/link";
import styles from '../styles/Post.module.css'


const Post = ({post}) => {
    return (
        <div className={styles.post_container}>
                <div className={styles.property_card}>
                    <Link
                        href={`/blog-post/${post.link}`}
                    ><a>
                    <img
                        className={styles.card_img}
                        src={post.pictureSrc}
                        alt={post.title}
                    />
                    </a>
                    </Link>
                    <div>
                        <h5 className={styles.title}>
                            {post.title}
                        </h5>
                        <p className={styles.text}>
                            {post.description}
                        </p>
                    </div>
                    <div className={styles.read_more}>
                        <Link
                            href={`/blog-post/${post.link}`}
                        ><a>
                            <span >לקריאה נוספת</span>
                        </a>
                        </Link>
                    </div>

                </div>


        </div>
    );
}

export default Post

