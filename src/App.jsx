import './App.css'
import Header from "./components/Header/Header";
import JobDetails from './components/Job-details/JobDetails';
import JobList from './components/Jobs/JobList';
 
import {Routes, Route, Navigate} from 'react-router-dom';
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Navigate to='/jobs' />} />
      <Route path='/jobs' element={<JobList />} />
      <Route path='/jobs/:position' element={<JobDetails />} />


    </Routes>
    </>
  )
}

export default App