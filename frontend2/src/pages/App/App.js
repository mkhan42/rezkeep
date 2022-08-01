import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import UpcomingsList from '../../components/UpcomingsList/UpcomingList';
import UpdateUpcomingForm from '../../components/UpdateUpcomingForm/UpdateUpcomingForm';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UpcomingDetails from '../../components/UpcomingDetails/UpcomingDetails';


function App() {

  const [upcomings, setUpcomings] = useState([])
  const [editUpcoming, setEditUpcoming] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/upcomings/', {
      'method' : 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token cceded2bb187e83b8f76529795cfd04cad10336b',
      }
    })
    .then(resp => resp.json())
    .then(resp => setUpcomings(resp))
    .catch(error => console.log(error))
  }, [])

  // function getUpcoming(){
  //   let data 
  //   axios.get('http://127.0.0.1:8000/api/upcomings/')
  //   .then(res => {
  //     data = res.data;
  //     setUpcomings(data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   }
  //   )}
  //   useEffect(() => {
  //     getUpcoming()
  //   }, [])

  const editBtn = (upcoming) => {
    setEditUpcoming(upcoming)
  }

  const updatedData = (upcoming) => {
    const newUpcoming = upcomings.map(myUpcoming => {
      if(myUpcoming.id === upcoming.id) {
        return upcoming
      }
      else {
        return myUpcoming
      }
    })

    setUpcomings(newUpcoming)
  }

  const newUpcomingForm = () => {
    setEditUpcoming({restName:'', restImg:'', restAddress:'', restCusine:'', restDate:'', restTime:''})
    console.log(setEditUpcoming());
  }

  return (
    <div className='App'>
    <div className='row'>
    <div className='col'>
      <h1>RezKeep</h1>
    </div>
    <div className='col'>
      <button className='btn btn-primary' onClick={newUpcomingForm}>Add a Visit</button>
    </div>
    </div>
      <UpcomingsList upcomings={upcomings} editBtn={editBtn}/>
      {editUpcoming ? <UpdateUpcomingForm upcoming={editUpcoming} setUpcomings={setUpcomings} /> : null}
    </div>

  );
}

export default App;
