import './global.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { TasksInfo } from './components/TasksInfo'

export function App() {
  return (
    <>
      <Header />
      <Input />
      <TasksInfo />
    </>
  )
}
