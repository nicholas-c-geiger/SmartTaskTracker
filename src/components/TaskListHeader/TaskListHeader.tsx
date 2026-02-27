import type { Dispatch, SetStateAction } from "react";
import styles from "./TaskListHeader.module.css";

interface Props {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  addTask: () => void;
}

export default function TaskListHeader({ input, setInput, addTask }: Props) {
  return (
    <div className={styles.taskListHeader}>
      <input
        className={styles.taskListHeaderInput}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
      />
      <button className={styles.taskListHeaderButton} onClick={addTask}>
        Add
      </button>
    </div>
  );
}
