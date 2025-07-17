import s from './styles/App.module.css'
import BottomNavBar from './components/BottomNavBar/BottomNavBar.tsx'
function App() {

  return (
    <div className={s.container}>
      <BottomNavBar />
    </div>
  )
}

export default App
