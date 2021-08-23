import "./app.css";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";
import { Typography } from "@material-ui/core";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <div className={show ? "f1 sm" : "f1"}>
        <Sidebar />
      </div>
      <div className="f5">
        <Topbar setShow={setShow} />
        <Dashboard />
        <footer className="flex">
          <Typography variant="body2">Copyright © Your Website 2021</Typography>
        </footer>
      </div>
    </div>
  );
}

export default App;
