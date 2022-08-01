import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import APIService from '../../utils/APIService';
import axios from 'axios';

// let { upcomingId } = useParams();

// function UpdateUpcomingForm({ upcoming }) {

//     // let navigate = useNavigate();
//     const { id } = useParams();

//     // const [currentRest, setCurrentRest] = useState({});
//     // // const [restName, setRestName] = useState({});
//     // const [editARest, setEditARest] = useState({
//     //     // resturant_name: upcoming?.resturant_name,
//     //     // resturant_img: upcoming?.resturant_img,
//     //     // address: upcoming?.address,
//     //     // cusine_type: upcoming?.cusine_type,
//     //     // date: upcoming?.cusine_type,
//     //     // time: upcoming?.cusine_type,
//     //     resturant_name: "",
//     //     resturant_img: "",
//     //     address: "",
//     //     cusine_type: "",
//     //     date: "",
//     //     time: "",
//     // })
//     // // const [img, setImg] = useState(upcoming?.resturant_name)

//     // useEffect(() => {
//     //     const getData = async () => {
//     //         try {
//     //             const response = await fetch('http://127.0.0.1:8000/api/upcomings/', {
//     //             'method' : 'GET',
//     //             headers: {
//     //               'Content-Type': 'application/json',
//     //               'Authorization': 'Token 296d709359edd2ed90f47e7c9ae5775aaab89f57',
//     //             }
//     //           })
//     //           setEditARest({
//     //             resturant_name: response.resturant_name,
//     //             resturant_img: response.resturant_img,
//     //             address: response.address,
//     //             cusine_type: response.cusine_type,
//     //             date: response.date,
//     //             time: response.time,
//     //           })
//     //           setCurrentRest(response)
//     //         } catch (error) {
//     //             console.log(error);
//     //       }
//     //     }
//     //       getData()
//     //     }, [])

//     // const [restName, setRestName] = useState(upcoming.resturant_name);
//     // const [restImg, setRestImg] = useState(upcoming.resturant_img);
//     // const [restAddress, setRestAddress] = useState(upcoming.address);
//     // const [restCusine, setRestCusine] = useState(upcoming.cusine_type);
//     // const [restDate, setRestDate] = useState(upcoming.date);
//     // const [restTime, setRestTime] = useState(upcoming.time);

//     const [restName, setRestName] = useState('');
//     const [restImg, setRestImg] = useState('');
//     const [restAddress, setRestAddress] = useState('');
//     const [restCusine, setRestCusine] = useState('');
//     const [restDate, setRestDate] = useState('');
//     const [restTime, setRestTime] = useState('');

//     // useEffect(() => {
//     //     loadUpcomings();
//     // }, [])

//     // let loadUpcomings = async () => {
//     //     const result = await axios.get(`http://127.0.0.1:8000/api/${id}`);
    
//     //     setRestName(result.data.resturant_name);
//     //     setRestImg(result.data.resturant_img);
//     //     setRestAddress(result.data.address);
//     //     setRestCusine(result.data.cusine_type);
//     //     setRestDate(result.data.date);
//     //     setRestTime(result.data.time);
//     //    }

    
//     // const updateUpcoming = async () => {
//     //     let formField = new FormData()

//         // formField.append('resturant_name', resturant_name)
//         // formField.append('email',email)
//         // formField.append('address',address)
//         // formField.append('phone',phone)

//         // if(image !== null) {
//         //   formField.append('image', image)
//         // }

//     //     await axios({
//     //         method: 'PUT',
//     //         url: `http://127.0.0.1:8000/api/${id}/`,
//     //         data: formField
//     //     }).then(response => {
//     //         console.log(response.data);
//     //         // navigate("");
//     //     })

//     // }

//     useEffect(() => {
//         setRestName(upcoming.resturant_name)
//         setRestImg(upcoming.resturant_img)
//         setRestAddress(upcoming.address)
//         setRestCusine(upcoming.cusine_type)
//         setRestDate(upcoming.date)
//         setRestTime(upcoming.time)
//     }, [upcoming])

//     // const updateUpcoming = () => {
//     //     APIService.UpdateUpcoming(upcoming.id, {restName, restImg, restAddress, restCusine, restDate, restTime})
//     //     .then(resp => console.log(resp))
//     //     // let data 
//     //     // axios.put(`http://127.0.0.1:8000/api/upcomings/${upcoming.id}/`)
//     //     // .then(res => {
//     //     //   data = res.data;
//     //     //   upcoming(data);
//     //     // })
//     //     // .catch(err => {
//     //     //   console.log(err);
//     //     // }
//     //     // )
//     // }
//     //     // useEffect(() => {
//     //     //   updateUpcoming()
//     //     // }, [])

//     return (
//         <div>
//            {upcoming?.resturant_name ? (
//                <div className='mb-3'>
//                {/* <form onSubmit={updateUpcoming}> */}
//                    <label htmlFor='resturant_name' className='form-label'>Restaurant Name</label>
//                    <input type="text" name="resturant_name" className='form-control' id="resturant_name" placeholder='Enter Restaurant' value={restName} onChange={(e => setRestName(e.target.value))}/>
                   
//                    <label htmlFor='resturant_img' className='form-label'>Restaurant Img URL</label>
//                    <input type="text" name="resturant_img" className='form-control' id="resturant_img" placeholder='Enter Restaurant Img URL' value={restImg} onChange={(e => setRestImg(e.target.value))}/>
                   
//                    <label htmlFor='address' className='form-label'>Restaurant Address</label>
//                    <input type="text" name="address" className='form-control' id="address" placeholder='Enter Restaurant Address' value={restAddress} onChange={(e => setRestAddress(e.target.value))}/>

//                    <label htmlFor='cusine_type' className='form-label'>Cusine Type</label>
//                    <input type="text" className='form-control' name="cusine_type" id="cusine_type" placeholder='Enter Type of Cusine' value={restCusine} onChange={(e => setRestCusine(e.target.value))}/>
                   
                   
//                    <label htmlFor='date' className='form-label'>Date of Visit</label>
//                    <input type="date" name="date" className='form-control' id="date" placeholder='Enter Date of Visit' value={restDate} onChange={(e => setRestDate(e.target.value))}/>
                   
//                    <label htmlFor='time' className='form-label'>Time of Visit</label>
//                    <input type="time" name="time" className='form-control' id="time" placeholder='Enter Time of Visit' value={restTime} onChange={(e => setRestTime(e.target.value))} />
//                     <br></br>
//                    <button onClick={updateUpcoming} className='btn btn-success'>Update Visit</button>
//                 {/* </form> */}
//                </div>
//            ) : null }
//         </div>
//     )
// }

// export default UpdateUpcomingForm

function UpdateUpcomingForm({ upcoming, updatedData }) {

    // const [restName, setRestName] = useState(upcoming.resturant_name);
    // const [restImg, setRestImg] = useState(upcoming.resturant_img);
    // const [restAddress, setRestAddress] = useState(upcoming.address);
    // const [restCusine, setRestCusine] = useState(upcoming.cusine_type);
    // const [restDate, setRestDate] = useState(upcoming.date);
    // const [restTime, setRestTime] = useState(upcoming.time);


    const [restName, setRestName] = useState('');
    const [restImg, setRestImg] = useState('');
    const [restAddress, setRestAddress] = useState('');
    const [restCusine, setRestCusine] = useState('');
    const [restDate, setRestDate] = useState('');
    const [restTime, setRestTime] = useState('');

        useEffect(() => {
        setRestName(upcoming.resturant_name)
        setRestImg(upcoming.resturant_img)
        setRestAddress(upcoming.address)
        setRestCusine(upcoming.cusine_type)
        setRestDate(upcoming.date)
        setRestTime(upcoming.time)
    }, [upcoming])


    const updateUpcoming = () => {
        APIService.UpdateUpcoming(upcoming.id, {restName, restImg, restAddress, restCusine, restDate, restTime})
        .then(resp => updatedData(resp))
    }

    const addUpcoming = () => {
        APIService.AddUpcoming({restName, restImg, restAddress, restCusine, restDate, restTime})
        .then(resp => console.log(resp))
    }

    return (
        <div>
           {upcoming?.resturant_name ? (
               <div className='mb-3'>
                   <label htmlFor='resturant_name' className='form-label'>Restaurant Name</label>
                   <input type="text" name="resturant_name" className='form-control' id="resturant_name" placeholder='Enter Restaurant' value={restName} onChange={(e => setRestName(e.target.value))}/>
                   
                   <label htmlFor='resturant_img' className='form-label'>Restaurant Img URL</label>
                   <input type="text" className='form-control' name="resturant_img" id="resturant_img" placeholder='Enter Restaurant Img URL' value={restImg} onChange={(e => setRestImg(e.target.value))}/>
                   
                   <label htmlFor='address' className='form-label'>Restaurant Address</label>
                   <input type="text" className='form-control'  name="address" id="address" placeholder='Enter Restaurant Address' value={restAddress} onChange={(e => setRestAddress(e.target.value))}/>

                   <label htmlFor='cusine_type' className='form-label'>Cusine Type</label>
                   <input type="text" className='form-control' name="cusine_type" id="cusine_type" placeholder='Enter Type of Cusine' value={restCusine} onChange={(e => setRestCusine(e.target.value))}/>
                   
                   
                   <label htmlFor='date' className='form-label'>Date of Visit</label>
                   <input type="date" className='form-control' name="date" id="date" placeholder='Enter Date of Visit' value={restDate} onChange={(e => setRestDate(e.target.value))}/>
                   
                   <label htmlFor='time' className='form-label'>Time of Visit</label>
                   <input type="time" className='form-control' name="time" id="time" placeholder='Enter Time of Visit' value={restTime} onChange={(e => setRestTime(e.target.value))} />
                    <br></br>
                    {
                        upcoming.id ? <button onClick={updateUpcoming} className='btn btn-success'>Update Visit</button> :
                        <button onClick={addUpcoming} className='btn btn-success'>Add a Visit</button>
                    }
               </div>
           ) : null }
        </div>
    )
}

export default UpdateUpcomingForm