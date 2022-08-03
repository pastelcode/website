import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
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
      Qué vergüenza, pero...
    </AlertTitle>
    <AlertDescription maxWidth="sm">
      Comunícate con nosotros para obtener acceso directo a todos nuestros
      proyectos
    </AlertDescription>
  </Alert>
)

export default NoProjects
