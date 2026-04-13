import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Nav from './components/Nav/Nav'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Diseñar la base de datos', description: 'Crear el esquema de Prisma para las tareas.', isCompleted: true },
    { id: 2, title: 'Implementar API', description: 'Crear los endpoints CRUD en el backend.', isCompleted: false },
    { id: 3, title: 'Conectar Frontend', description: 'Usar Fetch o Axios para consumir la API.', isCompleted: false },
  ])

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ))
  }

  return (
  <>
    <header>
      <Nav />
    </header>
    <main className="p-8 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map(task => (
          <Card 
            key={task.id}
            {...task}
            onToggle={toggleTask}
          />
        ))}
      </div>
    </main>
  </>
  )
}

export default App
