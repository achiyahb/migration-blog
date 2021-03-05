import firebaseApi from "../../../../firebase/firebaseApi";

export default function handler({ query: { id } }, res) {
    fetch('https://firestore.googleapis.com/v1/projects/text-editor-prokit/databases/(default)/documents/posts/I5nAvcxNgSDMr6Qcigps')
        .then(response => {response.json()
            .then(json => {
                const dataObj = json.fields
                const newObj = {}
                for (const [key, value] of Object.entries(dataObj)) {
                    newObj[key] = [value.stringValue]
                }
                res.status(200).send(newObj)
            })

        })

    // let collections = [{name:'posts'}]
    // firebaseApi.getData(collections)
    //     .then(resp=>{
    //         if(resp){
    //             let postsObj = resp
    //             let dbPosts = []
    //             let index = 0
    //             for (const [key, post] of Object.entries(postsObj)) {
    //                 post.key = key
    //                 post.index = index
    //                 dbPosts.push(post)
    //                 index++
    //             }
    //             console.log(dbPosts)
    //             let posts = dbPosts.filter(blogPost=>blogPost.key === id)
    //             res.status(200).send(posts[0])
    //
    //
    //         }
    //     })

}
