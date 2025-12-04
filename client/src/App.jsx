import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddWorkout from './pages/AddWorkout'
import ViewWorkouts from './pages/ViewWorkouts'
import NavBar from './components/NavBar'



function App() {
  return (
    <div>
      <NavBar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddWorkout />} />
          <Route path='/workouts' element={<ViewWorkouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
