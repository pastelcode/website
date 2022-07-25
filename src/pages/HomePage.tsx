import { VStack } from '@chakra-ui/react'
import CTA from '../components/CTA'

import Introduction from '../components/home/Introduction'
import WhatWeOffer from '../components/home/WhatWeOffer'
import WhyToChooseUs from '../components/home/WhyToChooseUs'

const HomePage = (): JSX.Element => {
  return (
    <VStack>
      <Introduction />
      <WhatWeOffer />
      <WhyToChooseUs />
      <CTA />
    </VStack>
  )
}

export default HomePage
