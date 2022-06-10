import { format } from 'date-fns';

export default async function handler(context, res) {
    const response = await fetch(process.env.FIRESTORE_URL)
    const data = await response.json()
    const dataArray = data['documents']
    const posts = dataArray.filter(post => post.fields.publish && post.fields.publish.booleanValue === true)
        .map(post => {
            const author = post.fields.author.stringValue
            const link = post.fields.link.stringValue
            const pictureSrc = post.fields.pictureSrc.stringValue
            const description = post.fields.description.stringValue
            const title = post.fields.title.stringValue
            const createTime = format(new Date(post.createTime),'MMMM d, y')
            return {author, link, pictureSrc, description, title, createTime}
        })
    res.status(200).send({posts})
}
