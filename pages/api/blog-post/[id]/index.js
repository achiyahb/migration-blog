const crossEnv = require('..')

export default function handler({ query: { id } }, res) {
    console.log(id)
    fetch(crossEnv(process.env.FIRESTORE_URL) + id)
        .then(response => {response.json()
            .then(json => {

                const dataObj = json.fields
                const newObj = {}
                console.log(dataObj)
                console.log(json)
                for (const [key, value] of Object.entries(dataObj)) {
                    newObj[key] = [value.stringValue]
                    console.log({key,value})
                }
                res.status(200).send(newObj)
            })

        })
}
