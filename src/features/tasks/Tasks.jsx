import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector((state) => {
    console.log(state.tasks);
    return state.tasks;
  });

 const tasksForDate1 = tasks.tasks.filter((task) => task.createdOn === "15/07/2024");
 const tasksForDate2 = tasks.tasks.filter((task) => task.createdOn === "16/07/2024");

 return (
   <div>
     <h1>15/07/2024</h1>
     {tasksForDate1.map((task, index) => (
       <div key={index}>
         <ul>
           <li>
             {task.task}
             <p>Status: {task.status}</p>
           </li>
         </ul>
       </div>
     ))}

     <h1>16/07/2024</h1>
     {tasksForDate2.map((task, index) => (
       <div key={index}>
         <ul>
           <li>
             {task.task}
             <p>Status: {task.status}</p>
           </li>
         </ul>
       </div>
     ))}
   </div>
 );
};

export default Tasks;
