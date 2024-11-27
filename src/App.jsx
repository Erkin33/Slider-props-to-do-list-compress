import './App.css'
import Student from './ways'
import Button from './button'
import React, { useState } from 'react'
import Clicker from './clicker'
import MyComponent from './mycomponents'
import ImageToggle from './slider'
import AppLOWER from './list'
import People from './people'
import ImageUpload from './press'
function App() {
   function Slider(){
    const [count, change] = useState(1)
    function less() {
      change(count - 1)
    }
    function over() {
      change(count + 1)
    }
    return(
      <div className='slider'>
      
      <button onClick={less}>-</button>
      <p>{count}</p>
      <button onClick={over}>+</button>
      </div>
     )
   }
   


  const images = [
    {
      ones: '/images/2024Nissan.jpg'
    },
    {
      twoes: '/images/Koenigsegg.jpg'
    },
    {
      thries: '/images/porsche.jpg'
    }
    
  ]
  return (
    <>
      <People type="Я не человек" ispeople={false}/>
      <People type="Я человек" ispeople={true}/>
      <People type="Я не человек" ispeople={false}/>
      <People type="Я человек" ispeople={true}/>
      <Student name="try" age={30} isStudent={true} />
      <Student name="B" age={40} isStudent={false} />
      <Student name="C" age={20} isStudent={true} />
      <Student/>
      <Button type="one">one</Button>
      <Button type="two">two</Button>
      <Button type="three">three</Button>
      <div className='clicker'> 
        <Clicker/>
      </div>
      <div className='Image'> 
          <img src='/images/2024Nissan.jpg' alt="" />
      </div>
      <Slider/>
      <MyComponent/>
      <ImageToggle/>
      <AppLOWER/>
      <ImageUpload/>
    </>
  )
}

export default App