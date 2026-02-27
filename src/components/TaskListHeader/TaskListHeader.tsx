import type { Dispatch, SetStateAction } from "react";
import styles from "./TaskListHeader.module.css";

type Filter = "all" | "active" | "completed";

interface Props {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  addTask: () => void;
  setFilter: Dispatch<SetStateAction<Filter>>;
  completionRate: number;
}

export default function TaskListHeader({
  input,
  setInput,
  addTask,
  setFilter,
  completionRate,
}: Props) {
  return (
    <div>
      <div className={styles.taskListHeaderAddTask}>
        <input
          className={styles.taskListHeaderAddTaskInput}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button className={styles.taskListHeaderAddTaskButton} onClick={addTask}>
          Add
        </button>
      </div>

      <div className={styles.filterRow}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <p className={styles.completionParagraph}>{completionRate}% completed</p>
    </div>
  );
}
