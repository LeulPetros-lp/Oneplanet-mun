import { useState } from 'react'
import './App.css'
import Events from './components/Events';
import Courses from './components/Courses';
import Services from './components/Services';
import Apply from './components/Apply';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
        {/* ***** Header Area Start ***** */}
       <Header />
        
      

        <Services />

        {/* Events events component */}
        <Events />

        {/* Apply Page Component --> */}
        <Apply />

        {/* Courses Page Component --> */}
        <Courses />

        {/* Statistics Page Component --> */}
       <Statistics />



       {/* Contact Page Component --> */}
        <Contact />
        {/* Scripts */}
        {/* Bootstrap core JavaScript */}
      </>

    </>
  )
}

export default App
