export default function handler(context, res) {
    fetch(process.env.FIRESTORE_URL)
        .then(response => {response.json()
            .then(data => {
                const dataArray = data['documents']
                const posts = dataArray.filter(post=>post.fields.publish && post.fields.publish.booleanValue === true)
                    .map(post=>{
                        const author = post.fields.author.stringValue
                        const link = post.fields.link.stringValue
                        const pictureSrc = post.fields.pictureSrc.stringValue
                        const description = post.fields.description.stringValue
                        const title = post.fields.title.stringValue
                        const createTime = post.createTime
                        return {author,link,pictureSrc,description,title,createTime}
                    })
                res.status(200).send({posts})
            })
        })
}
