// import React from "react"
// import axios from 'axios'
// const baseUrl = "http://127.0.0.1:8000/api/upcomings/"

// export default class APIService {
//     static UpdateUpcoming(upcoming_id, body) {
//         const fetchUrl = `${baseUrl}${upcoming_id}/`

//         return fetch(fetchUrl, {
//             'method': 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'Authorization': 'Token cceded2bb187e83b8f76529795cfd04cad10336b'
//             },
//             body:JSON.stringify(body)
//         }).then(resp => resp.json)
//     }
// }

//         static UpdateUpcoming(pk, body) {
//             let data 
//         const fetchUrl = `${baseUrl}${pk}/`

//         return fetch(fetchUrl, {
//             'method': 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'Authorization': 'Token cceded2bb187e83b8f76529795cfd04cad10336b'
//             },
//             body:JSON.stringify(body)
//         }).then(resp => resp.json)
//     }
// }

    // function getUpcoming(){
    //     let data 
    //     axios.get('http://127.0.0.1:8000/api/upcomings/')
    //     .then(res => {
    //       data = res.data;
    //       setUpcomings(data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     }
    //     )}
    //     useEffect(() => {
    //       getUpcoming()
    //     }, [])

// }


// export default axios.put({
//     baseURL: "http://127.0.0.1:8000/api/upcomings/",
//     headers: {
//         'Accept':'application/json',
//         'Content-Type':'application/json',
//     }
// })

export default class APIService {
    static async UpdateUpcoming(upcoming_id, body) {
        console.log(body, 'zohaib')
        const { restAddress, restCusine, restDate, restImg, restName, restTime } = body

        const resp = await fetch(`http://127.0.0.1:8000/api/upcomings/${upcoming_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token cceded2bb187e83b8f76529795cfd04cad10336b',
            },
            body: JSON.stringify({
                address: restAddress,
                cusine_type: restCusine,
                date: restDate,
                resturant_img: restImg,
                resturant_name: restName,
                time: restTime,
            })
        })
        return resp.json
    }

    static AddUpcoming(body) {
        // console.log(body, 'zohaib')
        // const { restAddress, restCusine, restDate, restImg, restName, restTime } = body

        // const resp = await fetch(`http://127.0.0.1:8000/api/upcomings/`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Token cceded2bb187e83b8f76529795cfd04cad10336b',
        //     },
        //     body: JSON.stringify({
        //         address: restAddress,
        //         cusine_type: restCusine,
        //         date: restDate,
        //         resturant_img: restImg,
        //         resturant_name: restName,
        //         time: restTime,
        //     })
        // })
        // return resp.json

        const { restAddress, restCusine, restDate, restImg, restName, restTime } = body

        return fetch('http://127.0.0.1:8000/api/upcomings/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token cceded2bb187e83b8f76529795cfd04cad10336b',
            },
            body: JSON.stringify({
                address: restAddress,
                cusine_type: restCusine,
                date: restDate,
                resturant_img: restImg,
                resturant_name: restName,
                time: restTime,
            })
        }).then(resp => resp.json)
    }

    

    // static async GetOne(upcoming_id, body) {
    //     console.log(body, 'zohaib')
    //     const { restAddress, restCusine, restDate, restImg, restName, restTime } = body

    //     const resp = await fetch(`http://127.0.0.1:8000/api/upcomings/${upcoming_id}/`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Token cceded2bb187e83b8f76529795cfd04cad10336b',
    //         },
    //         body: JSON.stringify({
    //             address: restAddress,
    //             cusine_type: restCusine,
    //             date: restDate,
    //             resturant_img: restImg,
    //             resturant_name: restName,
    //             time: restTime,
    //         })
    //     })
    //     return resp.json
    // }

}