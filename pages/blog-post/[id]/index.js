import {server} from '../../../config'
import { useEffect } from 'react'
import Prism from 'prismjs';


function createMarkup(item) {
    return {__html: item};
}


const BlogPost = (post) => {
    useEffect(()=>{
        // const pre = document.querySelector('pre')
        // pre.classList.add('language-javascript');
        // const code = document.querySelector('code')
        // code.classList.add('language-javascript');
    })
    return (
        <>
            <h1>{post.title}</h1>
            <h4>{post.description}</h4>
            <img className='main-img' src={post.pictureSrc}/>
            <span>מחבר {post.author}</span>
            <div className='post-body'
                 dangerouslySetInnerHTML={createMarkup(post.text)}/>
            <pre>
  <code className='language-javascript'>
  {`
    onSubmit(e) {
      e.preventDefault();
      const job = {
        title: 'Developer',
        company: 'Facebook' 
        };
      }
  `}
  </code>
</pre>

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
