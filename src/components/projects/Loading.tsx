import { Box, Text, Spinner, Center } from '@chakra-ui/react'

const Loading = (): JSX.Element => (
  <>
    <Center>
      <Spinner size={'xl'} />
    </Center>
    <Box height={'2'} />
    <Text textAlign="center">Cargando proyectos...</Text>
  </>
)

export default Loading
