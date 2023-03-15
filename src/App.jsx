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
    message: "",
  });
  const displayOverlay = (message) => {
    setOverlay({ display: true, message });
  };
  const hideOverlay = () => {
    setOverlay({
      display: false,
      message: "",
    });
  };
  return (
    <>
      <AddUser displayOverlay={displayOverlay} setUsers={setUsers} />
      <ListUsers users={users} />
      <Overlay
        message={overlay.message}
        hideOverlay={hideOverlay}
        display={overlay.display}
      />
    </>
  );
}

export default App;
