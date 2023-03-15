/* hooks */
import { useState } from "react";
/* components */
import AddUser from "./components/AddUser";
import ListUsers from "./components/ListUsers";
import Overlay from "./components/utilities/Overlay";

function App() {
  const [users, setUsers] = useState([]);
  const [overlay, setOverlay] = useState(true);
  return (
    <>
      <AddUser setUsers={setUsers} />
      <ListUsers users={users} />
      <Overlay
        setDisplay={setOverlay}
        display={overlay}
        title="error title"
        message="add your name"
      />
    </>
  );
}

export default App;
