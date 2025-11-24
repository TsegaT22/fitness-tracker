import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddWorkout from './pages/AddWorkout'
import ViewWorkouts from './pages/ViewWorkouts'
import Navbar from './components/Navbar'



function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-workout' element={<AddWorkout />} />
          <Route path='/view-workouts' element={<ViewWorkouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
