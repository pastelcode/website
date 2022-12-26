import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Progress,
  Text,
  VStack,
} from '@chakra-ui/react'
import { PostgrestError } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import layeredWavesUp from '../assets/layered-waves-up.svg'
import Error from '../components/projects/Error'
import Loading from '../components/projects/Loading'
import NoProjects from '../components/projects/NoProjects'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import supabase from '../database/supabaseClient'
import Project from '../models/projectModel'

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
      const reversedData = (data as Project[]).reverse()
      setProjects(reversedData)
      setIsLoading(false)
    }

    getProjects()
  }, [])

  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState<PostgrestError | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <VStack>
      <Image
        src={layeredWavesUp}
        alt="Waves illustration"
        height={20}
        width="100%"
        objectFit="cover"
        objectPosition="bottom"
      />
      <Center>
        <HStack>
          <Heading>Projects</Heading>
        </HStack>
      </Center>
      <Box width="90%" maxWidth="900px">
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
            <Box height="20" />
            <Progress isIndeterminate colorScheme="brand" size="xs" />
            <Box height="5" />
            <Text textAlign="center">Developing...</Text>
          </>
        )}
      </Box>
    </VStack>
  )
}

export default ProjectsPage
