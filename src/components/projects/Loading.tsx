import { Box, Center, Spinner, Text } from '@chakra-ui/react'

const Loading = (): JSX.Element => (
  <>
    <Center>
      <Spinner size="xl" speed=".6s" />
    </Center>
    <Box height="6" />
    <Text textAlign="center">Loading projects...</Text>
  </>
)

export default Loading
