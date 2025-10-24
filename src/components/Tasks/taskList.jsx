import './tasks.css'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const TaskList = ({ id, title }) => {

 const {attributes, setNodeRef, listeners, transform, transition} = useSortable({id})


 const style = {
  transition,
  transform: CSS.Transform.toString(transform)
 }

  return (

    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className='task'>
      <input type="checkbox" className='checkbox' />
      {title}
    </div>
  )
}

export default TaskList
