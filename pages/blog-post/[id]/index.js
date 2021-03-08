import {server} from '../../../config'
import OgMetaTags from "../../../components/OgMetaTags";


function createMarkup(item) {
    return {__html: item};
}


const BlogPost = (post) => {

    return (
        <>
            <OgMetaTags description={post.description} img={post.pictureSrc}
            title={post.title} url={post.link}
            />
            <h1 class="main-title">{post.title}</h1>
            <h4>{post.description}</h4>
            <img className='main-img' src={post.pictureSrc}/>
            <span>מחבר {post.author}</span>
            <div className='post-body'
                 dangerouslySetInnerHTML={createMarkup(post.text)}/>
        </>
    )
}

export const getServerSideProps = async (contex) => {
    const res = await fetch(`${server}/api/blog-post/${contex.params.id}`)
    console.log('page')
    const post = await res.json()
    post.link = `${server}/blog-post/${contex.params.id}`
    return {
        props: post
    }
}

export default BlogPost
