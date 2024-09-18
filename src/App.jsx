import "./App.css";

import { PopUp } from "./components/PopUp/PopUp";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { tasks } from "./data";
import { useState, useEffect } from "react";

function App() {
  const [taskList, setTaskList] = useState(tasks);

  const AddTask = () => {
    const newTask = {
      id: taskList.length + 1,
      theme: "Research",
      title: `Задача ${taskList.length + 1}`,
      date: "01.04.24",
      status: "Без статуса",
    };
    setTaskList([...taskList, newTask]);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="wrapper">
      <PopUp />
      <Header AddTask={AddTask} />
      {isLoading ? "Загрузка..." : <Main tasks={taskList} />}
    </div>
  );
}

export default App;
