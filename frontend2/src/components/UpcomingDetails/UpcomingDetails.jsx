import axios from 'axios';
import React, {useState, useEffect} from 'react';
// import { useParams, useNavigate } from 'react-router';
import { Link, useParams, useNavigate  } from 'react-router-dom';

function UpcomingDetails() {

const [upcoming, setUpcoming] = useState([])

const {id} = useParams();
const navigate = useNavigate();

const getOne = async () => {
  const  { data } = await axios.get(`http://127.0.0.1:8000/api/upcomings/${id}/`)
  console.log(data, "ZOHAIB");
  setUpcoming(data);
}

const deleteUser = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/upcomings/${id}/`)
    navigate("/home")
}


useEffect(() => {
    getOne();
},[])


    return (
        <div>
            <h2>Detail of Visit </h2>
            <hr></hr>
            <div>
                    <p>{upcoming.id}</p>
                    <p>{upcoming.resturant_name}</p>
                    {/* <img src={upcoming.resturant_img}/> */}
                    <p>{upcoming.address}</p>
                    <p>{upcoming.date}</p>
                    <p>{upcoming.time}</p>
            </div>
           

          

            <Link to={`/${upcoming.id}/update`}>Update</Link>
            <Link onClick={() => deleteUser(upcoming.id)}>Delete</Link>
        </div>
    );
};

export default UpcomingDetails;