import {
  Heading,
  VStack,
  Box,
  Text,
  Image,
  SimpleGrid,
  useMediaQuery,
} from '@chakra-ui/react'

import HomeCard from './HomeCard'

import appInstallationIllustration from '../../assets/app_installation.svg'
import mobilePrototypingIllustration from '../../assets/mobile_prototyping.svg'
import onlineShoppingIllustration from '../../assets/online_shopping.svg'
import fastLoadingIllustration from '../../assets/fast_loading.svg'

const WhatWeOffer = (): JSX.Element => (
  <HomeCard compact>
    <Box borderRadius="3xl" background="brand.500" marginX="auto" padding="10">
      <SimpleGrid spacingY="20">
        <Section
          title="Android, iOS y escritorio"
          description="Alcanza cada sector de tu público objetivo al ofrecer soluciones para cada tipo de usuario"
          illustrationPath={appInstallationIllustration}
        />
        <Section
          title="Diseños modernos e intuitivos"
          description="Cuidamos cada aspecto de nuestros diseños de interfaces para que tus usuarios disfruten de una navegación satisfactoria y sin obstáculos"
          illustrationPath={mobilePrototypingIllustration}
          isReversed
        />
        <Section
          title="Tecnologías modernas"
          description="Nuestro enfoque está construido sobre tecnologías modernas, como lo es Flutter, para hacer un desarrollo rápido, mantenible y eficaz"
          illustrationPath={fastLoadingIllustration}
        />
        <Section
          title="Organiza toda la información"
          description="Obtén la libertad de manejar toda la información de tu aplicación y de tus servicios"
          illustrationPath={onlineShoppingIllustration}
          isReversed
        />
      </SimpleGrid>
    </Box>
  </HomeCard>
)

const Section = ({
  illustrationPath,
  title,
  description,
  isReversed = false,
}: {
  illustrationPath: string
  title: string
  description: string
  isReversed?: boolean
}): JSX.Element => {
  const [isSmallDisplayDevice] = useMediaQuery('(max-width: 600px)')

  isReversed = isSmallDisplayDevice ? false : isReversed

  const illustration = (
    <Image src={illustrationPath} alt={title} alignSelf="center" />
  )

  return (
    <SimpleGrid
      columns={isSmallDisplayDevice ? 1 : 2}
      spacingX="10"
      spacingY={isSmallDisplayDevice ? 10 : undefined}
      color="body.500"
    >
      {!isReversed && illustration}
      <VStack alignItems="start" alignSelf="center">
        <Heading letterSpacing="tight" fontSize="3xl">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>
      {isReversed && illustration}
    </SimpleGrid>
  )
}

export default WhatWeOffer
