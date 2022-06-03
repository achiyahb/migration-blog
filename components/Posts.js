import React from 'react';
import Post from "./Post";

const Posts = ({posts}) => {
    return (
        <div className={'posts_main'}>
            <h4>הפוסטים:</h4>
            <div className={'posts_container'}>
                {
                    posts.map((post, i) =><Post post={post} key={i}/>)
                }
            </div>
        </div>
    );
}

export default Posts
