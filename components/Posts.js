import React, {useState} from 'react';
import Post from "./Post";
import {server} from "../config";



const Posts = ({posts}) => {
    return (
        <div >
            <div>
                {
                    posts.map((post, i) => {
                        return (
                            <div>
                                    <Post post={post} key={i}/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}



export default Posts
