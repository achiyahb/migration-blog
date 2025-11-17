import React from 'react';
import Link from "next/link";
import styles from '../styles/Post.module.css'

const Post = ({post}) => {
    return (
        <div className={styles.post_container}>
                <div className={styles.property_card}>
                    <div>
                        <Link
                            href={`/blog-post/${post.link}`}
                        >
                            <img
                                className={styles.card_img}
                                src={post.pictureSrc}
                                alt={post.title}
                            />
                        </Link>
                        <div>
                            <h5 className={styles.title}>
                                {post.title}
                            </h5>
                            <p className={styles.text}>
                                {post.description}
                            </p>
                        </div>
                    </div>

                    <div className={styles.read_more}>
                        <Link
                            href={`/blog-post/${post.link}`}
                        >
                            <span >לקריאה נוספת</span>
                        </Link>
                    </div>
                </div>
        </div>
    );
}

export default Post

