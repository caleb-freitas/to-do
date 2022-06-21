import styles from './TasksInfo.module.css'

export function TasksInfo() {
  return (
    <header className={styles.tasks}>
      <div className={styles.created}>
        <p className={styles.createdTasks}>Created Tasks</p>
        <p className={styles.counter}>10</p>
      </div>
      <div className={styles.finished}>
        <p className={styles.finishedTasks}>Finished</p>
        <p className={styles.counter}>5 de 10</p>
      </div>
    </header>
  )
}
