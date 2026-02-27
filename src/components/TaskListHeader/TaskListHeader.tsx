import type { Dispatch, SetStateAction } from "react";
import styles from "./TaskListHeader.module.css";

type Filter = "all" | "active" | "completed";

interface Props {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  addTask: () => void;
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
  completionRate: number;
}

export default function TaskListHeader({
  input,
  setInput,
  addTask,
  filter,
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
        <button
          className={`${styles.filterButton} ${filter === "all" ? styles.active : ""}`.trim()}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`${styles.filterButton} ${filter === "active" ? styles.active : ""}`.trim()}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`${styles.filterButton} ${filter === "completed" ? styles.active : ""}`.trim()}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <p className={styles.completionParagraph}>{completionRate}% completed</p>
    </div>
  );
}
