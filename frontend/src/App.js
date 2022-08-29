import React from "react";
import "./index.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
// import AuthContext from './context/AuthContext'
import Home from "./views/HomePage/HomePage";
import Login from "./views/LoginPage/LoginPage";
import Register from "./views/./RegisterPage/RegisterPage";
import NewPostPage from "./views/NewPostPage/NewPostPage";
import ProtectedPage from "./utils/ProtectedPage";
import EditPost from "./views/EditPost/EditPost";
import DetailUpcoming from "./views/DetailUpcoming/DetailUpcoming";
import HistoryPage from "./components/HistoryComponent/HistoryComponent";
import ScheduledVisits from "./components/ScheduledVisits/ScheduledVisits";
import Header from "./components/Header/Header";

// const baseURL = `http://127.0.0.1:8000/api`;

//https://rezkeeper.herokuapp.com/api

// const baseURL = `${process.env.REACT_APP_BASE_URL}`;

const baseURL = `https://rezkeeper.herokuapp.com/api`;

// const baseURL = `https://web-production-31a9.up.railway.app/api`;


function App({ user }) {
  const [upcomings, setUpcomings] = useState([]);

  function getResturants() {
    let data;
    axios
      .get(`${baseURL}/upcomings/`)
      .then((res) => {
        data = res.data;
        setUpcomings(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getResturants();
  }, []);
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Header />
          <Navbar />
          <Routes>
            {/* <PrivateRoute element={<ProtectedPage/>} path="/protected" exact /> */}
              {/* <PrivateRoute element={ProtectedPage} path="/protected" exact /> */}
              {/* <Route element={<PrivateRoute><ProtectedPage/></PrivateRoute>} path="/protected" /> */}
              <Route
                element={
                  <Home user={user} state={upcomings} upcomings={upcomings} />
                }
                path="/home"
              />
              <Route
                element={
                  <HistoryPage
                    user={user}
                    state={upcomings}
                    upcomings={upcomings}
                  />
                }
                path="/history"
              />
              <Route
                element={
                  <ScheduledVisits
                    user={user}
                    state={upcomings}
                    upcomings={upcomings}
                  />
                }
                path="/scheduled"
              />
              <Route
                element={<NewPostPage user={user} upcomings={upcomings} />}
                path="/new"
              />
              <Route
                element={<EditPost user={user} upcomings={upcomings} />}
                path="/:id/edit"
              />
              <Route
                element={<DetailUpcoming user={user} upcomings={upcomings} />}
                path="/:id/"
              />
              <Route path="/*" element={<Navigate to="/home" />} />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
          </Routes>
        </AuthProvider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
