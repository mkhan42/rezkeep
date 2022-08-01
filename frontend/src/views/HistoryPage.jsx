import { useContext } from "react";
import HistoryComponent from "../components/HistoryComponent";
import AuthContext from "../context/AuthContext";

const HistoryPage = ({ upcomings }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
    <section>
      {user && <HistoryComponent upcomings={upcomings} state={upcomings} user={user} />}
      <h1>You are on home page!</h1>
    </section>
    </>
  );
};

export default HistoryPage;