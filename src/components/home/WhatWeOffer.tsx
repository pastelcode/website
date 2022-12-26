import {
  Box,
  Heading,
  SimpleGrid,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'

import HomeCard from './HomeCard'

const Section = ({
  illustration,
  title,
  isReversed = false,
}: {
  illustration: JSX.Element
  title: string
  isReversed?: boolean
}): JSX.Element => {
  const [isSmallDisplayDevice] = useMediaQuery('(max-width: 600px)')
  isReversed = isSmallDisplayDevice ? false : isReversed

  return (
    <SimpleGrid
      columns={1}
      spacingY={isSmallDisplayDevice ? 10 : undefined}
      color="body.500"
    >
      <VStack alignItems="center" alignSelf="center">
        {illustration}
        <Heading letterSpacing="tight" fontSize="3xl" textAlign="center">
          {title}
        </Heading>
      </VStack>
    </SimpleGrid>
  )
}

const WhatWeOffer = (): JSX.Element => (
  <HomeCard compact>
    <Box borderRadius="3xl" background="brand.500" marginX="auto" padding="10">
      <SimpleGrid spacingY="10">
        <Section
          title="Android and iOS"
          illustration={<i className="ri-device-line ri-4x" />}
        />
        <Section
          title="Modern and intuitive designs"
          illustration={<i className="ri-paint-brush-line ri-4x" />}
        />
        <Section
          title="Edge technologies"
          illustration={<i className="ri-shield-flash-line ri-4x" />}
        />
      </SimpleGrid>
    </Box>
  </HomeCard>
)

export default WhatWeOffer
