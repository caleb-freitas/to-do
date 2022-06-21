import { Trash } from "phosphor-react";
import styles from "./Task.module.css"

export function Task() {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" id="1" />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      <button type='submit'>
        <Trash weight='bold' />
      </button>
    </div>
  )
}
