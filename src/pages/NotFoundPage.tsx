import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const NotFoundPage = (): JSX.Element => {
  const [isSmallDisplayDevice] = useMediaQuery('(max-width: 600px)')

  const content = (
    <>
      <VStack spacing={5}>
        <i className="ri-compass-3-fill ri-4x"></i>
        <Heading textAlign="center">Ups! Page not found</Heading>
        <Text textAlign="center" fontSize="xl">
          Seems we've gone too far
        </Text>
        <Button as={RouterLink} to="/" colorScheme="gray">
          Let's go home
        </Button>
      </VStack>
    </>
  )

  return (
    <Box width="90%" maxWidth="800px" marginLeft="auto" marginRight="auto">
      {isSmallDisplayDevice ? (
        <VStack spacing={7}>{content}</VStack>
      ) : (
        <HStack justifyContent="space-evenly" flexFlow="row-reverse">
          {content}
        </HStack>
      )}
    </Box>
  )
}

export default NotFoundPage
