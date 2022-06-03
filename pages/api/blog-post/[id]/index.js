import crossEnv from "cross-env";

export default function handler({ query: { id } }, res) {
    fetch(crossEnv(process.env.FIRESTORE_URL) + id)
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
