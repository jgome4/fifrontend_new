import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";
import { useState, useEffect }  from 'react';
import { Task } from '../../ddd/domain/models/task/task';
import { TaskService } from '../../ddd/domain/services/servicestask/task.services';
import Grid from '@mui/material/Grid';
import Datagridtask from '../../components/task/datagridtask';
import Button from '@mui/material/Button';
import AlertDialog from '../../components/task/modaltask';
import Swal from 'sweetalert2'

const Home: NextPage = () => {
  const [Task, setTask] = useState<Task[]>([])
  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadTask()
   
  }, [])

  async function loadTask(){
   await  TaskService.getTask().then(setTask)
    .catch((error)=>{ 
    console.log(error)
 });
  }
  async function saveTask(dataSave:Task){

  await  TaskService.postTask(dataSave).then((s)=>{ 
      alertMessage("Guardó exitosamente","success")
      loadTask()
   })
    .catch((error)=>{ 
    console.log(error)
     alertMessage("Ocurrio un error","error")
   });

  }
 async function deleteTask(taskId:string){
 await TaskService.deleteTask(taskId).then(()=>{ 
    alertMessage("Eliminado exitosamente","success")
    loadTask()
})
  .catch((error)=>{ 
  console.log(error)
  alertMessage("Ocurrio un error","error")
});
}
async function editTask(dataSave:Task){

  await TaskService.putTask(dataSave).then(()=>{ 
    alertMessage("Editado exitosamente","success")
    loadTask()
})
  .catch((error)=>{ 
  console.log(error)
  alertMessage("Ocurrio un error","error")
 });

}
function alertMessage(title:string,icon:any){
  Swal.fire({
    icon:icon,
    title: `${title}`,
  })
}
const handleClickOpen = () => {
  setOpen(true);

};
const handleClose = () => {
  setOpen(false);
};
  return (
    <>
      <Head>
        <title>Lista de Tareas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerOuter}>
        <div className={styles.containerInner}>
        
          <h1 className={styles.title}>
          <img width="68" height="68" src="https://static.comunicae.com/photos/notas/1209231/1572945593_fi_group.png"/>
          &nbsp;&nbsp;Lista de Tareas
          </h1>
        </div>
        
      </div>
      <main className="container  mx-auto  flex-col items-center justify-center min-h-screen p-4">
       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
 
      <br/>
      <Grid sx={{ flexGrow: 1 }} >
      <Button variant="contained" onClick={()=>handleClickOpen()} >Nueva Tarea</Button>
      <AlertDialog openAlert={open} closeAlert={handleClose} saveTask={saveTask} ></AlertDialog>
      <br/>
         <Datagridtask
             data={Task}
             deleteTask={deleteTask}
             closeAlert={handleClose}
             handleClickOpen={handleClickOpen}
             openAlert={open}
             editTask={editTask}
          />

        </Grid>
           </div>
      </main>
      
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardDescription}>{description}</p>
      <a
        className={styles.cardDocumentation}
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};
