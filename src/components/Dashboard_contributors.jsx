import { FaEthereum } from 'react-icons/fa'
import { truncate } from '../store'
import { useState, useEffect } from 'react'


const Dashboard_contributors = ({ projects }) => {
    const [end, setEnd] = useState(4)
    const [count] = useState(4)
    const [collection, setCollection] = useState([])

    const getCollection = () => projects.slice(0, end)

  useEffect(() => {
    setCollection(getCollection())
  }, [projects, end])
  return (
    <>
      <div class="text-m font-medium text-center px-6 py-4 text-sky-900 ml-72">
            <p>Contributor</p>
        </div>
    <div className="flex flex-col items-start px-14 mx-auto z-10 ml-80 mr-10">
      <div
        className="max-h-[calc(100vh_-_20rem)] overflow-y-auto
        shadow-md rounded-md w-full mb-10"
      >
       
        
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              {/* <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                ID
              </th> */}
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Contributor Name
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Project Name
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Donated
              </th>
              {/* <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Contributor
              </th> */}
            </tr>
          </thead>
          <tbody>
            {collection.map((project, i) => (
              <Backer key={i} project={project} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
} 

const Backer = ({ project }) => (
  <tr className="border-b border-gray-200">
    {/* <td
      className="text-m font-light
      px-6 py-4 whitespace-nowrap"
    >
      <div className="flex justify-start items-center space-x-2">
        <span>{project?.id}</span>
      </div>
    </td> */}
    <td
      className="text-m font-light
                  px-6 py-4 whitespace-nowrap"
    >
      <small className="flex justify-start items-center space-x-1">
        <span className="text-gray-700 font-medium">
         {truncate(project?.owner, 8, 8, 20)}
        </span>
      </small>
    </td>
    <td
      className="text-m font-light
      px-6 py-4 whitespace-nowrap"
    >
     <small className="flex justify-start items-center space-x-1">
        {/* <FaEthereum /> */}
        <span className="text-gray-700 font-medium">
          {project?.title}
        </span>
      </small>
    </td>
    <td
      className="text-m font-light
      px-6 py-4 whitespace-nowrap"
    >
        <small className="flex justify-start items-center space-x-1">
        <FaEthereum />
        <span className="text-gray-700 font-medium">
         {project?.raised}
        </span>
      </small>
        
     
    </td>
    {/* <td
      className="text-m font-light
      px-6 py-4 whitespace-nowrap"
    >
        {project?.backers}
      
    </td> */}
  </tr>
)

export default Dashboard_contributors 
