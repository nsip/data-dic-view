const ip = "http://127.0.0.1:1323/"

export const mEmpty = new Map<string, any>()

export const fetchBodyForm = async (path: string, method: string, mQuery: Map<string, any>, mForm: Map<string, any>) => {

    let url = ip + path.replace(/^\/+/, "")
    let payload: any

    if (mQuery.size > 0) {
        const qryParams = new URLSearchParams()
        mQuery.forEach((v, k) => { qryParams.append(k, v) })
        url += "?" + qryParams
    }

    if (mForm.size > 0) {
        const formData = new FormData()
        mForm.forEach((v, k) => { formData.append(k, v) });
        payload = formData
    }

    try {

        const resp = await fetch(url, {
            method: method,
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'multipart/form-data'
            // },
            body: payload,
            mode: 'cors',
        });

        if (!resp.ok) {
            // alert('Failed to fetch successfully, got status ' + resp.status)
            const text = await resp.text()
            return new Promise((resolve, reject) => {
                resolve([text, resp.status]);
            })
        }

        const json = await resp.json()
        return new Promise((resolve, reject) => {
            resolve([json, resp.status]);
        })

    } catch (e) {
        alert(e + '\nnetwork error: ' + url)
    }
}

// const mForm = new Map<string, any>()
// mForm.set("database", "myDb")
// mForm.set("collection", "myCol")
// let rt = await fetchBodyForm("api/entity/db", "PUT", emptyM, mForm)
// console.log(rt)

export const fetchNoBody = async (path: string, method: string, mQuery: Map<string, any>) => {

    let url = ip + path.replace(/^\/+/, "")

    if (mQuery.size > 0) {
        const qryParams = new URLSearchParams()
        mQuery.forEach((v, k) => { qryParams.append(k, v) })
        url += "?" + qryParams
    }

    // alert(url)

    try {

        const resp = await fetch(url, {
            method: method,
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            mode: 'cors',
        });

        if (!resp.ok) {
            // alert('Failed to fetch successfully, got status ' + resp.status)
            const text = await resp.text()
            return new Promise((resolve, reject) => {
                resolve([text, resp.status]);
            })
        }

        const json = await resp.json()
        return new Promise((resolve, reject) => {
            resolve([json, resp.status]);
        })

    } catch (e) {
        alert(e + '\nnetwork error: ' + url)
    }
}

// (async () => {
//     try {
//         const itemType = 'entity'
//         const rt = (await fetchNoBody(`api/dictionary/list/${itemType}`, "GET", emptyM)) as any[]
//         if (rt[1] != 200) {
//             alert(rt[0])
//             return
//         }
//         console.log(rt[0])
//     } catch (err) {
//         console.log(err)
//     }
// })()

// (async () => {
//     try {
//         const mParam: Map<string, any> = new Map<string, any>([
//             ["name", 'School']
//         ])
//         const rt = await fetchNoBody(`api/dictionary/one`, "GET", mParam) as any[]
//         if (rt[1] != 200) {
//             alert(rt[0])
//             return
//         }
//         console.log(rt[0])
//     } catch (err) {
//         console.log(err)
//     }
// })()

export const fetchBodyJsonStr = async (path: string, method: string, mQuery: Map<string, any>, payload: string) => {

    let url = ip + path.replace(/^\/+/, "")

    if (mQuery.size > 0) {
        const qryParams = new URLSearchParams()
        mQuery.forEach((v, k) => { qryParams.append(k, v) })
        url += "?" + qryParams
    }

    try {

        const resp = await fetch(url, {
            method: method,
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            body: payload,
            mode: 'cors',
        });

        if (!resp.ok) {
            // alert('Failed to fetch successfully, got status ' + resp.status)
            const text = await resp.text()
            return new Promise((resolve, reject) => {
                resolve([text, resp.status]);
            })
        }

        const json = await resp.json()
        return new Promise((resolve, reject) => {
            resolve([json, resp.status]);
        })

    } catch (e) {
        alert(e + '\nnetwork error: ' + url)
    }
}

export const fetchBodyObject = async (path: string, method: string, mQuery: Map<string, any>, body: any) => {

    let url = ip + path.replace(/^\/+/, "")
    let payload: any

    if (mQuery.size > 0) {
        const qryParams = new URLSearchParams()
        mQuery.forEach((v, k) => { qryParams.append(k, v) })
        url += "?" + qryParams
    }

    if (body != undefined && body != null) {
        const jsonBody = JSON.stringify(body)
        if (jsonBody.length > 0) {
            payload = jsonBody
        }
    }

    try {

        const resp = await fetch(url, {
            method: method,
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            body: payload,
            mode: 'cors',
        });

        if (!resp.ok) {
            // alert('Failed to fetch successfully, got status ' + resp.status)
            const text = await resp.text()
            return new Promise((resolve, reject) => {
                resolve([text, resp.status]);
            })
        }

        const json = await resp.json()
        return new Promise((resolve, reject) => {
            resolve([json, resp.status]);
        })

    } catch (e) {
        alert(e + '\nnetwork error: ' + url)
    }
}