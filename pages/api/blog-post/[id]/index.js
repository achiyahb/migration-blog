

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
}
