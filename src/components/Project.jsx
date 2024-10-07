import React from 'react'
import project from './data/projects.json'
const Project = () => {
  return (
    <>
      <div className="container projects my-3" id='projects'>
        <h1>
          PROJECTS
        </h1>
        <div className="row d-flex justify-content-center align-content-center ">
          {project.map((data) => {
            return (<>
              <div key={data.id} className='my-4 mx-4 col-sm-6 col-md-4 col-lg-3'>
                <div className="card bg-dark text-light" style={{ width: '18rem', border: '2px solid yellow', boxShadow: 'rgba(101, 175, 10, 0.5) 5px 5px 10px 0' }} data-aos="flip-right" data-aos-duration="1000">
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img src={data.imageSrc} class="card-img-top" alt="Project_images"
                      style={{
                        width: '250px',
                        height: '200px',
                        border: '2px solid yellow',
                        borderRadius: '10px'
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href={data.demo}  class="btn btn-warning mx-2">Demo</a>
                    <a href={data.source}  class="btn btn-primary mx-2">Code</a>
                  </div>
                </div>
              </div>
            </>)
          })}
        </div>
      </div>
    </>
  )
}

export default Project