import "./Header.css";
function Header() {
  return (
    <div className="my-title">
      <h1 className="title fixed-top">
        <img
          className="logo-size"
          src="https://img.icons8.com/bubbles/344/restaurant.png"
          width={"100px"}
        />
        RezKeeper
        <img
          className="logo-size"
          src="https://img.icons8.com/bubbles/344/restaurant.png"
          width={"100px"}
        />
      </h1>
    </div>
  );
}

export default Header;
