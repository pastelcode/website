import { Box, Center, Spinner, Text } from '@chakra-ui/react'

const Loading = (): JSX.Element => (
  <>
    <Center>
      <Spinner size="xl" />
    </Center>
    <Box height="6" />
    <Text textAlign="center">Cargando proyectos...</Text>
  </>
)

export default Loading
