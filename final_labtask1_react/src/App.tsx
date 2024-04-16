import StudentList from './components/StudentList'
import './App.css'
import StudentSkillList from './components/StudentSkillList'
import StudentEducationList from './components/StudentEducationList'
import StudentSkillsList from './components/skilList'
import ObjList from './components/objectiveList'

function App() {

  return (
    <>
      <StudentList />
      <ObjList/>
      <StudentSkillList />
      <StudentSkillsList/>
      <StudentEducationList/>
      
    </>
  )
}

export default App
