import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const Error = ({ error }: { error: string }): JSX.Element => (
  <Alert
    status="error"
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
      Ha ocurrido un error
    </AlertTitle>
    <AlertDescription maxWidth="sm">{error}</AlertDescription>
  </Alert>
)

export default Error
