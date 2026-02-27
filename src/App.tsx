import "./App.css";
import { useState, useMemo } from "react";
import TaskListHeader from "./components/TaskListHeader/TaskListHeader";
import TaskListBody from "./components/TaskListBody/TaskListBody";
import type { Task } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";

type Filter = "all" | "active" | "completed";

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [filter, setFilter] = useState<Filter>("all");
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: input,
      completed: false,
      createdAt: Date.now(),
    };

    setTasks(prev => [newTask, ...prev]);
    setInput("");
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "active":
        return tasks.filter(t => !t.completed);
      case "completed":
        return tasks.filter(t => t.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const completionRate = useMemo(() => {
    if (tasks.length === 0) return 0;
    return Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100);
  }, [tasks]);

  return (
    <div className="container">
      <h2>Smart Task Tracker</h2>

      <TaskListHeader
        input={input}
        setInput={setInput}
        addTask={addTask}
        filter={filter}
        setFilter={setFilter}
        completionRate={completionRate}
      />

      <TaskListBody tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;