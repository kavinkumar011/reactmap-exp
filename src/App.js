import "./styles.css";

export default function App() {
  const users = [
    {
      name: "kavin",
      pic: "https://cdn-icons-png.flaticon.com/512/21/21104.png"
    },
    {
      name: "kumar",
      pic:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    },
    {
      name: "murali",
      pic: "https://www.pepperhub.in/wp-content/uploads/2020/11/user-male.png"
    },

    {
      name: "mathi",
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3pP2oDK9eoK1z-BYW_AxOOsQ7JB3ZAL8GHo6uqI-wwR1-yc6FDlnUuYbKQAl8VXP-zw&usqp=CAU"
    }
  ];
  return (
    <div className="App">
      {/* <Msg name="kavin" />
      <Msg name="kumar" />
      <Msg name="mathi" />
      <Msg name="Ravi" /> */}

      {users.map((ur) => (
        <Msg name={ur.name} pic={ur.pic} />
      ))}
    </div>
  );
}

function Msg({ name, pic }) {
  // const name = "kavin";
  return (
    <div>
      <img className="user-pic" src={pic} alt="names" />
      <h1 className="user-name">Hello {name}!!!!</h1>
    </div>
  );
}
