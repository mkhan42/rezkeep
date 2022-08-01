import './HomePage.css'
import { useContext } from "react";
import UserInfo from "../../components/UserInfo/UserInfo";
import AuthContext from "../../context/AuthContext";

import { Navigate } from "react-router-dom"


const Home = ({ upcomings }) => {
  const { user } = useContext(AuthContext);
  return (
    <>

    <div>
      {user ? ( 
        <>
          <UserInfo upcomings={upcomings} state={upcomings} user={user} />
        </>
        ) : ( <Navigate to="/login" />)
      }
    </div>
{/* 
    <section>
      {user && <UserInfo upcomings={upcomings} state={upcomings} user={user} />}
    </section> */}
    {/* <section>
      {user && <UserInfo upcomings={upcomings} state={upcomings} user={user} />}
    </section> */}

    </>
  );
};

export default Home;