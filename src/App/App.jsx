import React, { useEffect, useState } from 'react'
import axios from 'axios'

const URL = 'https://catfact.ninja/fact'
export const App = () => {
  const [fact, setFact] = useState('lorem ipsum')
  const getData = async () => {
    const result = await axios.get(URL)
    const data = result.data
    setFact(data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div>Hello world
      </div>
      {fact.fact}
    </>
  )
}
