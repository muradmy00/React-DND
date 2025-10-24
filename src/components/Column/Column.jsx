import './Column.css' 
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import TaskList from '../Tasks/taskList'

const Column = ({task}) => {


  return (
    <div className='column'>

      <SortableContext items={task} strategy={verticalListSortingStrategy}>

      {task.map((task) => (
        <TaskList key={task?.id} id={task?.id} title={task?.title} />
      ))}

       </SortableContext>

    </div>
  )
}

export default Column
