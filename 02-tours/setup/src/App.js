import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true);
    try{
      const res = await fetch(url);
      const tours = await res.json()
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])
  return loading ?
   <main>
     <Loading />
    </main> 
    : 
    <main>
      {tours.length > 0 
      ? <Tours tours={tours} removeTour={removeTour}/>
      : <div>
        <h2>No more tours :(</h2>
        <button onClick={() => fetchTours()} className='btn'>Refetch</button>
        </div>}
    </main>
}

export default App
