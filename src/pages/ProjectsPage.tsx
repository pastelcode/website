import { Text, Box, Center, Heading, HStack, Progress } from '@chakra-ui/react'
import { PostgrestError } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { BiTask } from 'react-icons/bi'
import HomeCard from '../components/home/HomeCard'
import supabase from '../database/supabaseClient'
import Project from '../models/projectModel'
import Loading from '../components/projects/Loading'
import Error from '../components/projects/Error'
import NoProjects from '../components/projects/NoProjects'
import ProjectsGrid from '../components/projects/ProjectsGrid'

const ProjectsPage = (): JSX.Element => {
  useEffect(() => {
    const getProjects = async (): Promise<void> => {
      setIsLoading(true)
      const { data, error } = await supabase.from('projects').select('*')
      if (error !== undefined) {
        setError(error)
        setIsLoading(false)
        return
      }
      setProjects(data as Project[])
      setIsLoading(false)
    }

    getProjects()
  }, [])

  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState<PostgrestError | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <HomeCard compact>
      <Center>
        <HStack>
          <BiTask size="64" />
          <Heading>Proyectos</Heading>
        </HStack>
      </Center>
      <Box height="16" />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error error={error.message} />
      ) : projects.length === 0 ? (
        <NoProjects />
      ) : (
        <>
          <ProjectsGrid projects={projects} />
          <Box height="10" />
          <Progress isIndeterminate colorScheme="brand" size="xs" />
          <Box height="2" />

          <Text textAlign="center">Más en desarrollo...</Text>
        </>
      )}
    </HomeCard>
  )
}

export default ProjectsPage
