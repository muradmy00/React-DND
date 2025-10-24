import { useState } from 'react'
import './App.css'
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import Column from './components/Column/Column'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import Input from './components/Input/Input'


const App = () => {

  const [task, setTask] = useState([
    { id: 1, title: 'This is a task 1 to add' },
    { id: 2, title: 'This is a task 2 to add' },
    { id: 3, title: 'This is a task 3 to add' },
  ])

  // return index
  const getTaskPos = id => task.findIndex(task => task.id === id)


  const handleDragEnd = event => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTask(task => {
      const originalPos = getTaskPos(active.id)
      const newPos = getTaskPos(over.id)

      return arrayMove(task, originalPos, newPos)

    })

  }

  // mobile screen sensor
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // add task
  const addTask = (title) => {
    setTask((task) => [...task, {
      id: task.length + 1, title
    }])
  }

  return (
    <div className='App'>

      <h1>My Tasks</h1>

      <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        
        <Input onSubmit={addTask} />

        <Column task={task} />
      </DndContext>

    </div>
  )
}

export default App
