import {server} from '../../../config'


function createMarkup(item) {
    return {__html: item};
}


const BlogPost = (post) => {

    return (
        <>
            <h1>{post.title}</h1>
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
    console.log(post)
    return {
        props: post
    }
}

export default BlogPost
