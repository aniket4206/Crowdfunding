import { useState, useEffect } from 'react'
import { truncate } from '../store'
import { FaEthereum } from 'react-icons/fa'

const Dashboard_projects = ({ projects }) => {
  const [end, setEnd] = useState(4)
  const [count] = useState(4)
  const [collection, setCollection] = useState([])

  const getCollection = () => projects.slice(0, end)

  useEffect(() => {
    setCollection(getCollection())
  }, [projects, end])

  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-col md:w-2/3">
        {collection.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  )
}
const ProjectCard = ({ project }) => {
    const expired = new Date().getTime() > Number(project?.expiresAt + '000')
  
    return (
        <>
    <div className="flex flex-col justify-center items-start md:w-2/3 px-6 mx-auto">
      <div
        className="max-h-[calc(100vh_-_25rem)] overflow-y-auto
        shadow-md rounded-md w-full mb-10"
      >
        <div class="text-m font-medium text-center px-6 py-4 text-sky-900">
            <p>Projects</p>
        </div>
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Backer
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Donations
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Refunded
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody>
         
          <tr key={project?.id}>
              <td
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
               
            ddd     </td>
              <td
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                {project?.title}
              </td>
              <td
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
               {project?.cost}
              </td>
              <td
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
               {project?.raised}
              </td>
            </tr>
            {/* <tr className="border-b border-gray-200">
      <td
        className="text-sm font-light
        px-6 py-4 whitespace-nowrap"
      >
        <div className="flex justify-start items-center space-x-2">
          {/* <Identicon
            className="h-10 w-10 object-contain rounded-full shadow-md"
            string={project.name}
            size={25}
          /> */}
          {/* <span>{project?.id}</span>
        </div>
      </td>
      <td
        className="text-sm font-light
                    px-6 py-4 whitespace-nowrap"
      >
        <small className="flex justify-start items-center space-x-1">
          <FaEthereum />
          <span className="text-gray-700 font-medium"> */}
            {/* {project.cost} ETH */}
          {/* </span>
        </small>
      </td>
      <td
        className="text-sm font-light
        px-6 py-4 whitespace-nowrap"
      > */}
        {/* {project.id ? 'Yes' : 'No'} */}
      {/* </td>
      <td
        className="text-sm font-light
        px-6 py-4 whitespace-nowrap"
      > */}
        {/* <Moment fromNow>{project.title}</Moment> */}
      {/* </td>
    </tr> */} 
     {/* {backers.map((backer, i) => (
              <Backer key={i} backer={backer} />
            ))} */}
           
          </tbody>
        </table>
      </div>
    </div>
  </>

)
}




export default Dashboard_projects
