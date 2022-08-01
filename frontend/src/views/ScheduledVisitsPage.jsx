import { useContext } from "react";
import ScheduledVisits from "../components/ScheduledVisits";
import AuthContext from "../context/AuthContext";


const ScheduledVisitsPage = ({ upcomings }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
    <section>
      {user && <ScheduledVisits upcomings={upcomings} state={upcomings} user={user} />}
      <h1>You are on home page!</h1>
    </section>
    </>
  );
};

export default ScheduledVisitsPage;