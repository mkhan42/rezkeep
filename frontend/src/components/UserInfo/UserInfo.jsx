import './UserInfo.css'
function UserInfo({ user }) {

function clickVisits() {
  window.location.href = '/scheduled'
}

function clickNew() {
  window.location.href = '/new'
}

  return (
    <div className="move-down">
    <div className="card">
    <div className="card-body">
      <h4 className="card-title my-home-title">Hello, {user.username}</h4>
      <p>Welcome to <span className='app-name'>RezKeeper</span>, a place where you can keep track of all the restaurants you've visited</p>
      <img className="card-img-top" src="https://media2.giphy.com/media/QZOyrhjVgZDR8TXVOg/giphy.gif?cid=ecf05e47jz2h44rfzkgjijdbgdpfi9o0gljczfxqn9jwx22x&rid=giphy.gif&ct=g" alt="Card image cap" />
      <div>
      <button className='btn' onClick={clickVisits}>Go to upcoming visits</button>
      <button className='btn' onClick={clickNew}>Add visits</button>
      </div>
      </div>
    </div>
    </div>
  );
}

export default UserInfo;
