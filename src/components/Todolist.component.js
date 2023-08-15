import React from "react";

import { fetchGETData } from "../api/controller.api";

import Tasklist from "./todolist-sub-components/Tasklist.component";
import Dashbord from "./todolist-sub-components/Dashbord.component";

export const StateContext = React.createContext();

function Todolist() {
  //
  const [taskList, setTaskList] = React.useState([]);
  const [renderKey, setRenderKey] = React.useState("uncompleated");

  React.useEffect(() => {
    document.title = "Todolist";
    const token = window.localStorage.getItem("token");
    token && fetchGETData("/tasks", token, setTaskList);
  }, []);

  const contextData = { taskList, setTaskList, renderKey, setRenderKey };

  return (
    <StateContext.Provider value={contextData}>
      <Dashbord />
      <Tasklist />
    </StateContext.Provider>
  );
}

export default Todolist;
