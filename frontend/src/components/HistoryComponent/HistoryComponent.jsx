import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import AuthContext from '../../context/AuthContext'
import axios from 'axios'


const baseURL = `http://127.0.0.1:8000/api`;

function HistoryComponent({ upcomings }) {
  let { id } = useParams();
  const location =useLocation()
  const { user, logoutUser } = useContext(AuthContext);

  console.log(location);

  const upcomingList = location.state

  const [idState, setIdState] = useState('')
  
  
  let thisUpcoming = upcomings?.map(upcoming => {
    return upcoming.id
  }
)

const [deleted, setDeleted] = useState(false);

const deletePost = (id) => {
  axios.delete(`${baseURL}/upcomings/${id}/`)
    .then((response) => {
      setDeleted(true);
    })
    .catch((e) => {
      console.error(e);
    });
    if (thisUpcoming.date >= today) {
      window.location.href = '/scheduled';
    }
    else {
      window.location.href = '/history';
    }
};

let today = new Date().toISOString().slice(0, 10)

  return (
    <div className="move-user">
      <div className="move-card">
        <h1>Hello, {user.username}</h1>
        <h1>Past Visits</h1>
        <p>If this is blank, it's because you haven't added anything yet!</p>
        <div class="my-list-card card scroll-cards-height">
          {upcomings.map((upcoming) => {
            if (upcoming.user === user?.user_id) {
              console.log(today);
              console.log(upcoming.date);
              if (upcoming.date < today) {
                return (
                  <div key={upcoming.id}>
                    <div class="my-list-card-two card mb-4 mr-2 ml-2">
                      <div class="card-horizontal pt-1 mb-1 ml-1">
                        <div class="view overlay">
                          <Link state={upcomings} to={`/${upcoming.id}`}>
                            <img
                              class="card-img-top"
                              src={upcoming.resturant_img}
                            />
                          </Link>

                          <div class="mask rgba-white-slight"></div>
                        </div>
                        <div class="card-body">
                          <Link state={upcomings} to={`/${upcoming.id}`}>
                            <h6 class="card-title my-list-title">
                              {upcoming.resturant_name}
                            </h6>
                          </Link>
                          <p class="card-text">
                            Date Visted:{" "}
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

                          <div class="card-footer">
                            <span class="float-left ml-n4">
                              Created:{" "}
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
                          className="btn btn-outline-primary mr-2"
                          to={`/${upcoming.id}/edit`}
                        >
                          Edit
                        </Link>
                        <button className="btn" onClick={(e) => deletePost(upcoming.id)}>
                          Delete
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

export default HistoryComponent;