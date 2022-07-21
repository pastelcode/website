import { Link as RouterLink } from 'react-router-dom'
import { VStack, Heading, Text, Box, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import HomeCard from './HomeCard'
import ContactUsButton from '../ContactUsButton'
import bubbles from '../../assets/bubbles.svg'

const Introduction = (): JSX.Element => (
  <HomeCard background={`url(${bubbles})`} compact>
    <VStack paddingY="7">
      <Heading textAlign="center" size="4xl" letterSpacing="tighter">
        Conecta tu negocio a Internet
      </Heading>
      <Box height="2" />
      <Text textAlign="center" fontSize="xl">
        y dale doble click a ese mundo de posibilidades
      </Text>
      <Box height="4" />
      <ContactUsButton />
      <Box height="1" />
      <Button
        as={RouterLink}
        to="/proyectos"
        colorScheme="gray"
        rightIcon={<ArrowForwardIcon />}
      >
        Explora nuestros proyectos
      </Button>
    </VStack>
  </HomeCard>
)

export default Introduction
