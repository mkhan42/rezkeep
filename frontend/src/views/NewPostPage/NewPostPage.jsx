import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import './NewPostPage.css';

// const baseURL = `http://127.0.0.1:8000/api`;

// const baseURL = `${process.env.REACT_APP_BASE_URL}`;

const baseURL = `https://rezkeeper.herokuapp.com/api`;

// const baseURL = `https://web-production-31a9.up.railway.app/api`;

function NewPostPage({}) {
  const { user, logoutUser } = useContext(AuthContext);

  console.log(user);


    const [newUpcoming, setNewUpcoming] = useState({
        resturant_name: "",
        resturant_img: "",
        address: "",
        cusine_type: "",
        date: "",
        time: "",
        // myuser: user.username
        user: user.user_id
      });


      const [error, setError] = useState("");

      function handleChange(e, data) {
        //console.log(data.value);
    
        const newPostData = {
          ...newUpcoming,
          [e.target.name]: e.target.value,
        };
        setNewUpcoming(newPostData);
        setError("");
      }
  

        function handleSubmit(e) {
        e.preventDefault();
        axios.post(`${baseURL}/upcomings/`, { ...newUpcoming }).then((res) => {
              setNewUpcoming({})
        //   window.location.href = `/${json._id}`;
        }).catch ((err) => {
          console.log(err);
        })

        let today = new Date().toISOString().slice(0, 10)

        if(newUpcoming.date >= today) {
          window.location.href = '/scheduled';
        }
        else {
          window.location.href = '/history';
        }
      }

    return (
        <div className='move-form'>
        <h1 className='add'>Add a Restaurant Visit</h1>
        <div className="card add-card" style={{width: "18rem"}}>
        <form className="add-form" onSubmit={handleSubmit}>
        <div className="card-body">
               <div className='mb-3'>
                   <label htmlFor='resturant_name' className='form-label my-add-form-label'>Restaurant Name</label>
                   <input type="text" name="resturant_name" className='form-control my-form-control' id="resturant_name" placeholder='Enter Restaurant' value={newUpcoming.resturant_name} onChange={handleChange}/>
                   
                   <label htmlFor='resturant_img' className='form-label my-add-form-label'>Restaurant Img URL</label>
                   <input type="text" className='form-control my-form-control' name="resturant_img" id="resturant_img" placeholder='Enter Restaurant Img URL' onChange={handleChange} value={newUpcoming.resturant_img}/>
                   
                   <label htmlFor='address' className='form-label my-add-form-label'>Restaurant Address</label>
                   <input type="text" className='form-control my-form-control' name="address" id="address" placeholder='Enter Restaurant Address' onChange={handleChange} value={newUpcoming.address} />

                   <label htmlFor='cusine_type' className='form-label my-add-form-label'>Cusine Type</label>
                   <input type="text" className='form-control my-form-control' name="cusine_type" id="cusine_type" placeholder='Enter Type of Cusine' onChange={handleChange} value={newUpcoming.cusine_type}/>
                   
                   
                   <label htmlFor='date' className='form-label my-add-form-label'>Date of Visit</label>
                   <input type="date" className='form-control my-form-control' name="date" id="date" placeholder='Enter Date of Visit' onChange={handleChange} value={newUpcoming.date} />
                   
                   <label htmlFor='time' className='form-label my-add-form-label'>Time of Visit</label>
                   <input type="time" className='form-control my-form-control' name="time" id="time" placeholder='Enter Time of Visit' onChange={handleChange} value={newUpcoming.time} />

                   <p>*All fields are required</p>

                    <br></br>
                    <div className='my-add-btn'>
                        <button className="btn my-add-btn-new" type='submit'>Add a Visit</button>
                      </div>
               </div>
               </div>
            </form>
            </div>

        </div>
    )
}

export default NewPostPage