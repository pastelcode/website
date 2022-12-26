import { Button, HStack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const ContactUsButton = (): JSX.Element => {
  return (
    <Button
      as={RouterLink}
      to="/contact"
      size="lg"
      willChange="filter"
      filter="none"
      transition="all 0.2s ease"
      _hover={{
        filter: 'drop-shadow(0 0 2em #646cff)',
      }}
    >
      <HStack alignItems="center">
        <i className="ri-chat-3-line" />
        <Text>Contact me</Text>
      </HStack>
    </Button>
  )
}

export default ContactUsButton
