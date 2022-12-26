import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'

const NoProjects = (): JSX.Element => (
  <Alert
    status="info"
    variant="subtle"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    height="200px"
    borderRadius="md"
  >
    <AlertIcon boxSize="40px" marginRight={0} />
    <AlertTitle marginTop={4} marginBottom={1} fontSize="lg">
      I'm ashamed...
    </AlertTitle>
    <AlertDescription maxWidth="sm">
      Contact me to get access to all projects
    </AlertDescription>
  </Alert>
)

export default NoProjects
