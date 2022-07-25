import { Text, Box, Icon } from '@chakra-ui/react'
import { BiHeart } from 'react-icons/bi'

import HomeCard from './HomeCard'

const WhyToChooseUs = (): JSX.Element => (
  <HomeCard compact>
    <Box background="whiteAlpha.100" borderRadius="xl" padding="7">
      <Icon boxSize={12} as={BiHeart} />
      <Box height="2" />
      <Text fontStyle="italic" fontWeight="medium">
        Amamos lo que hacemos y la pasión que nos mueve asegura productos y
        servicios de alta calidad
      </Text>
    </Box>
  </HomeCard>
)
export default WhyToChooseUs
