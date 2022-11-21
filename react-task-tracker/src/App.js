import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

const App = () => {

  let data = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Meeting',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
  ]
  
    // state is immutable
    // state takes the name 'tasks' and a function 'setTasks'
    // state has a default value which is passed as an arg to useState(arg)
    const [tasks, setTasks] = useState(data)
    // ------------ delete a task -------------
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
      /* What we are saying here is we filter the existing tasks and filter
      will output all the tasks that dont have the id that is passed as the arg
      leaving all the tasks there except the one you wanted to delete by id 
      so use state allows us to use a function on the date which changes its contents
      the function dele te tasks uses that function to filter and the filter action
      is automatically displayed im gussing usState takes care of that */
    }

    // ---------- toggle reminder ------------
    const toggleReminder = (id)=>{
      setTasks(
        tasks.map(task =>
          task.id === id ? {...task, reminder: !task.reminder} : task // a crazy map here i think the {...} allows it to  
        )                                                             // access each individual reminder instead of changing them all 
      )
    }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
