import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  VStack,
} from '@chakra-ui/react'
import pastelLetters from '../../assets/pastel-letters.svg'
import pastelLogo from '../../assets/pastel.svg'
import { socialMedia } from '../../config/brandInformation'

const Footer = (): JSX.Element => {
  return (
    <Box as="footer" padding={7} paddingTop={20}>
      <VStack>
        <Image src={pastelLogo} alt="Pastel" height={24} />
        <Box height={1} />
        <Image src={pastelLetters} alt="Pastel" height={7} />
        <Box height={6} />
        {socialMedia.map(({ url, name, icon }) => (
          <LinkBox key={url}>
            <VStack marginBottom={4}>
              {icon}
              <Heading as="h6" size="md">
                <LinkOverlay href={url} isExternal>
                  {name}
                </LinkOverlay>
              </Heading>
            </VStack>
          </LinkBox>
        ))}
      </VStack>
    </Box>
  )
}

export default Footer
