import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./DetailUpcoming.css";

// const baseURL = `http://127.0.0.1:8000/api`;

// const baseURL = `${process.env.REACT_APP_BASE_URL}`;

const baseURL = `https://rezkeeper.herokuapp.com/api`;

const DetailUpcoming = () => {
  const { id } = useParams();

  const [upcoming, setUpcoming] = useState([]);
  const [order, setOrder] = useState([]);
  const [rating, setRating] = useState([]);
  const [comment, setComment] = useState([]);
  const [deletedOrder, setDeletedOrder] = useState(false);
  const [deletedRating, setDeletedRating] = useState(false);
  const [deletedComment, setDeletedComment] = useState(false);
  const [error, setError] = useState("");

  const [newOrder, setNewOrder] = useState({
    name: "",
    price: "",
    // dish: ""
    upcoming: id,
  });
  const [newRating, setNewRating] = useState({
    rating: "1",
    // dish: ""
    upcoming: id,
  });
  const [newComment, setNewComment] = useState({
    content: "",
    // dish: ""
    upcoming: id,
  });

  const getOne = async () => {
    const { data } = await axios.get(
      `${baseURL}/upcomings/${id}/`
    );
    console.log(data);
    setUpcoming(data);
  };
  useEffect(() => {
    getOne();
  }, []);

  function getOrder() {
    let data;
    axios
      .get(`${baseURL}/upcomings/${id}/orders/`)
      .then((res) => {
        data = res.data;
        setOrder(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getOrder();
  }, []);

  function handleOrderChange(e, data) {
    //console.log(data.value);
    console.log(e.target.value);
    const newOrderData = {
      ...newOrder,
      [e.target.name]: e.target.value,
    };
    console.log(newOrderData);
    setNewOrder(newOrderData);
    setError("");
  }

  function handleOrderSubmit(e) {
    e.preventDefault();
    axios
      .post(`${baseURL}/upcomings/${id}/orders/`, {
        ...newOrder,
      })
      .then((res) => {
        setNewOrder({});
        //   window.location.href = `/${json._id}`;
        console.log("order", newOrder);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.href = `/${upcoming.id}`;
  }

  const deleteOrder = (id) => {
    axios
      .delete(`${baseURL}/upcomings/${id}/orders/${id}/`)
      .then((response) => {
        setDeletedOrder(true);
      })
      .catch((e) => {
        console.error(e);
      });
    window.location.href = `/${upcoming.id}`;
  };

  function getRating() {
    let data;
    axios
      .get(`${baseURL}/upcomings/${id}/ratings/`)
      .then((res) => {
        data = res.data;
        setRating(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getRating();
  }, []);

  function handleRatingChange(e, data) {
    //console.log(data.value);
    console.log(e.target.value);
    const newRatingData = {
      ...newRating,
      [e.target.name]: e.target.value,
    };
    console.log(newRatingData);
    setNewRating(newRatingData);
    setError("");
  }

  function handleRatingSubmit(e) {
    e.preventDefault();
    axios
      .post(`${baseURL}/upcomings/${id}/ratings/`, {
        ...newRating,
      })
      .then((res) => {
        setNewOrder({});
        //   window.location.href = `/${json._id}`;
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.href = `/${upcoming.id}`;
  }

  const deleteRating = (id) => {
    axios
      .delete(`${baseURL}/upcomings/${id}/ratings/${id}/`)
      .then((response) => {
        setDeletedRating(true);
      })
      .catch((e) => {
        console.error(e);
      });
    window.location.href = `/${upcoming.id}`;
  };

  function getComment() {
    let data;
    axios
      .get(`${baseURL}/upcomings/${id}/comments/`)
      .then((res) => {
        data = res.data;
        setComment(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getComment();
  }, []);

  function handleCommentChange(e, data) {
    //console.log(data.value);
    console.log(e.target.value);
    const newCommentData = {
      ...newComment,
      [e.target.name]: e.target.value,
    };
    console.log(newCommentData);
    setNewComment(newCommentData);
    setError("");
  }

  function handleCommentSubmit(e) {
    e.preventDefault();
    axios
      .post(`${baseURL}/upcomings/${id}/comments/`, {
        ...newComment,
      })
      .then((res) => {
        setNewComment({});
        //   window.location.href = `/${json._id}`;
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.href = `/${upcoming.id}`;
  }

  const deleteComment = (id) => {
    axios
      .delete(`${baseURL}/upcomings/${id}/comments/${id}/`)
      .then((response) => {
        setDeletedComment(true);
      })
      .catch((e) => {
        console.error(e);
      });
    window.location.href = `/${upcoming.id}`;
  };
  let today = new Date().toISOString().slice(0, 10);

  return (
    <div className="move-detail-card">
      <div className="card my-detail-card" style={{ width: "18rem" }}>
        <h2 className="my-rest-visit">Resturant Visit Details</h2>
        <hr></hr>
        <div>
          <h3 className="my-rest-name">{upcoming.resturant_name}</h3>
          <img src={upcoming.resturant_img} className="card-img-top" alt="..." />
          <br/>
          <br/>
          <div>
            <p className="my-add-p"><span className="my-add-span">Address:</span> <span className="my-add-indent">{upcoming.address}</span></p>
            <p className="my-add-p"><span className="my-add-span">Food Type:</span> {upcoming.cusine_type}</p>
            <p className="my-add-p"> <span className="my-add-span">
              Visit Date:</span>{" "}
              {new Date(upcoming.date).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <p className="my-add-p"><span className="my-add-span">Visit Time:</span>{upcoming.time}</p>
          </div>
        </div>

        <hr></hr>

        {upcoming.date < today && (
          <>
            <div className="order-div">
              <h5>Orders</h5>
              {order.map((or) => {
                return (
                  <div key={or.id}>
                    <span className="my-menu-item">Menu Item</span>: {or.name} <span className="my-menu-price">Price</span>: ${or.price}
                    <button className="btn my-delete-order-btn" onClick={(e) => deleteOrder(or.id)}>
                      <img src="https://img.icons8.com/parakeet/344/experimental-trash-parakeet.png" width="20px"/>
                    </button>
                    <br/>
                    <br/>
                  </div>
                );
              })}
            </div>

              <br/>
            <form className="add-order-form" onSubmit={handleOrderSubmit}>
              <label htmlFor="name" className="form-label my-menu-label">
                Menu Item Name
              </label>
              <br/>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Menu Item"
                value={newOrder.name}
                onChange={handleOrderChange}
              />
              <br/>
              <label htmlFor="price" className="form-label my-menu-label">
                Price
              </label>
              <input
                type="text"
                name="price"
                className="form-control my-form-control"
                placeholder="Enter Price"
                value={newOrder.price}
                onChange={handleOrderChange}
              />
              <div className="my-order-btn">
              <button className="btn my-new-order-btn" type="submit">
                Add Order
              </button>
              </div>
            </form>

            <hr/>

            <div>
            <h5>Rating</h5>
              {rating.map((rate) => {
                return (
                  <div key={rate.id}>
                  <span className="my-menu-item">Rating:</span> {rate.rating} <span className="my-menu-item">out of 5</span>
                    <button
                      className="btn my-delete-order-btn"
                      onClick={(e) => deleteRating(rate.id)}
                    >
                       <img src="https://img.icons8.com/parakeet/344/experimental-trash-parakeet.png" width="20px"/>
                    </button>
                  </div>
                );
              })}
            </div>

            {rating.length === 0 && (
              <>
                <form className="add-rating-form" onSubmit={handleRatingSubmit}>
                  <label htmlFor="rating" className="form-label my-menu-label">
                  Rating out of 5
                  </label>
                  <select
                    className="my-form-control form-control"
                    name="rating"
                    value={newRating.rating}
                    onChange={handleRatingChange}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <div className="my-order-btn">
                  <button className="btn my-new-order-btn" type="submit">
                    Add Rating
                  </button>
                  </div>
                </form>
              </>
            )}

            <hr></hr>

            <div>
            <h5>Review</h5>
              {comment.map((com) => {
                return (
                  <div key={com.id}>
                    <span className="my-menu-item">Review:</span> {com.content}
                    <button
                      className="btn my-delete-order-btn"
                      onClick={(e) => deleteComment(com.id)}
                    >
                      <img src="https://img.icons8.com/parakeet/344/experimental-trash-parakeet.png" width="20px"/>
                    </button>
                  </div>
                );
              })}
            </div>

            {comment.length === 0 && (
              <>
                <form className="my-comment-form" onSubmit={handleCommentSubmit}>
                  <label htmlFor="content" className="form-label my-menu-label">
                    Write a Review
                  </label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="content"
                    placeholder="Enter Thoughts"
                    value={newComment.content}
                    onChange={handleCommentChange}
                  />
                  <br/>
                  <div className="my-order-btn">
                  <button className="my-new-order-btn btn" type="submit">
                    Add Review
                  </button>
                  </div>
                </form>
              </>
            )}

            <hr></hr>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailUpcoming;
