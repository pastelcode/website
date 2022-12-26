import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import bubbles from '../../assets/bubbles.svg'

import ContactUsButton from '../ContactUsButton'
import HomeCard from './HomeCard'

const Introduction = (): JSX.Element => (
  <HomeCard background={`url(${bubbles})`} compact hasBlur>
    <VStack paddingY="7" width="100%">
      <Heading textAlign="center" size="4xl" letterSpacing="tighter">
        Mobile app?
      </Heading>
      <Box height="2" />
      <Text textAlign="center" fontSize="xl" fontWeight="medium">
        Got you
      </Text>
      <Box height="4" />
      <ContactUsButton />
      <Box height="1" />
      <Button
        as={RouterLink}
        to="/projects"
        colorScheme="gray"
        willChange="filter"
        filter="none"
        transition="all 0.2s ease"
        _hover={{
          filter: 'drop-shadow(0 0 2em #ffffff)',
        }}
        rightIcon={<ArrowForwardIcon />}
      >
        Explore projects
      </Button>
    </VStack>
  </HomeCard>
)

export default Introduction
