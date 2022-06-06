export default async function handler({query: {id}}, res) {
    const response = await fetch(process.env.FIRESTORE_URL + id);
    const postData = await response.json();
    const postEntries = Object.entries(postData.fields);
    const post = postEntries.reduce((acc, [key, value]) => {
        acc[key] = value.stringValue
        return acc
    }, {});
    res.status(200).send(post);
}
