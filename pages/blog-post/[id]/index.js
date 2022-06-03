import {server} from '../../../config'
import OgMetaTags from "../../../components/OgMetaTags";
import {FaFacebook, FaGithub, FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";
import React from "react";



function createMarkup(item) {
    return {__html: item};
}


const BlogPost = (post) => {
    const goToLinkHandler = (name)=>{
        const url = name === 'facebook' ? process.env.FACEBOOK_PROFILE_URL :
            name === 'github' ? process.env.GITHUB_PROFILE_URL : process.env.LINKEDIN_PROFILE_URL;
        window.open(url, '_blank');
    }
    return (
        <>
            <OgMetaTags description={post.description} img={post.pictureSrc}
            title={post.title} url={post.link}
            />
            <h1 className="main-title">{post.title}</h1>
            <h4>{post.description}</h4>
            <img className='main-img' src={post.pictureSrc}/>
            <span>מחבר {post.author}</span>
            <span className="secret-massage">סקרפינג נעים חברים</span>
            <div className='post-body'
                 dangerouslySetInnerHTML={createMarkup(post.text)}/>
            <div className={'icons'}>
                <FaGithub className={'icon'} size={35} onClick={()=>goToLinkHandler('github')}/>
                <div className={'linkedin_icon'} onClick={()=>goToLinkHandler('linkedin')}>
                    <FaLinkedinIn  size={25} />
                </div>
                <FaFacebook className={'icon'}  size={35} onClick={()=>goToLinkHandler('facebook')}/>
            </div>
            <Link
                href={`/`}
            ><a>
                <p className={'footer-link'}>חזרה לעמוד הראשי של הבלוג</p>
            </a>
            </Link>
        </>
    )
}

export const getServerSideProps = async (contex) => {
    const res = await fetch(`${server}/api/blog-post/${contex.params.id}`)
    const post = await res.json()
    post.link = `${server}/blog-post/${contex.params.id}`
    return {
        props: post
    }
}

export default BlogPost
