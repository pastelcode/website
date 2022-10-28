import {
  Box,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import Project from '../../models/projectModel'
import ButtonLink from './ButtonLink'

const ProjectsGrid = ({ projects }: { projects: Project[] }): JSX.Element => {
  const [isSmallDisplayDevice] = useMediaQuery('(max-width: 600px)')

  return (
    <SimpleGrid
      columns={isSmallDisplayDevice ? 1 : 2}
      spacing={isSmallDisplayDevice ? 7 : 14}
    >
      {projects.map((project) => (
        <VStack key={project.id} overflow="hidden">
          <Image
            src={project.logo}
            alt={project.name}
            width="100%"
            objectFit="cover"
            borderRadius="2xl"
          />
          <VStack
            paddingY="6"
            paddingX="1"
            width="100%"
            height="100%"
            alignItems="start"
          >
            <Heading as="h4">{project.name}</Heading>
            <Text>{project.description}</Text>
            <Box height="2" />
            {project.playStoreLink || project.appStoreLink ? (
              <HStack width="100%" alignItems="center">
                {project.playStoreLink && (
                  <ButtonLink
                    name="Play Store"
                    icon={<FaGooglePlay />}
                    link={project.playStoreLink}
                  />
                )}
                {project.appStoreLink && (
                  <>
                    <Box width="1" />
                    <ButtonLink
                      name="App Store"
                      icon={<FaApple />}
                      link={project.appStoreLink}
                    />
                  </>
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
          </VStack>
        </VStack>
      ))}
    </SimpleGrid>
  )
}

export default ProjectsGrid
