import firebaseApi from "../../../../firebase/firebaseApi";

export default function handler({ query: { id } }, response) {

    let collections = [{name:'posts'}]
    firebaseApi.getData(collections)
        .then(res=>{
            if(res){
                let postsObj = res
                let dbPosts = []
                let index = 0
                for (const [key, post] of Object.entries(postsObj)) {
                    post.key = key
                    post.index = index
                    dbPosts.push(post)
                    index++
                }
                console.log(dbPosts)
                let posts = dbPosts.filter(blogPost=>blogPost.key === id)
                response.status(200).send(posts[0])


            }
        })

}
