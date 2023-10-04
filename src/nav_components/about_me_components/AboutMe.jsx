import { React } from 'react'
import CardFooter from './CardFooter'
import CardBody from './CardBody'
import Headshot from './Headshot'
import './AboutMe.css'

function App() {
  return (
    <div className='card-container'>
      <div className="main-aboutme">
        <Headshot />
        <CardBody />
      </div>
      <CardFooter />
    </div>
  )
}

export default App
