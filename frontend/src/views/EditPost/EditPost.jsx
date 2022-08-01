import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

function EditPost({ upcomings }) {
    const location = useLocation()
    const upcomingList = location.state
    console.log(upcomingList);
    let { id } = useParams();
    console.log(id);


    let thisUpcoming = upcomingList?.filter(upcoming => 
        upcoming.id == id
    )

    console.log(typeof(thisUpcoming));

    const [editUpcoming, setEditUpcoming] = useState({
        resturant_name: thisUpcoming[0].resturant_name,
        resturant_img: thisUpcoming[0].resturant_img,
        address: thisUpcoming[0].address,
        cusine_type: thisUpcoming[0].cusine_type,
        date: thisUpcoming[0].date,
        time: thisUpcoming[0].time,
          user: thisUpcoming[0].user
    });

    console.log('this is this upcoming', thisUpcoming);

      function handleChange(e) {
        const editPostData = {
          ...editUpcoming,
          [e.target.name]: e.target.value,
        };
        setEditUpcoming(editPostData);
      }

      function handleSubmit(e) {
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_BASE_URL}${id}/`, { ...editUpcoming }).then((res) => {
              setEditUpcoming({})
        //   window.location.href = `/${json._id}`;
        }).catch ((err) => {
          console.log(err);
        })

        let today = new Date().toISOString().slice(0, 10)

        if(editUpcoming.date >= today) {
          window.location.href = '/scheduled';
        }
        else {
          window.location.href = '/history';
        }
      }


    return (
      <div className='move-form'>
      <h1 className='add'>Update Your Visit</h1>
      <div class="card add-card" style={{width: "18rem"}}>
      <form className="add-form" onSubmit={handleSubmit}>
      <div class="card-body">
               <div className='mb-3'>
                   <label htmlFor='resturant_name' className='form-label'>Restaurant Name</label>
                   <input type="text" name="resturant_name" className='form-control my-form-control' id="resturant_name" placeholder='Enter Name' value={editUpcoming.resturant_name} onChange={handleChange}/>
                   
                   <label htmlFor='resturant_img' className='form-label'>Restaurant Img URL</label>
                   <input type="text" className='form-control my-form-control' name="resturant_img" id="resturant_img" placeholder='Enter Restaurant Img URL' onChange={handleChange} value={editUpcoming.resturant_img}/>
                   
                   <label htmlFor='address' className='form-label'>Restaurant Address</label>
                   <input type="text" className='form-control my-form-control'  name="address" id="address" placeholder='Enter Address' onChange={handleChange} value={editUpcoming.address} />

                   <label htmlFor='cusine_type' className='form-label'>Cusine Type</label>
                   <input type="text" className='form-control my-form-control' name="cusine_type" id="cusine_type" placeholder='Enter Type of Cusine' onChange={handleChange} value={editUpcoming.cusine_type}/>
                   
                   
                   <label htmlFor='date' className='form-label'>Date of Visit</label>
                   <input type="date" className='form-control my-form-control' name="date" id="date" placeholder='Enter Date of Visit' onChange={handleChange} value={editUpcoming.date} />
                   
                   <label htmlFor='time' className='form-label'>Time of Visit</label>
                   <input type="time" className='form-control my-form-control' name="time" id="time" placeholder='Enter Time of Visit' onChange={handleChange} value={editUpcoming.time} />
                    <br></br>
                    <div className='my-add-btn'>
                        <button className="btn" type='submit'>Update Visit</button>
                    </div>
                    </div>
               </div>
            </form>
        </div>
        </div>
    )
}

export default EditPost


// import React, {useState, useEffect} from 'react'
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import axios from 'axios';


// function EditPost({ upcomings }) {
//     const location = useLocation()
//     const upcomingList = location.state
//     console.log(upcomingList);
//     let { id } = useParams();
//     console.log(id);


//     let thisUpcoming = upcomingList?.filter(upcoming => 
//         upcoming.id == id
//     )

//     console.log(typeof(thisUpcoming));

//     const [editUpcoming, setEditUpcoming] = useState({
//         resturant_name: thisUpcoming[0].resturant_name,
//         resturant_img: thisUpcoming[0].resturant_img,
//         address: thisUpcoming[0].address,
//         cusine_type: thisUpcoming[0].cusine_type,
//         date: thisUpcoming[0].date,
//         time: thisUpcoming[0].time,
//         user: thisUpcoming[0].user
//     });

//     console.log('this is this upcoming', thisUpcoming);

//       function handleChange(e) {
//         const editPostData = {
//           ...editUpcoming,
//           [e.target.name]: e.target.value,
//         };
//         setEditUpcoming(editPostData);
//       }

//       function handleSubmit(e) {
//         e.preventDefault();
//         axios.put(`http://127.0.0.1:8000/api/upcomings/${id}/`, { ...editUpcoming }).then((res) => {
//               setEditUpcoming({})
//         //   window.location.href = `/${json._id}`;
//         }).catch ((err) => {
//           console.log(err);
//         })

//         window.location.href = '/scheduled';
//       }


//     return (
//         <div>
//         <form onSubmit={handleSubmit}>
//                <div className='mb-3'>
//                    <label htmlFor='resturant_name' className='form-label'>Restaurant Name</label>
//                    <input type="text" name="resturant_name" className='form-control' id="resturant_name" placeholder='Enter Name' value={editUpcoming.resturant_name} onChange={handleChange}/>
                   
//                    <label htmlFor='resturant_img' className='form-label'>Restaurant Img URL</label>
//                    <input type="text" className='form-control' name="resturant_img" id="resturant_img" placeholder='Enter Restaurant Img URL' onChange={handleChange} value={editUpcoming.resturant_img}/>
                   
//                    <label htmlFor='address' className='form-label'>Restaurant Address</label>
//                    <input type="text" className='form-control'  name="address" id="address" placeholder='Enter Address' onChange={handleChange} value={editUpcoming.address} />

//                    <label htmlFor='cusine_type' className='form-label'>Cusine Type</label>
//                    <input type="text" className='form-control' name="cusine_type" id="cusine_type" placeholder='Enter Type of Cusine' onChange={handleChange} value={editUpcoming.cusine_type}/>
                   
                   
//                    <label htmlFor='date' className='form-label'>Date of Visit</label>
//                    <input type="date" className='form-control' name="date" id="date" placeholder='Enter Date of Visit' onChange={handleChange} value={editUpcoming.date} />
                   
//                    <label htmlFor='time' className='form-label'>Time of Visit</label>
//                    <input type="time" className='form-control' name="time" id="time" placeholder='Enter Time of Visit' onChange={handleChange} value={editUpcoming.time} />
//                     <br></br>
//                         <button type='submit'>Add a Visit</button>
//                </div>
//             </form>
//         </div>
//     )
// }

// export default EditPost