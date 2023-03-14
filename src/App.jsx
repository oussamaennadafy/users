/* hooks */
import { useState } from "react";
/* components */
import AddUser from "./components/AddUser";
import ListUsers from "./components/ListUsers";
import Overlay from "./components/Overlay";

function App() {
  const [users, setUsers] = useState([]);
  const [overlay, setOverlay] = useState(false);
  return (
    <>
      <AddUser setUsers={setUsers} />
      <ListUsers users={users} />
      <Overlay display={overlay} />
    </>
  );
}

export default App;
