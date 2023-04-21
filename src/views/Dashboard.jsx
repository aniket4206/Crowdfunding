import { useEffect } from 'react'
import Projects from '../components/Projects'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'
import Dashboard_home from '../components/Dashboard_home'
import Dashboard_projects from '../components/Dashboard_projects'
import Dashboard_contributors from '../components/Dashboard_contributors'

const Dashboard = () => {
  const [projects] = useGlobalState('projects')

  useEffect(async () => {
    await loadProjects()
  }, [])
  return (
    <>
      <Dashboard_home />
      {/* <Projects projects={projects} /> */}
      <Dashboard_projects projects={projects} />
      <Dashboard_contributors projects={projects} />
    </>
  )
}

export default Dashboard
