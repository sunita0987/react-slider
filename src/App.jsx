import { useState } from 'react';
import React from'react'
import './App.css'
import Slider from './components/Slider';
import StepsCard from './components/StepsCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Slider/>
    <StepsCard/>
    </>
  )
}

export default App
