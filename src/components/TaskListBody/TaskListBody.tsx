import type { Task } from "../../types";
import styles from "./TaskListBody.module.css";

interface Props {
  tasks: Task[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export default function TaskListBody({ tasks, toggleTask, deleteTask }: Props) {
  return (
    <ul className={styles.taskListBodyList}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.taskListBodyItem}>
          <span
            onClick={() => toggleTask(task.id)}
            className={`${styles.taskListBodyTitle} ${task.completed ? styles.completed : ""}`.trim()}
          >
            {task.title}
          </span>
          <button className={styles.deleteButton} onClick={() => deleteTask(task.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
