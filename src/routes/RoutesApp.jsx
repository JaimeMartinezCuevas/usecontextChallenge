import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from '../themes/ThemeContext.jsx';
import Home from '../pages/Home.jsx'
import Profile from '../pages/Profile.jsx'
import MyJob from '../pages/MyJob.jsx'
import Button from '../components/Button.jsx';
import { Template } from '../components/Template.jsx';


function RoutesApp () {
  const {theme} = useTheme()
  
  return (
    <Router>
      <section className={`App ${theme}`}>
        <div className="content">
          <Template>
            <Button />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/myjob' element={<MyJob />}></Route>
        </Routes>
          </Template>
        </div>
      </section>
    </Router>
  )
} 

export default RoutesApp