import React from "react";
import { StateContext } from "../Todolist.component";

import api from "../../api/axios.api";

function Dashbord() {
  const { setRenderKey, renderKey, taskList, setTaskList } =
    React.useContext(StateContext);

  const textBox = React.useRef(null);

  function filterTasks(event) {
    setRenderKey(event.target.value);
  }

  async function submitNewTask(event) {
    event.preventDefault();
    if (textBox.current.value && renderKey === "uncompleated") {
      const newTask = {
        id: new Date(),
        name: textBox.current.value,
        state: "uncompleated",
      };

      // ----------------

      textBox.current.value = "";
      const token = window.localStorage.getItem("token");

      if (!token) {
        setTaskList([newTask, ...taskList]);
        return;
      }

      try {
        const result = await api.put("/tasks/add", { newTask, token });
        result.data && setTaskList([newTask, ...taskList]);
      } catch (err) {
        console.log(err.response.data);
      }

      // ----------------
    }
  }

  return (
    <section>
      <h1>Todolist</h1>
      <div className="container main">
        <div className="container innerContainer form">
          <div className="container">
            <form onSubmit={submitNewTask}>
              <input type="text" id="textBox" ref={textBox} />
              <button type="submit" id="subButton">
                <i className="fas fa-plus"></i>
              </button>
            </form>
          </div>
          <div className="container">
            <select id="filterOptions" onChange={filterTasks}>
              <option value="uncompleated">Uncompleated</option>
              <option value="compleated">Compleated</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashbord;
