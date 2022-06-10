import styles from './Input.module.css'
import { PlusCircle } from 'phosphor-react'

export function Input() {
  return (
    <div className={styles.wrapper}>
      <textarea
        placeholder='Add a new task'
      >
      </textarea>
      <button type='submit'>
        Add
        <PlusCircle weight='bold' />
      </button>
    </div>
  )
}