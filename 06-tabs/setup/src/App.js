import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  },[])
  return (
    <>
      {loading ? 
      <section className="section loading">
        <h1>loading...</h1>
      </section> 
      :
      <section>
        <div>
          <h2>Experience</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-centre'>
          {/*BTN CONTAINER */}
          <div className="btn-container">
            {jobs.map((job, ind) => (
            <button 
            className={`job-btn ${ind === value && 'active-btn'}`} 
            key={job.id}
            onClick={() => setValue(ind)}>{job.title}</button>)
            )}
          </div>
          <article>
            <h3>{jobs[value].title}</h3>
            <h4>{jobs[value].company}</h4>
            <p className='job-date'>{jobs[value].dates}</p>
            {jobs[value].duties.map((duty,ind) => {
              return <div key={ind} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>
              </div>
            })}
          </article>
        </div>
      </section>}
    </>
  )
}

export default App
