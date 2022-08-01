
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import axios from 'axios';

function UpcomingsList({ upcomings, editBtn }) {
    const editBtns = (upcoming) => {editBtn(upcoming)
    }
    return (
        <div>
        {upcomings.map(upcoming => {
        return (
          <div key= {upcoming.id}>
            <h2>{upcoming.resturant_name}</h2>
            <p>{upcoming.date} {upcoming.time}</p>
            <div className="row">
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={() => editBtns(upcoming)}>Update</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-danger">Delete</button>
                </div>
          </div>
          </div>
        )
      })}

      <hr className="hrClass"/>
        </div>
    )

//     const [upcomings, setUpcomings] = useState([])

//     const fetchUpcomings = async () => {
//         const result = await axios.get('http://localhost:8000/api/upcomings/');

//         console.log(result.data)
//         setUpcomings(result.data)
//     }

//     useEffect(() => {
//         fetchUpcomings();
//     }, [])

//     // const goToDetail = () => {
//     //     alert("detail page")
//     // }

//     return (
//       <>
//       <div>
//           {upcomings.map((upcoming) => {
//               return (
//                 <div key= {upcoming.id}>
//                 <h2>{upcoming.resturant_name}</h2>
//                 <p>{upcoming.date} {upcoming.time}</p>
                      
//                       <Link to={`/${upcoming.id}`}>Full Detail</Link>
//                 </div>
//           )})
//           }
//       </div>
//       </>
//   );
}

export default UpcomingsList