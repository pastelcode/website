import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import waves from '../assets/waves.svg'
import HomeCard from './home/HomeCard'

const CTA = (): JSX.Element => (
  <HomeCard background={`url(${waves}) center repeat-x`}>
    <VStack>
      <Heading textAlign="center">Discover</Heading>
      <Box height={3} />
      <HStack>
        <ArrowForwardIcon boxSize={7} />
        <Button
          as={RouterLink}
          to="/projects"
          size="lg"
          willChange="filter"
          filter="none"
          transition="all 0.2s ease"
          _hover={{
            filter: 'drop-shadow(0 0 2em #646cff)',
          }}
        >
          <HStack alignItems="center">
            <i className="ri-bug-line" />
            <Text>Projects</Text>
          </HStack>
        </Button>
        <ArrowBackIcon boxSize={7} />
      </HStack>
    </VStack>
  </HomeCard>
)

export default CTA
