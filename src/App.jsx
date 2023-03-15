/* hooks */
import { useState } from "react";
/* components */
import AddUser from "./components/AddUser";
import ListUsers from "./components/ListUsers";
import Overlay from "./components/utilities/Overlay";

function App() {
  const [users, setUsers] = useState([]);
  const [overlay, setOverlay] = useState({
    display: false,
    title: "",
    message: "",
  });
  const displayOverlay = (title, message) => {
    setOverlay({ display: true, title, message });
  };
  const hideOverlay = () => {
    setOverlay({
      display: false,
      title: "",
      message: "",
    });
  };
  return (
    <>
      <AddUser displayOverlay={displayOverlay} setUsers={setUsers} />
      <ListUsers users={users} />
      <Overlay
        title={overlay.title}
        message={overlay.message}
        hideOverlay={hideOverlay}
        display={overlay.display}
      />
    </>
  );
}

export default App;
