import React from "react";
import { StateContext } from "../Todolist.component";

import api from "../../api/axios.api";

function Tasklist() {
  const { renderKey, taskList } = React.useContext(StateContext);

  return (
    <section className="container main">
      <div className="innerContainer" id="taskList">
        {taskList.map((task) => {
          if (renderKey === task.state || renderKey === "all") {
            return <Task key={task.id} name={task.name} id={task.id} />;
          }
          return null;
        })}
      </div>
    </section>
  );
}

function Task({ name, id }) {
  const { taskList, setTaskList } = React.useContext(StateContext);

  async function changeTaskState(id, state) {
    let newList = [...taskList];

    if (state === "deleted") {
      newList = newList.filter((item) => item.id !== id);
    }

    if (state === "compleated") {
      newList[
        newList.findIndex((item) => {
          return item.id === id;
        })
      ].state = state;
    }

    // ----------------

    const token = window.localStorage.getItem("token");

    if (!token) {
      setTaskList(newList);
      return;
    }

    try {
      const result = await api.put("/tasks/edit", { id, state, token });
      result.data && setTaskList(newList);
    } catch (err) {
      console.log(err.response.data);
    }

    // ----------------
  }

  return (
    <div className="itemDiv uncompleated" style={{ display: "flex" }}>
      <div className="taskNameDiv">{name}</div>
      <div className="buttonDiv">
        <button
          className="taskButton trashButton"
          onClick={() => changeTaskState(id, "deleted")}
        >
          <i className="fas fa-trash" style={{ color: "#FF0000" }}></i>
        </button>
        <button
          className="taskButton checkButton"
          onClick={() => changeTaskState(id, "compleated")}
        >
          <i className="fas fa-check" style={{ color: "#36cc00" }}></i>
        </button>
      </div>
    </div>
  );
}

export default Tasklist;
