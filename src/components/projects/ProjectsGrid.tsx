import {
  SimpleGrid,
  VStack,
  HStack,
  Image,
  Heading,
  Text,
  Box,
  useMediaQuery,
} from '@chakra-ui/react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import ButtonLink from './ButtonLink'
import Project from '../../models/projectModel'

const ProjectsGrid = ({ projects }: { projects: Project[] }): JSX.Element => {
  const [isSmallDisplayDevice] = useMediaQuery('(max-width: 600px)')

  return (
    <SimpleGrid columns={isSmallDisplayDevice ? 1 : 2}>
      {projects.map((project) => (
        <VStack key={project.id} background="whiteAlpha.200" borderRadius="md">
          <Image
            src={project.logo}
            alt={project.name}
            width="100%"
            objectFit="cover"
            borderTopRadius="md"
          />
          <Box padding="4" paddingTop="2" width="100%">
            <Heading as="h4" size="md" textAlign="center">
              {project.name}
            </Heading>
            <Box height="1" />
            <Text textAlign="center">{project.description}</Text>
            <Box height="3" />
            {project.playStoreLink || project.appStoreLink ? (
              <HStack width="100%">
                {project.playStoreLink && (
                  <ButtonLink
                    name="Play Store"
                    icon={<FaGooglePlay />}
                    link={project.playStoreLink}
                    marginBottom={4}
                  />
                )}
                {project.appStoreLink && (
                  <ButtonLink
                    name="App Store"
                    icon={<FaApple />}
                    link={project.appStoreLink}
                    marginBottom={4}
                  />
                )}
              </HStack>
            ) : null}
            {project.githubLink && (
              <ButtonLink
                name="Github"
                icon={<BsGithub />}
                link={project.githubLink}
              />
            )}
          </Box>
        </VStack>
      ))}
    </SimpleGrid>
  )
}

export default ProjectsGrid
