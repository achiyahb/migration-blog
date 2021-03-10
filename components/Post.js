import React from 'react';

const Post = ({post}) => {


    return (
        <div >
            <div>
                <div
                    src="https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png"
                    title="Contemplative Reptile"
                />
                <div>
                    <div >
                        {post.title}
                    </div>
                    <div >
                        {post.description}
                    </div>
                </div>
            </div>
            <div>
                <button >
                    Share
                </button>
                <button >
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default Post

