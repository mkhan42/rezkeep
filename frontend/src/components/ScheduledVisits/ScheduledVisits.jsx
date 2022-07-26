import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import SearchBar from "../SearchBar";
import "./ScheduledVisits.css";
const moment = require("moment");

// const baseURL = `http://127.0.0.1:8000/api`;

// const baseURL = `${process.env.REACT_APP_BASE_URL}`;

// const baseURL = `https://rezkeeper.herokuapp.com/api`;

function ScheduledVisits({ upcomings }) {
  let { id } = useParams();
  const location = useLocation();
  const { user, logoutUser } = useContext(AuthContext);

  console.log(location);

  const upcomingList = location.state;

  const [idState, setIdState] = useState("");

  let thisUpcoming = upcomings?.map((upcoming) => {
    return upcoming.id;
  });

  let today = new Date().toISOString().slice(0, 10);

  const userVisits = upcomings?.filter((vis) => vis.user === user.user_id && vis.date >= today)

  

  const [deleted, setDeleted] = useState(false);

  const deletePost = (id) => {
    // axios.delete(`https://web-production-31a9.up.railway.app/api/upcomings/${id}/`)
    axios
      .delete(`https://rezkeeper.herokuapp.com/api/upcomings/${id}/`)
      .then((response) => {
        setDeleted(true);
      })
      .catch((e) => {
        console.error(e);
      });
    // if (thisUpcoming.date >= today) {
    //   window.location.href = '/scheduled';
    // }
    // else {
    //   window.location.href = '/history';
    // }

    window.location.href = "/scheduled";
  };

  function clickNew() {
    window.location.href = '/new'
  }

  return (
    <div className="move-user">
      <div className="move-card">
        <h1 className="my-user-schedule">Hello, <span className="my-user-schedule-span">{user.username}</span></h1>
        <br/>
        <h1 className="my-scheduled">Welcome to your <span className="my-user-schedule-span">Scheduled Events</span></h1>
        <br/>
        {/* <p className="my-schedule-p">If this is blank, it's because you haven't added anything yet!</p> */}
        <br/>
        <div className="my-list-card card scroll-cards-height">
        {userVisits?.length ? (
          <>
          {userVisits?.map((visit) => {
            {/* if (upcoming.user === user?.user_id) { */}
              console.log(today);
              console.log(visit.date);
              {/* if (visit.date >= today) { */}
                return (
                  <div key={visit.id}>
                    <div className="my-list-card-two card mb-4 mr-2 ml-2">
                      <div className="card-horizontal pt-1 mb-1 ml-1">
                        <div className="view overlay">
                          <Link state={upcomings} to={`/${visit.id}`}>
                            <img
                              className="card-img-top"
                              src={visit.resturant_img}
                            />
                          </Link>

                          <div className="mask rgba-white-slight"></div>
                        </div>
                        <div className="card-body">
                          <Link state={upcomings} to={`/${visit.id}`}>
                            <h6 className="card-title my-list-title">
                              {visit.resturant_name}
                            </h6>
                          </Link>
                          <p className="card-text my-card-text">
                            <span className="my-planned-date-span"> Planned Date</span>: {" "}
                            {new Date(visit.date).toLocaleDateString(
                              "en-us",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                              }
                            )}
                          </p>

                          <hr/>

                          <p className="card-text"><span className="my-planned-date-span">Planned Time</span>: {" "} {visit.time}</p>

                          <div className="card-footer">
                            <span className="float-left ml-n4">
                            <span className="my-planned-date-span">Created</span>:{" "}
                              {new Date(visit.created_at).toLocaleDateString(
                                "en-us",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  hour12: true,
                                }
                              )}
                            </span>
                          </div>
                        </div>
                        <Link
                        state={upcomings}
                        className="btn my-schedule-btn"
                        to={`/${visit.id}/edit`}
                      >
                        Edit <img src="https://img.icons8.com/ultraviolet/344/edit.png" width="20px"/>
                      </Link>
                      <button className="btn my-schedule-btn" onClick={(e) => deletePost(visit.id)}>
                        Delete <img src="https://img.icons8.com/parakeet/344/experimental-trash-parakeet.png" width="20px"/>
                      </button>
                      </div>
                    </div>
                  </div>
                );
              {/* } */}
            {/* } */}
          })} 
          </>
          ) : (
            <>
            <div className="no-events">
              <h2 className="my-new-events">No scheduled events yet</h2>
              <button className='btn my-home-btn' onClick={clickNew}>Add visits</button>
            </div>

            </>
          )
        }
        </div>
      </div>
    </div>
  );
}

export default ScheduledVisits;
