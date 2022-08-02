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

  const [deleted, setDeleted] = useState(false);

  const deletePost = (id) => {
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

  return (
    <div className="move-user">
      <div className="move-card">
        <h1 className="my-user-schedule">Hello, <span className="my-user-schedule-span">{user.username}</span></h1>
        <br/>
        <h1 className="my-scheduled">Welcome to your <span className="my-user-schedule-span">Scheduled Events</span></h1>
        <br/>
        <p className="my-schedule-p">If this is blank, it's because you haven't added anything yet!</p>
        <br/>
        <div className="my-list-card card scroll-cards-height">
          {upcomings.map((upcoming) => {
            if (upcoming.user === user?.user_id) {
              console.log(today);
              console.log(upcoming.date);
              if (upcoming.date >= today) {
                return (
                  <div key={upcoming.id}>
                    <div className="my-list-card-two card mb-4 mr-2 ml-2">
                      <div className="card-horizontal pt-1 mb-1 ml-1">
                        <div className="view overlay">
                          <Link state={upcomings} to={`/${upcoming.id}`}>
                            <img
                              className="card-img-top"
                              src={upcoming.resturant_img}
                            />
                          </Link>

                          <div className="mask rgba-white-slight"></div>
                        </div>
                        <div className="card-body">
                          <Link state={upcomings} to={`/${upcoming.id}`}>
                            <h6 className="card-title my-list-title">
                              {upcoming.resturant_name}
                            </h6>
                          </Link>
                          <p className="card-text my-card-text">
                            <span className="my-planned-date-span"> Planned Date</span>: {" "}
                            {new Date(upcoming.date).toLocaleDateString(
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

                          <p className="card-text"><span className="my-planned-date-span">Planned Time</span>: {" "} {upcoming.time}</p>

                          <div className="card-footer">
                            <span className="float-left ml-n4">
                            <span className="my-planned-date-span">Created</span>:{" "}
                              {new Date(upcoming.created_at).toLocaleDateString(
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
                        to={`/${upcoming.id}/edit`}
                      >
                        Edit <img src="https://img.icons8.com/ultraviolet/344/edit.png" width="20px"/>
                      </Link>
                      <button className="btn my-schedule-btn" onClick={(e) => deletePost(upcoming.id)}>
                        Delete <img src="https://img.icons8.com/parakeet/344/experimental-trash-parakeet.png" width="20px"/>
                      </button>
                      </div>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ScheduledVisits;
